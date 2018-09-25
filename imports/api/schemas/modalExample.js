import SimpleSchema from 'simpl-schema'
import { Tracker } from 'meteor/tracker'

export default new SimpleSchema({
  text1: {
    type: String,
    optional: true,
  },
  time: {
    type: String,
    label: 'Pick a time',
    optional: true,
    autoform: {
      type: 'pickatime',
      pickerOptions: {
        container: '#modalContainer'
      }
    }
  },
  date: {
    type: Date,
    optional: true,
    label: 'Pick a date',
    autoform: {
      type: 'pickadate',
      pickerOptions: {
        container: '#modalContainer'
      }
    }
  },
  select1: {
    type: String,
    autoform: {
      type: 'select',
      options() {
        return [
          {
            label: 'Option 1',
            value: 'VALUE1'
          },
          {
            label: 'Option 2',
            value: 'VALUE2'
          }
        ];
      }
    }
  },
  select2: {
    type: Array,
    autoform: {
      type: 'select-multiple',
      options: () => {
        return [
          {
            label: 'Option 1',
            value: 'VALUE1'
          },
          {
            label: 'Option 2',
            value: 'VALUE2'
          }
        ];
      }
    }
  },
  'select2.$': {
    type: String
  }
}, { tracker: Tracker});
