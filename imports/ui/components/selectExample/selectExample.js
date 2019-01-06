// imports
import { Template } from 'meteor/templating'
import schema from '/imports/api/schemas/selectExample'
import './selectExample.html'

// helpers
Template.selectExample.helpers({
  schema: schema,
  doc: {}
})
