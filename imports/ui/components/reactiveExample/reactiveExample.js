// imports
import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import { Tracker } from 'meteor/tracker'
import { ReactiveVar } from 'meteor/reactive-var'
import SimpleSchema from 'simpl-schema'
import moment from 'moment'
import 'moment-duration-format'
import './reactiveExample.html'

// extend simple schema options
SimpleSchema.extendOptions(['autoform'])

// set autoform template
AutoForm.setDefaultTemplate('materialize')

// on created
Template.reactiveExample.onCreated(() => {
  const instance = Template.instance()
  instance.state = {
    counter: new ReactiveVar(2),
    reactiveVarSelectOptions: ReactiveVar([])
  }
  instance.autorun(() => {
    const cnt = instance.state.counter.get()
    console.log('cnt ', cnt)
    let reactiveVarSelectOptions = []
    for (let i=0; i<cnt; i++) {
      reactiveVarSelectOptions.push({label: `${i}`, value: i.toString()})
    }
    console.log('reactiveVarSelectOptions ', reactiveVarSelectOptions)
    instance.state.reactiveVarSelectOptions.set(reactiveVarSelectOptions)
  })
})

// on rendered
Template.reactiveExample.onRendered(() => {
  const instance = Template.instance()
})

// helpers
Template.reactiveExample.helpers({
  doc() {
    return {}
  },
  schema() {
    const instance = Template.instance()
    return new SimpleSchema({
      'reactiveVarSelectOptions': {
        type: String,
        optional: true,
        autoform: {
          type: 'select'
        }
      },
      'reactiveVarSelectMultipleOptions': {
        type: Array,
        optional: true,
        autoform: {
          type: 'select-multiple',
          firstOption: '(Choose some)'
        }
      },
      'reactiveVarSelectMultipleOptions.$': {
        type: String
      },
      reactiveText: {
        type: String,
        optional: true
      },
    }, {tracker: Tracker})
  },
  cnt() {
    const instance = Template.instance()
    return instance.state.counter.get()
  },
  reactiveVarSelectOptions() {
    const instance = Template.instance()
    return instance.state.reactiveVarSelectOptions.get()
  }
})

// events
Template.reactiveExample.events({

  //on click class
  'click .js-increment-counter'(event, instance) {
    let cnt = instance.state.counter.get()
    cnt++
    instance.state.counter.set(cnt)
  }
})

// on destroyed
Template.reactiveExample.onDestroyed(() => {
  const instance = Template.instance()
})
