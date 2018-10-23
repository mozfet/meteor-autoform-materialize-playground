/*jshint esversion: 6 */

import 'meteor/mongo';
import exampleSchema from '/imports/api/schemas/example'
import textSchema from '/imports/api/schemas/textExample'
import booleanSchema from '/imports/api/schemas/booleanExample'
import modalSchema from '/imports/api/schemas/modalExample'
import arraysSchema from '/imports/api/schemas/arraysExample'
import dateTimeSchema from '/imports/api/schemas/dateTimePickerExample'
import { FilesCollection } from 'meteor/ostrio:files'

const observationHandler = {
  added: (doc) => {
    // console.log('Added:', doc)
  },
  changed: (doc) => {
    // console.log('Changed', doc)
  }
}

Examples = new Mongo.Collection('Examples')
Examples.attachSchema(exampleSchema)
Examples.find({}).observe(observationHandler)

Modals = new Mongo.Collection('Modals')
Modals.attachSchema(modalSchema)
Modals.find({}).observe(observationHandler)

Arrays = new Mongo.Collection('Arrays')
Arrays.attachSchema(arraysSchema)
Arrays.find({}).observe(observationHandler)

Texts = new Mongo.Collection('Texts')
Texts.attachSchema(textSchema)
Texts.find({}).observe(observationHandler)

Booleans = new Mongo.Collection('Booleans')
Booleans.attachSchema(booleanSchema)
Booleans.find({}).observe(observationHandler)

DateTimes = new Mongo.Collection('DateTimes')
DateTimes.attachSchema(dateTimeSchema)
DateTimes.find({}).observe(observationHandler)

Files = new FilesCollection({
  collectionName: 'Files',
  allowClientCode: true,
  onBeforeUpload(file) {
    if (file.size <= 10485760 && /png|jpg|jpeg|gif/i.test(file.ext)) {
      return true;
    } else {
      return 'Please upload image, with size equal or less than 10MB';
    }
  }
});
