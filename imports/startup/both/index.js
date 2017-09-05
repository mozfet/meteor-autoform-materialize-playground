/*jshint esversion: 6 */

import './collections';

Meteor.methods({
  'submit'(args) {
    console.log('meteor method was called with args:', args);
  }
});

console.log('done startup both');
