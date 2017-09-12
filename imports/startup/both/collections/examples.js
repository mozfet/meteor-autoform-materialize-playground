/*jshint esversion: 6 */

import 'meteor/mongo';
import exampleSchema from '../../../api/schemas/example.js';
import modalSchema from '../../../api/schemas/modalExample.js';

Examples = new Mongo.Collection('Examples');
Examples.attachSchema(exampleSchema);

Modals = new Mongo.Collection('Modals');
Modals.attachSchema(modalSchema);
