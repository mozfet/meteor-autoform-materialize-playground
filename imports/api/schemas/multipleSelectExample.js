/*jshint esversion: 6 */

import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';
import wNumb from 'wnumb';

SimpleSchema.extendOptions(['autoform']);

export default new SimpleSchema({

  multipleSelectWithFirstOption: {
    type: Array,
    autoform: {
      type: 'select-multiple',
      // first option is needed by autoform to avoid the first option auto
      // selected if there are no default
      firstOption: 'Choose some'
    }
  },
  'multipleSelectWithFirstOption.$': {
    type: String,
    allowedValues: ['VALUE4', 'VALUE5', 'VALUE6', 'VALUE7']
  },

  multipleSelectWithFirstOptionWithLabel: {
    type: Array,
    label: 'I have my own label',
    autoform: {
      type: 'select-multiple',
      // first option is needed by autoform to avoid the first option auto
      // selected if there are no default
      firstOption: 'Choose some'
    }
  },
  'multipleSelectWithFirstOptionWithLabel.$': {
    type: String,
    allowedValues: ['VALUE4', 'VALUE5', 'VALUE6', 'VALUE7']
  },

  multipleSelectOptional: {
    type: Array,
    optional: true,
    autoform: {
      type: 'select-multiple',
      firstOption: 'Choose some or none'
    }
  },
  'multipleSelectOptional.$': {
    type: String,
    allowedValues: ['VALUE4', 'VALUE5', 'VALUE6', 'VALUE7']
  },

  multipleSelectWithPlaceholder: {
    type: Array,
    autoform: {
      type: 'select-multiple',
      // first option is needed by autoform to avoid the first option auto
      // selected if there are no default
      firstOption: 'Choose some'
    }
  },
  'multipleSelectWithPlaceholder.$': {
    type: String,
    allowedValues: ['VALUE4', 'VALUE5', 'VALUE6', 'VALUE7']
  },

  multipleSelectWithDefaultWithoutFirstOptionOrPlacehoder: {
    type: Array,
    autoform: {
      type: 'select-multiple',
      defaultValue: ['VALUE5', 'VALUE6'],
    }
  },
  'multipleSelectWithDefaultWithoutFirstOptionOrPlacehoder.$': {
    type: String,
    allowedValues: ['VALUE4', 'VALUE5', 'VALUE6', 'VALUE7']
  },

  multipleSelectMin1Max2: {
    type: Array,
    minCount: 1,
    maxCount: 2,
    autoform: {
      type: 'select-multiple',
      firstOption: 'Choose one or two'
    }
  },
  'multipleSelectMin1Max2.$': {
    type: String,
    allowedValues: ['VALUE4', 'VALUE5', 'VALUE6', 'VALUE7']
  },

  multipleSelectOptionalMin2Max3: {
    type: Array,
    minCount: 2,
    maxCount: 3,
    optional: true,
    autoform: {
      type: 'select-multiple',
      firstOption: 'Choose one or two'
    }
  },
  'multipleSelectOptionalMin2Max3.$': {
    type: String,
    allowedValues: ['VALUE4', 'VALUE5', 'VALUE6', 'VALUE7']
  },

  multipleSelectWithDefaultWithFirstOption: {
    type: Array,
    autoform: {
      type: 'select-multiple',
      defaultValue: ['VALUE5', 'VALUE6'],
      firstOption: 'Choose a few'
    }
  },
  'multipleSelectWithDefaultWithFirstOption.$': {
    type: String,
    allowedValues: ['VALUE4', 'VALUE5', 'VALUE6', 'VALUE7']
  },

  multipleSelectWithDefaultWithPlaceholder: {
    type: Array,
    minCount: 1,
    maxCount: 2,
    autoform: {
      type: 'select-multiple',
      defaultValue: ['VALUE5', 'VALUE6'],
      placeholder: 'Choose one or two',
    }
  },
  'multipleSelectWithDefaultWithPlaceholder.$': {
    type: String,
    allowedValues: ['VALUE4', 'VALUE5', 'VALUE6', 'VALUE7']
  },

  multipleSelectWithDefaultWithFirstOptionWithOptionsArray: {
    type: Array,
    autoform: {
      type: 'select-multiple',
      defaultValue: ['VALUE5', 'VALUE6'],
      options: [{
        label: 'Option 4',
        value: 'VALUE4'
      },
      {
        label: 'Option 5',
        value: 'VALUE5'
      },
      {
        label: 'Option 6',
        value: 'VALUE6'
      },
      {
        label: 'Option 7',
        value: 'VALUE7'
      }],
      firstOption: 'Choose a few'
    }
  },
  'multipleSelectWithDefaultWithFirstOptionWithOptionsArray.$': {
    type: String
  },

  multipleSelectWithDefaultWithFirstOptionWithOptionsArrayWithAllowedValues: {
    type: Array,
    autoform: {
      type: 'select-multiple',
      defaultValue: ['VALUE5', 'VALUE6'],
      options: [{
        label: 'Option 4',
        value: 'VALUE4'
      },
      {
        label: 'Option 5',
        value: 'VALUE5'
      },
      {
        label: 'Option 6',
        value: 'VALUE6'
      },
      {
        label: 'Option 7',
        value: 'VALUE7'
      }],
      firstOption: 'Choose a few'
    }
  },
  'multipleSelectWithDefaultWithFirstOptionWithOptionsArrayWithAllowedValues.$': {
    type: String,
    allowedValues: ['VALUE4', 'VALUE5', 'VALUE6', 'VALUE7']
  },

  multipleSelectWithDefaultWithFirstOptionWithOptionsFunction: {
    type: Array,
    autoform: {
      type: 'select-multiple',
      defaultValue: ['VALUE5', 'VALUE6'],
      firstOption: 'Choose a few',
      options() {
        return [
          {
            label: 'Option 4',
            value: 'VALUE4'
          },
          {
            label: 'Option 5',
            value: 'VALUE5'
          },
          {
            label: 'Option 6',
            value: 'VALUE6'
          },
          {
            label: 'Option 7',
            value: 'VALUE7'
          }
        ];
      }
    }
  },
  'multipleSelectWithDefaultWithFirstOptionWithOptionsFunction.$': {
    type: String
  },
}, { tracker: Tracker});
