/*jshint esversion: 6 */

import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';
import wNumb from 'wnumb';

SimpleSchema.extendOptions(['autoform']);

export default new SimpleSchema({

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

  selectWithoutDefault: {
    type: String,
    allowedValues: ['VALUE1', 'VALUE2'],
    autoform: {
      type: 'select'
    }
  },

  // selectWithoutDefaultWithPlacehorder: {
  //   type: String,
  //   allowedValues: ['VALUE1', 'VALUE2'],
  //   autoform: {
  //     type: 'select',
  //     placeholder: 'Holding a place...'
  //   }
  // },
  //
  // selectWithDefault: {
  //   type: String,
  //   allowedValues: ['VALUE1', 'VALUE2'],
  //   autoform: {
  //     type: 'select',
  //     default: 'VALUE1'
  //   }
  // },
}, { tracker: Tracker});
