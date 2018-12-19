/*jshint esversion: 6 */

import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';
import wNumb from 'wnumb';

SimpleSchema.extendOptions(['autoform']);

export default new SimpleSchema({

  date: {
    type: Date,
    label: 'Pick a date',
    optional: true,
    autoform: {
      type: 'pickadate'
    }
  },

  stringDate: {
    type: String,
    optional: true,
    autoform: {
      type: 'pickadate'
    }
  },

  dateInitialized: {
    type: Date,
    label: 'Pick a date with initial value',
    autoform: {
      type: 'pickadate'
    }
  },

  dateStringInitialized: {
    type: String,
    label: 'Pick a date string with initial value',
    autoform: {
      type: 'pickadate'
    }
  },

  dateWithOptions: {
    type: Date,
    label: 'Pick a date with options',
    autoform: {
      type: 'pickadate',
      pickerOptions: {
      }
    }
  },

  time: {
    type: String,
    label: 'Pick a time',
    autoform: {
      type: 'pickatime'
    }
  },

  timeInitialized: {
    type: String,
    label: 'Pick a time with initial value',
    autoform: {
      type: 'pickatime'
    }
  },

  timeWithOptions: {
    type: String,
    label: 'Pick a time with options',
    autoform: {
      type: 'pickatime',
      pickerOptions: {
        defaultTime: 'now',
        showClearBtn: true
      }
    }
  }

}, { tracker: Tracker});
