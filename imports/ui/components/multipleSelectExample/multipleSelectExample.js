// imports
import { Template } from 'meteor/templating'
import schema from '/imports/api/schemas/multipleSelectExample'
import './multipleSelectExample.html'

// helpers
Template.multipleSelectExample.helpers({
  schema: schema,
  doc: {}
})
