/*jshint esversion: 6 */

import './insertExample.html';

console.log('load insert example ui component');

Template.insertExample.helpers({
  defaults: {
    simpleStringInitialised: 'Initial text value',
    dateInitialised: new Date(),
    timeInitialised: '12:34 PM'
  }
});
