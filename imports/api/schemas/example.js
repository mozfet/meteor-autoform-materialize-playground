/*jshint esversion: 6 */

import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';
import wNumb from 'wnumb';

console.log('define schema for example');

SimpleSchema.extendOptions(['autoform']);

export default new SimpleSchema({

  simplest: String,

  simpleString: {
    type: String,
    max: 1000,
    label: 'Simple text field'
  },

  simpleTextArea: {
    type: String,
    label: 'Simple text area',
    autoform: {
      type: 'textarea'
    }
  },

  mediumTextArea: {
    type: String,
    label: 'Medium Text Area',
    autoform: {
      type: 'medium'
    }
  },

  select: {
    type: String,
    allowedValues: ['VALUE1', 'VALUE2'],
    autoform: {
      type: 'select'
    }
  },

  selectWithSpecifiedValues: {
    type: String,
    allowedValues: ['VALUE5', 'VALUE6'],
    optional: true,
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

  selectWithCalculatedValues: {
    type: String,
    autoform: {
      type: 'select',
      options: () => {
        return [
          {
            label: 'Option 7',
            value: 'VALUE7'
          },
          {
            label: 'Option 8',
            value: 'VALUE8'
          }
        ];
      }
    }
  },

  selectWithFirstOption: {
    type: String,
    optional: true,
    label: 'Select with first option',
    allowedValues: ['VALUE9', 'VALUE10'],
    autoform: {
      type: 'select',
      firstOption: 'Select an option...',
      options: [{
        label: 'Option 9',
        value: 'VALUE9'
      },
      {
        label: 'Option 10',
        value: 'VALUE10'
      }
    ]}
  },

  multipleSelect: {
    type: Array,
    label: 'Multiple select',
    autoform: {
      type: 'select-multiple',
      firstOption: 'Select an option...',
      options: [{
        label: 'Option 11',
        value: 'VALUE11'
      },
      {
        label: 'Option 12',
        value: 'VALUE12'
      },
      {
        label: 'Option 13',
        value: 'VALUE13'
      }
    ]}
  },
  'multipleSelect.$': {
      type: String,
      allowedValues: ['VALUE11', 'VALUE12', 'VALUE13']
  },

  date: {
    type: Date,
    label: 'Pick a date',
    autoform: {
      type: 'pickadate'
    }
  },

  time: {
    type: String,
    label: 'Pick a time',
    autoform: {
      type: 'pickatime'
    }
  },

  object: {
    type: Object
  },
  'object.firstChild': String,
  'object.secondChild': {
    type: Number,
    max: 150,
    min: 30,
    autoform: {
      type: "noUiSlider",
      noUiSliderOptions: {
        step: 20,
        tooltips: true,
        format: wNumb({
      		decimals: 0
      	})
      },
      noUiSlider_pipsOptions: {
        mode: 'steps',
        density: 10
      }
    }
  },
}, { tracker: Tracker});
