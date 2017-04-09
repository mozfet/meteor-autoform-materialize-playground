/*jshint esversion: 6 */

import SimpleSchema from 'simpl-schema';
import example from './example.js';

console.log('globalize schemas');

Schemas = {
  example: example
};

console.log('put SimpleSchema in debug mode');

SimpleSchema.debug = true;
