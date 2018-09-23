/*jshint esversion: 6 */

import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

SimpleSchema.extendOptions(['autoform']);

export default new SimpleSchema({

  requirementMandatory: String,

  textInitialised: String,

  everythingGoes: {
    type: String,
    optional: true
  },

  textWithLabel: {
    label: 'This text field has a specified label',
    type: String,
    optional: true
  },

  textWithDefault: {
    type: String,
    optional: true,
    autoform: {
      default: 'This is a default value.'
    }
  },

  textWithPlaceholder: {
    type: String,
    optional: true,
    autoform: {
      placeholder: 'This is a placeholder'
    }
  },

  maximumLengthThree: {
    type: String,
    max: 3,
    optional: true
  },

  minimumLengthThree: {
    type: String,
    min: 3
  },

  regexAlphaOnly: {
    type: String,
    regEx: /^[a-zA-Z]+$/i,
    optional: true
  },

  textAreaMin: {
    type: String,
    min: 5,
  },

  textAreaMax: {
    type: String,
    optional: true,
    max: 20
  },

  textAreaMinMaxOptional: {
    type: String,
    optional: true,
    min: 5,
    max: 20
  },

  textAreaMinMaxType: {
    type: String,
    min: 5,
    max: 20,
    autoform: {
      type: 'textarea'
    }
  },

  textAreaByType: {
    type: String,
    autoform: {
      type: 'textarea'
    }
  },

  textAreaByRows: {
    type: String,
    autoform: {
      rows: 15
    }
  },

  textAreaByTypeAndRows: {
    type: String,
    autoform: {
      type: 'textarea',
      rows: 15
    }
  },

  textAreaDefault: {
    type: String,
    autoform: {
      type: 'textarea',
      default: 'This should be wrapping.\nThe Quick Brown Fox Jumps Over The Lazy Dog. The Quick Brown Fox Jumps Over The Lazy Dog. The Quick Brown Fox Jumps Over The Lazy Dog. The Quick Brown Fox Jumps Over The Lazy Dog.'
    }
  },

  textAreaInitialized: {
    type: String,
    autoform: {
      type: 'textarea'
    }
  }
}, { tracker: Tracker});
