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
      autoComplete: {
        displayLimit: 3
      }
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

  autoCompleteMultiple: {
    type: Array,
    label: 'Auto Complete Multiple with min size of 1 and max size of 3',
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
      autoComplete: {
        displayLimit: 3,
        multiple: true,
        minSize: 1, // for some unknown reason simple schema min is not propaged to auto complete input, thus we define it here
        maxSize: 3  // for some unknown reason simple schema max is not propaged to auto complete input, thus we define it here
      }
    }
  },
  'autoCompleteMultiple.$': {
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
      autoComplete: {
        displayLimit: 3,
        multiple: true,
        minSize: 1, // for some unknown reason simple schema min is not propaged to auto complete input, thus we define it here
        maxSize: 3  // for some unknown reason simple schema max is not propaged to auto complete input, thus we define it here
      }
    }
  },
  'autoCompleteMultipleInitialized.$': {
      type: String
  }
}, { tracker: Tracker});
