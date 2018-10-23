import { Tracker } from 'meteor/tracker'
import SimpleSchema from 'simpl-schema'
import {AutoForm} from 'meteor/aldeed:autoform'
import '../DynaView'
import './javascriptExample.html'
console.log('load javascript ui component')

// extend simple schema options
SimpleSchema.extendOptions(['autoform'])

// define schema
console.log('define schema')
const schema = new SimpleSchema({

  default: {
    type: String,
    autoform: {
      type: 'javascript',
      default: `return 'this is default code';`
    }
  },

  initialized: {
    type: String,
    autoform: {
      type: 'javascript'
    }
  },


}, { tracker: Tracker})
console.log('Schema', schema)

// template helpers
Template.javascriptExample.helpers({
  doc() {
    return {
      initialized: `return 'this code has been initialized';`,
    }
  },
  schema() {
    return schema
  }
})
