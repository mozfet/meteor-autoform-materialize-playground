/*jshint esversion: 6 */

import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';
import wNumb from 'wnumb';

SimpleSchema.extendOptions(['autoform']);

export default new SimpleSchema({

  // @TODO move to text example

  // requirementMandatory: String,
  //
  // everythingGoes: {
  //   type: String,
  //   optional: true
  // },
  //
  // maximumLengthThree: {
  //   type: String,
  //   max: 3,
  //   optional: true
  // },
  //
  // minimumLengthThree: {
  //   type: String,
  //   min: 3
  // },
  //
  // regexAlphaOnly: {
  //   type: String,
  //   regEx: /^[a-zA-Z]+$/i,
  //   optional: true
  // },




  // optionalSelectWithoutDefault: {
  //   type: String,
  //   optional: true,
  //   allowedValues: ['SOME', 'THING'],
  //   autoform: {
  //     type: 'select'
  //   }
  // },
  //
  // optionalSelectWithoutDefaultWithPlacehorder: {
  //   type: String,
  //   optional: true,
  //   allowedValues: ['OUT', 'THERE'],
  //   autoform: {
  //     type: 'select',
  //     placeholder: '(Holding a place...)'
  //   }
  // },
  //
  // optionalSelectWithoutDefaultWithFirstOption: {
  //   type: String,
  //   optional: true,
  //   allowedValues: ['OUT', 'THERE'],
  //   autoform: {
  //     type: 'select',
  //     firstOption: '(The first option should be disabled...)'
  //   }
  // },
  //
  // selectWithDefaultWithPlaceholder: {
  //   type: String,
  //   allowedValues: ['VALUE1', 'VALUE2', 'VALUE3'],
  //   optional: true,
  //   autoform: {
  //     type: 'select',
  //     defaultValue: 'VALUE2',
  //     placeholder: 'Choose one and only one'
  //   }
  // },
  //
  // selectWithDefaultWithFirstOption: {
  //   type: String,
  //   allowedValues: ['VALUE1', 'VALUE2', 'VALUE3'],
  //   optional: true,
  //   autoform: {
  //     type: 'select',
  //     defaultValue: 'VALUE2',
  //     firstOption: 'Choose one and only one'
  //   }
  // },

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
    type: String,
    allowedValues: ['VALUE4', 'VALUE5', 'VALUE6', 'VALUE7'],
    minCount: 1,
    maxCount: 2,
    autoform: {
      type: 'select-multiple',
      defaultValue: ['VALUE5', 'VALUE6'],
      placeholder: 'Choose one or two'
    }
  },
  'multipleSelectWithDefaultWithPlaceholder.$': {
    type: String,
    allowedValues: ['VALUE4', 'VALUE5', 'VALUE6', 'VALUE7']
  },
}, { tracker: Tracker});
