/*jshint esversion: 6 */

import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

SimpleSchema.extendOptions(['autoform']);

export default new SimpleSchema({

  everythingGoes: {
    type: String,
    optional: true
  },

  maximumLengthThree: {
    type: String,
    optional: true,
    max: 3,
    autoform: {
      default: 'abc'
    }
  },

  simpleSwitch: {
    type: Boolean,
    autoform: {
      type: 'switch'
    }
  },

  optionalDatePicker: {
    type: Date,
    optional: true,
    autoform: {
      type: 'pickadate',
      pickadateOptions: {
      }
    }
  },

  optionalDate: {
    type: Date,
    optional: true
  },

  optionalDate: {
    type: Date,
    optional: true
  },

  fileUpload: {
    type: String,
    optional: true,
    autoform: {
      type: 'fileUpload',
      collection: 'Files'
    }
  }
}, { tracker: Tracker});
