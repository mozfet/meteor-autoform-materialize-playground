/*jshint esversion: 6 */

import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

SimpleSchema.extendOptions(['autoform']);

export default new SimpleSchema({

  autoCompleteBasic: {
    type: String,
    optional: true,
    label: 'Auto Complete Basic',
    allowedValues:  ['Alpha', 'Animal', 'Brave', 'Butter'],
    autoform: {
      type: 'autocomplete',
    }
  },

  autoCompleteInitialized: {
    type: String,
    optional: true,
    label: 'Auto Complete with Initialized Value',
    allowedValues:  ['Alpha', 'Animal', 'Brave', 'Butter'],
    autoform: {
      type: 'autocomplete'
    }
  },

  autoCompleteDefault: {
    type: String,
    optional: true,
    label: 'Auto Complete with Default Value',
    allowedValues:  ['Alpha', 'Animal', 'Brave', 'Butter'],
    autoform: {
      type: 'autocomplete',
      default: 'Alpha'
    }
  },

  autoCompletePlaceholder: {
    type: String,
    optional: true,
    label: 'Auto Complete with Placeholder',
    allowedValues: ['Alpha', 'Animal', 'Brave', 'Butter'],
    autoform: {
      type: 'autocomplete',
      placeholder: 'Placeholder'
    }
  },

  autoCompleteDisplayLimit: {
    type: String,
    optional: true,
    label: 'Auto Complete With Display Limit of 3',
    allowedValues: ['Alpha', 'Animal', 'Always', 'Anytime'],
    autoform: {
      type: 'autocomplete',
      autoComplete: {
        displayLimit: 3
      }
    }
  },

  autoCompleteLabeledValues: {
    type: String,
    optional: true,
    label: 'Auto Complete With Labeled Values',
    allowedValues: ['Alpha', 'Animal', 'Always', 'Anytime'],
    autoform: {
      type: 'autocomplete',
      options: [
        {
          label: 'Alpha',
          value: 'ALPHA'
        },
        {
          label: 'Animal',
          value: 'ANIMAL'
        },
        {
          label: 'Always',
          value: 'ALWAYS'
        },
        {
          label: 'Anytime',
          value: 'ANYTIME'
        }
      ]
    }
  },

  autoCompleteComputedLabeledValues: {
    type: String,
    optional: true,
    label: 'Auto Complete With Computed Labeled Values',
    allowedValues: ['Alpha', 'Animal', 'Always', 'Anytime'],
    autoform: {
      type: 'autocomplete',
      options: () => {
        return [
          {
            label: 'Alpha',
            value: 'ALPHA'
          },
          {
            label: 'Animal',
            value: 'ANIMAL'
          },
          {
            label: 'Always',
            value: 'ALWAYS'
          },
          {
            label: 'Anytime',
            value: 'ANYTIME'
          }
        ];
      }
    }
  },

  // autoCompleteMultiple: {
  //   type: Array,
  //   label: 'Multiple select',
  //   autoform: {
  //     type: 'select-multiple',
  //     firstOption: 'Select an option...',
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
  // 'multipleSelect.$': {
  //     type: String,
  //     allowedValues: ['VALUE11', 'VALUE12', 'VALUE13']
  // }

}, { tracker: Tracker});
