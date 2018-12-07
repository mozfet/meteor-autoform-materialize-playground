// imports
import { Template } from 'meteor/templating'
import schema from '../../../api/schemas/selectExample'
import './selectExample.html'

//on created
Template.selectExample.onCreated(() => {
  const instance = Template.instance()
})

//on rendered
Template.selectExample.onRendered(() => {
  const instance = Template.instance()
})

//helpers
Template.selectExample.helpers({
  schema: schema,
  doc: {}
})

//events
Template.selectExample.events({

  //on click class
  'click .className'(event, instance) {
  }
})

//on destroyed
Template.selectExample.onDestroyed(() => {
  const instance = Template.instance()
})
