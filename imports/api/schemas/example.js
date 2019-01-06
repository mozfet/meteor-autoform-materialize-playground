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

  numberDefault: {
    type: Number,
    min: 1,
    max: 10,
    label: 'Simple number field with a value between 1 and 10',
    autoform: {
      default: 5
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
      firstOption: '(Select an option...)',
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
    minCount: 1,
    maxCount: 2,
    autoform: {
      type: 'select-multiple',
      firstOption: '(Select one of many options...)',
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

  multipleSelectPlaceholder: {
    type: Array,
    label: 'Multiple select with placeholder',
    minCount: 1,
    maxCount: 2,
    autoform: {
      type: 'select-multiple',
      placeholder: 'Select an option',
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
  'multipleSelectPlaceholder.$': {
      type: String,
      allowedValues: ['VALUE11', 'VALUE12', 'VALUE13']
  },

  multipleSelectMinMax: {
    type: Array,
    label: 'Multiple select with count between 1 and 2',
    minCount: 1,
    maxCount: 2,
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
  'multipleSelectMinMax.$': {
      type: String,
      allowedValues: ['VALUE11', 'VALUE12', 'VALUE13']
  },

  selectRadioInline: {
    type: String,
    allowedValues: ['VALUE1', 'VALUE2'],
    autoform: {
      type: 'select-radio-inline'
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
      type: 'noUiSlider2',
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
  'object.thirdChild': {
    type: Array,
    label: 'Third Child',
    minCount: 1,
    maxCount: 2,
    autoform: {
      type: 'select-multiple',
      firstOption: 'Select an option...',
      options: [{
        label: 'Option 20',
        value: 'VALUE20'
      },
      {
        label: 'Option 21',
        value: 'VALUE21'
      },
      {
        label: 'Option 22',
        value: 'VALUE22'
      }
    ]}
  },
  'object.thirdChild.$': {
      type: String,
      allowedValues: ['VALUE20', 'VALUE21', 'VALUE22']
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
