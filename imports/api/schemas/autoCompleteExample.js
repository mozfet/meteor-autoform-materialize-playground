/*jshint esversion: 6 */

import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

SimpleSchema.extendOptions(['autoform']);

export default new SimpleSchema({

  autoCompleteSingular: {
    type: String,
    optional: true,
    label: 'Auto Complete Singular',
    allowedValues:  ['Alpha', 'Animal', 'Brave', 'Butter', 'Better', 'Charlie'],
    autoform: {
      type: 'autocomplete',
    }
  },

  autoCompleteSingularInitialized: {
    type: String,
    optional: true,
    label: 'Auto Complete Singular with Initialized Value',
    allowedValues:  ['Alpha', 'Alphabet', 'Animal', 'Brave', 'Butter'],
    autoform: {
      type: 'autocomplete'
    }
  },

  autoCompleteDefault: {
    type: String,
    optional: true,
    label: 'Auto Complete Singular with Default Value',
    allowedValues:  ['Alpha', 'Animal', 'Brave', 'Butter'],
    autoform: {
      type: 'autocomplete',
      default: 'Alpha'
    }
  },

  autoCompletePlaceholder: {
    type: String,
    optional: false,
    label: 'Auto Complete Singular with Placeholder',
    allowedValues: ['Alpha', 'Animal', 'Brave', 'Butter'],
    autoform: {
      type: 'autocomplete',
      placeholder: 'Placeholder'
    }
  },

  autoCompleteDisplayLimit: {
    type: String,
    optional: true,
    label: 'Auto Complete Singlular With Display Limit of 3',
    allowedValues: ['Alpha', 'Animal', 'Always', 'Anytime', 'Anywhere'],
    autoform: {
      type: 'autocomplete',
      displayLimit: 3
    }
  },

  autoCompleteLabeledValues: {
    type: String,
    optional: true,
    label: 'Auto Complete Singular With Labeled Values',
    allowedValues: ['ALPHA', 'ANIMAL', 'ALWAYS', 'ANYTIME'],
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

  autoCompleteLabeledValuesDefault: {
    type: String,
    optional: true,
    label: 'Auto Complete Singular With Labeled Values and a Default',
    allowedValues: ['ALPHA', 'ANIMAL', 'ALWAYS', 'ANYTIME'],
    autoform: {
      type: 'autocomplete',
      default: 'ALPHA',
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
    label: 'Auto Complete Singular With Computed Labeled Values',
    allowedValues: ['ALPHA', 'ANIMAL', 'ALWAYS', 'ANYTIME'],
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

  autoCompleteMultipleMinMax: {
    type: Array,
    label: 'Auto Complete Multiple with count between 1 and 3',
    minCount: 2,
    maxCount: 3,
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
          },
          {
            label: 'Bravo',
            value: 'BRAVO'
          },
          {
            label: 'Bedtime',
            value: 'BEDTIME'
          }
        ];
      },
      displayLimit: 3,
      multiple: true
    }
  },
  'autoCompleteMultipleMinMax.$': {
      type: String,
      allowedValues: ['ALPHA', 'ANIMAL', 'ALWAYS', 'ANYTIME', 'BRAVO', 'BEDTIME']
  },

  autoCompleteMultipleInitialized: {
    type: Array,
    label: 'Auto Complete Multiple Initialized',
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
          },
          {
            label: 'Bravo',
            value: 'BRAVO'
          },
          {
            label: 'Bedtime',
            value: 'BEDTIME'
          }
        ];
      },
      multiple: true
    }
  },
  'autoCompleteMultipleInitialized.$': {
      type: String
  },

  autoCompleteMultipleDefault: {
    type: Array,
    label: 'Auto Complete Multiple Initialized',
    autoform: {
      type: 'autocomplete',
      multiple: true,
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
          },
          {
            label: 'Bravo',
            value: 'BRAVO'
          },
          {
            label: 'Bedtime',
            value: 'BEDTIME'
          }
        ];
      },
      default: ['ALPHA', 'BRAVO']
    }
  },
  'autoCompleteMultipleDefault.$': {
      type: String
  }


}, { tracker: Tracker});
