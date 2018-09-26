// imports
import { Template } from 'meteor/templating'
import './booleanExample.html'

// helpers
Template.booleanExample.helpers({
  doc: {
    trueInitialisedBoolean: true,
    falseInitialisedBoolean: false
  }
})
