/*jshint esversion: 6 */

import 'meteor/mongo';
import exampleSchema from '../../../api/schemas/example.js';
import modalSchema from '../../../api/schemas/modalExample.js';
import arraysSchema from '../../../api/schemas/arraysExample.js';


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
