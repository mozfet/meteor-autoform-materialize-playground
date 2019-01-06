// imports
import { Template } from 'meteor/templating'
import AutoFrom from 'meteor/aldeed:autoform'
import autoCompleteSchema from '../../../api/schemas/autoCompleteExample'
import './autoCompleteExample.html'

console.log('load insert example ui component')

Template.autoCompleteExample.onCreated(() => {
  const instance = Template.instance()
  instance.doc = {
    autoCompleteSingularInitialized: 'Alpha',
    autoCompleteMultipleInitialized: ['ALPHA']
  }
})

Template.autoCompleteExample.onRendered(() => {
  const instance = Template.instance()
})

Template.autoCompleteExample.helpers({
  data() {
    const instance = Template.instance()
    return {
      schema: autoCompleteSchema,
      id:'autoCompleteExample',
      type: 'normal',
      doc: instance.doc
    }
  }
})
