/*jshint esversion: 6 */

import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';
import wNumb from 'wnumb';

SimpleSchema.extendOptions(['autoform']);

export default new SimpleSchema({

  simplest: String,

  simpleString: {
    type: String,
    max: 1000,
    label: 'Simple text field'
  },

  stringInitialised: {
    type: String,
    max: 1000,
    label: 'Simple text field initialised with data'
  },

  stringDefault: {
    type: String,
    max: 1000,
    label: 'Simple text field with default value',
    autoform: {
      default: 'default text'
    }
  },

  stringPlaceholder: {
    type: String,
    max: 1000,
    label: 'Simple text field with placeholder',
    autoform: {
      placeholder: 'Placeholder'
    }
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

  simpleSwitch: {
    type: Boolean,
    autoform: {
      type: 'switch'
    }
  },

  simpleSwitchInitialised: {
    type: Boolean,
    autoform: {
      type: 'switch'
    }
  },

  customSwitchInitialised: {
    type: String,
    autoform: {
      type: 'switch',
      trueLabel: 'True Label',
      falseLabel: 'False Label',
      trueValue: 'TRUE_VALUE',
      falseValue: 'FALSE_VALUE'
    }
  },

  select: {
    type: String,
    allowedValues: ['VALUE1', 'VALUE2'],
    autoform: {
      type: 'select'
    }
  },

  selectWithDefault: {
    type: String,
    allowedValues: ['VALUE1', 'VALUE2'],
    autoform: {
      type: 'select',
      default: 'VALUE1'
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

  //TODO multiple select with minimum and maximum number of items to select
  // multipleSelectMinMax: {
  //   type: Array,
  //   label: 'Multiple select with minimum and maximum number of items to select',
  //   autoform: {
  //     type: 'select-multiple',
  //     firstOption: 'Select an option...',
  //     minOptionsSelected: 1,
  //     maxOptionsSelected: 2,
  //     options: [{
  //       label: 'Option 11',
  //       value: 'VALUE11'
  //     },
  //     {
  //       label: 'Option 12',
  //       value: 'VALUE12'
  //     },
  //     {
  //       label: 'Option 13',
  //       value: 'VALUE13'
  //     }
  //   ]}
  // },
  // 'multipleSelectMinMax.$': {
  //     type: String,
  //     allowedValues: ['VALUE11', 'VALUE12', 'VALUE13']
  // },


  selectRadioInline: {
    type: String,
    allowedValues: ['VALUE1', 'VALUE2'],
    autoform: {
      type: 'select-radio-inline'
    }
  },

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
        closeOnClear: true
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
        twelvehour: true,    // Use AM/PM or 24-hour format
        donetext: 'Done',       // text for done-button
        cleartext: 'Clear',   // text for clear-button
        canceltext: 'Cancel', // Text for cancel-button
        autoclose: false,     // automatic close timepicker
        ampmclickable: true,  // make AM PM clickable
      }
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
      type: 'noUiSlider',
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
    label: 'Object'
  },
  'arrayOfObjects.$.firstChild': {
    type: String
  },
  'arrayOfObjects.$.secondChild': {
    type: String
  }

}, { tracker: Tracker});
