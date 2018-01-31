/*jshint esversion: 6 */

import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';
import wNumb from 'wnumb';

SimpleSchema.extendOptions(['autoform']);

export default new SimpleSchema({

  arrayOfStrings: {
    type: Array
  },
  'arrayOfStrings.$': {
    type: String,
    label: 'A string field'
  },

  // arrayOfObjects: {
  //   type: Array
  // },
  // 'arrayOfObjects.$': {
  //   type: Object,
  //   label: 'Object'
  // },
  // 'arrayOfObjects.$.firstChild': {
  //   type: String
  // },
  // 'arrayOfObjects.$.secondChild': {
  //   type: String
  // }

}, { tracker: Tracker});
