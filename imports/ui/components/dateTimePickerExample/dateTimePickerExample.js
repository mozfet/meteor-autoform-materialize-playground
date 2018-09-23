import './dateTimePickerExample.html'
import '../DynaView'

Template.dateTimePickerExample.helpers({
  data() {
    return {
      collection: 'DateTimes',
      id:'dateTimePickerExample',
      type: 'insert',
      doc: {
        dateInitialised: new Date(),
        timeInitialised: '12:34 PM'
      }
    }
  }
})
