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
    max: 3
  },

  simpleSwitch: {
    type: Boolean,
    autoform: {
      type: 'switch'
    }
  },

  selectWithSpecifiedValues: {
    type: String,
    allowedValues: ['VALUE5', 'VALUE6'],
    optional: false,
    autoform: {
      type: 'select',
      options: [
        {
          label: 'option 5',
          value: 'VALUE5'
        },
        {
          label: 'option 6',
          value: 'VALUE6'
        }
      ]
    }
  },
}, { tracker: Tracker});
