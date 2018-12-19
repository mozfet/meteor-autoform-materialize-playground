import { Tracker } from 'meteor/tracker'
import SimpleSchema from 'simpl-schema'
import {AutoForm} from 'meteor/aldeed:autoform'
import '../DynaView'
import './selectRadioExample.html'

// extend simple schema options
SimpleSchema.extendOptions(['autoform'])

// define schema
const schema = new SimpleSchema({

  optionalSelectStringInline: {
    type: String,
    optional: true,
    allowedValues: ['Something', 'Another Thing', 'One more thing'],
    autoform: {
      type: 'select-radio-inline'
    }
  },

  optionalSelectStringInlineWrap: {
    type: String,
    optional: true,
    allowedValues: ['Something', 'Another Thing', 'One more thing', 'Blah', 'Blahhh', 'Blahhhhh', 'I should', 'Wrap nicely'],
    autoform: {
      type: 'select-radio-inline'
    }
  },

  optionalSelectString: {
    type: String,
    optional: true,
    allowedValues: ['Something', 'Another Thing', 'One more thing'],
    autoform: {
      type: 'select-radio'
    }
  },

  optionalSelectStringWithLabel: {
    type: String,
    label: 'Optional select string with custom label',
    optional: true,
    allowedValues: ['Something', 'Another Thing', 'One more thing'],
    autoform: {
      type: 'select-radio'
    }
  },

  optionalSelectStringWithDefault: {
    type: String,
    optional: true,
    allowedValues: ['Something', 'Another Thing', 'One more thing'],
    autoform: {
      type: 'select-radio',
      default: 'One more thing',
    }
  },

  initializedSelectString: {
    type: String,
    allowedValues: ['Something', 'Another Thing', 'One more thing'],
    autoform: {
      type: 'select-radio'
    }
  },

  mandatorySelectRadioArray: {
    type: Array,
    autoform: {
      type: 'select-radio'
    }
  },
  'mandatorySelectRadioArray.$': {
    type: String,
    allowedValues: ['Something', 'Another Thing', 'One more thing']
  },

  selectRadioArrayWithDefault: {
    type: Array,
    autoform: {
      type: 'select-radio',
      default: 'One more thing',
    }
  },
  'selectRadioArrayWithDefault.$': {
    type: String,
    allowedValues: ['Something', 'Another Thing', 'One more thing']
  },

  initializedRadioArray: {
    type: Array,
    autoform: {
      type: 'select-radio'
    }
  },
  'initializedRadioArray.$': {
    type: String,
    allowedValues: ['Something', 'Another Thing', 'One more thing']
  }
}, { tracker: Tracker})

// template helpers
Template.selectRadioExample.helpers({
  doc() {
    return {
      initializedSelectString: 'Something',
      initializedRadioArray: ['Another Thing']
    }
  },
  schema() {
    return schema
  }
})
