/*jshint esversion: 6 */

import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';
import wNumb from 'wnumb';

export default new SimpleSchema({

  arrayOfStrings: {
    type: Array
  },
  'arrayOfStrings.$': {
    type: String,
    label: 'A string field'
  },

  arrayOfObjects: {
    type: Array
  },
  'arrayOfObjects.$': {
    type: Object,
    label: 'Children'
  },
  'arrayOfObjects.$.child1': {
    type: String
  },
  'arrayOfObjects.$.child2': {
    type: Object
  },
  'arrayOfObjects.$.child2.grandChild': {
    type: String
  }

}, { tracker: Tracker});
