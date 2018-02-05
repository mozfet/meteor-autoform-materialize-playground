/*jshint esversion: 6 */

import 'meteor/mongo';
import exampleSchema from '../../api/schemas/example.js';
import modalSchema from '../../api/schemas/modalExample.js';
import arraysSchema from '../../api/schemas/arraysExample.js';
import { FilesCollection } from 'meteor/ostrio:files';


const observationHandler = {
  added: (doc) => {
    console.log('Added:', doc);
  },
  changed: (doc) => {
    console.log('Changed', doc);
  }
};

Examples = new Mongo.Collection('Examples');
Examples.attachSchema(exampleSchema);
Examples.find({}).observe(observationHandler);

Modals = new Mongo.Collection('Modals');
Modals.attachSchema(modalSchema);
Modals.find({}).observe(observationHandler);

Arrays = new Mongo.Collection('Arrays');
Arrays.attachSchema(arraysSchema);
Arrays.find({}).observe(observationHandler);

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
