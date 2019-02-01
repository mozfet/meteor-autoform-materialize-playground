import SimpleSchema from 'simpl-schema'
import moment from 'moment'
import { Tracker } from 'meteor/tracker'
import wNumb from 'wnumb'

SimpleSchema.extendOptions(['autoform'])

const now = new Date()

export default new SimpleSchema({

  date: {
    type: Date,
    label: 'Pick a date',
    optional: true,
    autoform: {
      type: 'pickadate'
    }
  },

  stringDate: {
    type: String,
    optional: true,
    autoform: {
      type: 'pickadate'
    }
  },

  dateInitialized: {
    type: Date,
    label: 'Pick a date with initial value',
    autoform: {
      type: 'pickadate'
    }
  },

  dateStringInitialized: {
    type: String,
    label: 'Pick a date string with initial value',
    autoform: {
      type: 'pickadate'
    }
  },

  dateWithOptions: {
    type: Date,
    label: 'Pick a date with options',
    autoform: {
      type: 'pickadate',
      pickerOptions: {
        minDate: moment(now).add(3, 'days').toDate(),
        maxDate: moment(now).add(30, 'days').toDate(),
        yearRange: 1,
        // disableWeekends: true,
        disableDayFn: function(date) {
          console.log(`disableDay date:`, date)
          const dayOfMonth = moment(date).date()
          return (dayOfMonth%2)>0?true:false
        }
      }
    }
  },

  time: {
    type: String,
    label: 'Pick a time',
    autoform: {
      type: 'pickatime'
    }
  },

  timeInitialized: {
    type: String,
    label: 'Pick a time with initial value',
    autoform: {
      type: 'pickatime'
    }
  },

  timeWithOptions: {
    type: String,
    label: 'Pick a time with options',
    autoform: {
      type: 'pickatime',
      pickerOptions: {
        defaultTime: 'now',
        showClearBtn: true
      }
    }
  }

}, { tracker: Tracker});
