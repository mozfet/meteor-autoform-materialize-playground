// imports
import { Tracker } from 'meteor/tracker'
import SimpleSchema from 'simpl-schema'
import {AutoForm} from 'meteor/aldeed:autoform'
import './selectCheckboxExample.html'

// extend simple schema options
SimpleSchema.extendOptions(['autoform'])

// define schema
const schema = new SimpleSchema({
  selectCheckbox: {
    type: Array,
    autoform: {
      type: 'select-checkbox'
    }
  },
  'selectCheckbox.$': {
    type: String,
    allowedValues: ['Something', 'Another Thing']
  },

  selectCheckboxInline: {
    type: Array,
    autoform: {
      type: 'select-checkbox-inline'
    }
  },
  'selectCheckboxInline.$': {
    type: String,
    allowedValues: ['Something', 'Another Thing', 'The only', 'thing we do', 'is go', 'blah', 'blahh', 'blahhh']
  },

  selectCheckboxMinMax: {
    type: Array,
    minCount: 1,
    maxCount: 2,
    autoform: {
      type: 'select-checkbox'
    }
  },
  'selectCheckboxMinMax.$': {
    type: String,
    allowedValues: ['Something', 'Another Thing', 'One more thing']
  }
}, { tracker: Tracker})
console.log('select checkbox schema', schema)

// template helpers
Template.selectCheckboxExample.helpers({
  doc() {
    return {}
  },
  schema() {
    return schema
  }
})
