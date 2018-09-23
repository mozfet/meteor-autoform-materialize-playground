import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';
import wNumb from 'wnumb';

SimpleSchema.extendOptions(['autoform']);

export default new SimpleSchema({

  optionalSelectWithoutDefault: {
    type: String,
    optional: true,
    allowedValues: ['Something', 'Another Thing'],
    autoform: {
      type: 'select'
    }
  },

  requiredSelectWithoutDefault: {
    type: String,
    allowedValues: ['Something', 'Another Thing'],
    autoform: {
      type: 'select'
    }
  },
  
  optionalSelectWithoutDefaultWithPlacehorder: {
    type: String,
    optional: true,
    allowedValues: ['Something', 'Another Thing'],
    autoform: {
      type: 'select',
      placeholder: 'Holding a place for a thing...'
    }
  },

  optionalSelectWithoutDefaultWithFirstOption: {
    type: String,
    optional: true,
    allowedValues: ['Something', 'Another Thing'],
    autoform: {
      type: 'select',
      firstOption: '(Choose a thing...)'
    }
  },

  selectWithDefaultWithFirstOption: {
    type: String,
    allowedValues: ['Something', 'Another Thing'],
    autoform: {
      type: 'select',
      defaultValue: 'Another Thing',
      firstOption: 'Choose one and only one'
    }
  },

  selectWithDefaultWithPlaceholder: {
    type: String,
    allowedValues: ['Something', 'Another Thing'],
    autoform: {
      type: 'select',
      defaultValue: 'Another Thing',
      placeholder: '(Choose a thing...)'
    }
  }
}, { tracker: Tracker});
