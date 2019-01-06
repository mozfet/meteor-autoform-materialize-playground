// imports
import { Template } from 'meteor/templating'
import './textExample.html'

// helpers
Template.textExample.helpers({
  doc: {
    textInitialised: 'This is an initialized value',
    textAreaInitialized: 'This should be wrapping.\nThe Quick Brown Fox Jumps Over The Lazy Dog. The Quick Brown Fox Jumps Over The Lazy Dog. The Quick Brown Fox Jumps Over The Lazy Dog. The Quick Brown Fox Jumps Over The Lazy Dog.'
  }
})
