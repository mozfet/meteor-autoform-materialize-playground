// imports
import './insertExample.html'

// helpers
Template.insertExample.helpers({
  formData() {
    return {
      collection: 'Examples',
      id:'insertExample',
      type: 'insert',
      doc: {
        stringInitialised: 'Initial text valuee',
        dateInitialised: new Date(),
        timeInitialised: '12:34PM',
        simpleSwitchInitialised: true,
        customSwitchInitialised: 'TRUE_VALUE'
      }
    }
  }
})
