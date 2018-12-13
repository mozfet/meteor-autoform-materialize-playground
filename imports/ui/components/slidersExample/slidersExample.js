// imports
import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import { Tracker } from 'meteor/tracker'
import SimpleSchema from 'simpl-schema'
import moment from 'moment'
import 'moment-duration-format'
import './slidersExample.html'

// extend simple schema options
SimpleSchema.extendOptions(['autoform'])

// schema
const schema = new SimpleSchema({
  'basic': {
    type: Number,
    min: 10,
    max: 26,
    autoform: {
      type: 'noUiSlider2'
    }
  },

  'rangeArrayPips': {
    type: Array,
    optional: true,
    autoform: {
      type: 'noUiSlider2',
      step: 2,
      noUiSliderOptions: {
        start: [700,8000],
        connect: true,
        range: {
          'min': [0],
        	'10%': [500,500],
        	'50%': [4000,1000],
        	'max': [10000]
        },
        pips: {
          mode: 'range',
          density: 3
        }
      }
    }
  },
  'rangeArrayPips.$': {
    type: Number
  },

  'formattedTooltips': {
    type: String,
    optional: true,
    label: 'Formatted tooltip (meteor-autoform-nouislider is recommended for large tooltip texts)',
    autoform: {
      type: 'noUiSlider2',
      // labelLeft: 'LeftLabel',
      // labelRight: 'RightLabel',
      noUiSliderOptions: {
        start: '45m',
        step: 5,
        tooltips: true,
        orientation: 'horizontal',
        range: {
          min: 0,
          max: 12*60
        },
        format: {
          to: function ( value ) {
            const minutes = Math.round(value)
            const human = moment.duration(minutes, 'minutes')
                .format('h[h]mm[m]')
            // console.log(`to ${value} human ${human}`)
            return human
          },
          from: function ( value ) {
            let hours = value.match(/^\d{1,2}h/g)
            hours = Number(hours?hours[0].slice(0, -1):'0')
            let mins = value.match(/\d{1,2}m$/g)
            mins = Number(mins?mins[0].slice(0, -1):'0')
            const result = hours*60 + mins
            // console.log(`from ${value} to ${result}`)
            return result
          }
        }
      }
    }
  }
}, {tracker: Tracker})

// on created
Template.slidersExample.onCreated(() => {
  const instance = Template.instance()
})

// on rendered
Template.slidersExample.onRendered(() => {
  const instance = Template.instance()
})

// helpers
Template.slidersExample.helpers({
  doc() {
    return {}
  },
  schema() {
    return schema
  }
})

// events
Template.slidersExample.events({

  //on click class
  'click .className'(event, instance) {
  }
})

// on destroyed
Template.slidersExample.onDestroyed(() => {
  const instance = Template.instance()
})
