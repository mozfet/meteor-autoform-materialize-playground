import './autoformExample.html'
import '../DynaView'
import SimpleSchema from 'simpl-schema'
import Faker from 'faker'
console.log('load insert example ui component')

// idk why this is needed here, it is done at startup!
SimpleSchema.extendOptions(['autoform'])

Template.autoformExample.helpers({
  doc() {
    let text1 = Faker.lorem.sentence()
    for(let i=0; i<5; i++) {
      text1 += ' '+Faker.lorem.sentence()
    }
    return {
      text1: text1,
      text2: text1,
      select1: 'VALUE1',
      question1: 'answer1'
    }
  },

  schema() {
    return new SimpleSchema({
      select1: {
        type: String,
        autoform: {
          type: 'select',
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
            ]
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
            ]
          }
        }
      },
      'select2.$': {
        type: String
      },

      text1: {
        type: String,
        autoform: {
          type: 'flowtext'
        }
      },

      text2: {
        type: String,
        autoform: {
          type: 'flowtext',
          paragraphClass: ''
        }
      },

      question1: {
        type: String,
        max: 1000,
        label: 'Simple text field with initial value',
        autoform: {
          default: 'default text'
        }
      }
    }, { tracker: Tracker})
  }
})
