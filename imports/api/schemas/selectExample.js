/*jshint esversion: 6 */

import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';
import wNumb from 'wnumb';

SimpleSchema.extendOptions(['autoform']);

export default new SimpleSchema({

  // @TODO move to text example

  // requirementMandatory: String,
  //
  // everythingGoes: {
  //   type: String,
  //   optional: true
  // },
  //
  // maximumLengthThree: {
  //   type: String,
  //   max: 3,
  //   optional: true
  // },
  //
  // minimumLengthThree: {
  //   type: String,
  //   min: 3
  // },
  //
  // regexAlphaOnly: {
  //   type: String,
  //   regEx: /^[a-zA-Z]+$/i,
  //   optional: true
  // },

  optionalSelectWithoutDefault: {
    type: String,
    optional: true,
    allowedValues: ['Something', 'Another Thing'],
    autoform: {
      type: 'select'
    }
  },

  optionalSelectWithoutDefaultWithPlacehorder: {
    type: String,
    optional: true,
    allowedValues: ['Something', 'Another Thing'],
    autoform: {
      type: 'select',
      placeholder: 'Holding a place for a thing...'
    }
  },

  optionalSelectWithoutDefaultWithFirstOption: {
    type: String,
    optional: true,
    allowedValues: ['Something', 'Another Thing'],
    autoform: {
      type: 'select',
      firstOption: '(Choose a thing...)'
    }
  },

  selectWithDefaultWithFirstOption: {
    type: String,
    allowedValues: ['Something', 'Another Thing'],
    optional: true,
    autoform: {
      type: 'select',
      defaultValue: 'Another thing',
      firstOption: 'Choose one and only one'
    }
  },

  selectWithDefaultWithPlaceholder: {
    type: String,
    allowedValues: ['Something', 'Another Thing'],
    optional: true,
    autoform: {
      type: 'select',
      defaultValue: 'Another Thing',
      placeholder: '(Choose a thing...)'
    }
  }
}, { tracker: Tracker});
