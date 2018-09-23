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
      pickadateOptions: {
        closeOnSelect: true,
        closeOnClear: true,
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
      timepickerOptions: {
        default: 'now',       // Set default time
        fromnow: 0,           // set default time to * milliseconds from now (using with default = 'now')
        twelvehour: true,     // Use AM/PM or 24-hour format
        donetext: 'Done',     // text for done-button
        cleartext: 'Clear',   // text for clear-button
        canceltext: 'Cancel', // Text for cancel-button
        autoclose: false,     // automatic close timepicker
        ampmclickable: true,  // make AM PM clickable
      }
    }
  }

}, { tracker: Tracker});
