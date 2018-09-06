// imports
import { Template } from 'meteor/templating'
import './textExample.html'

// on created
Template.textExample.onCreated(() => {
  const instance = Template.instance()
})

// on rendered
Template.textExample.onRendered(() => {
  const instance = Template.instance()
})

// helpers
Template.textExample.helpers({
  doc: {
    textInitialised: 'This is an initialized value'
  }
})

// events
Template.textExample.events({

  // on click class
  'click .className'(event, instance) {
  }
})

// on destroyed
Template.textExample.onDestroyed(() => {
  const instance = Template.instance()
})
