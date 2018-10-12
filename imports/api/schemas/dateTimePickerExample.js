/*jshint esversion: 6 */

import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';
import wNumb from 'wnumb';

SimpleSchema.extendOptions(['autoform']);

export default new SimpleSchema({

  date: {
    type: Date,
    label: 'Pick a date',
    autoform: {
      type: 'pickadate'
    }
  },

  dateInitialised: {
    type: Date,
    label: 'Pick a date with initail value',
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

  timeInitialised: {
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
