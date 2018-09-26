/*jshint esversion: 6 */

import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

SimpleSchema.extendOptions(['autoform']);

export default new SimpleSchema({

  simpleBoolean: Boolean,
  trueInitialisedBoolean: Boolean,
  falseInitialisedBoolean: Boolean,
  labeledBoolean: {
    type: Boolean,
    label: 'Boolean with specified label'
  },
  defaultBoolean: {
    type: Boolean,
    autoform: {
      defaultValue: true
    }
  },
  radioBoolean: {
    type: Boolean,
    autoform: {
      type: 'boolean-radios',
      trueLabel: 'This is the true label',
      falseLabel: 'This is the false label'
    }
  },
  selectBoolean: {
    type: Boolean,
    autoform: {
      type: 'boolean-select',
      trueLabel: 'This is the true label',
      falseLabel: 'This is the false label'
    }
  },
}, { tracker: Tracker});
