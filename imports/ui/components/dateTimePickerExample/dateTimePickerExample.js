import './dateTimePickerExample.html'

Template.dateTimePickerExample.helpers({
  data() {
    return {
      collection: 'DateTimes',
      id:'dateTimePickerExample',
      type: 'insert',
      doc: {
        dateInitialized: new Date(),
        dateStringInitialized: '2017-03-17',
        timeInitialized: '15:34'
      }
    }
  }
})
