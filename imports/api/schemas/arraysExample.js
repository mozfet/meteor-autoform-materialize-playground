/*jshint esversion: 6 */

import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';
import wNumb from 'wnumb';

export default new SimpleSchema({

  arrayOfStrings: {
    type: Array,
    minCount: 1,
    maxCount: 3,
    optional: true  // but, but, with a min or max count it aint optional?
  },
  'arrayOfStrings.$': {
    type: String,
    label: 'A string field with placeholder',
    autoform: {
     placeholder: 'Placeholder'
    }
  },

  arrayOfObjects: {
    type: Array,
    optional: true
  },
  'arrayOfObjects.$': {
    type: Object,
    label: 'Children',
    optional: false
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
