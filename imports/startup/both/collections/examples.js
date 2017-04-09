/*jshint esversion: 6 */

import 'meteor/mongo';
import exampleSchema from '../../../api/schemas/example.js';

console.log('create Examples collection');

Examples = new Mongo.Collection('Examples');

console.log('attach example schema and tracker to Example collection');

Examples.attachSchema(exampleSchema);
