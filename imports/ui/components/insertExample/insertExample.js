/*jshint esversion: 6 */

import './insertExample.html';
import '../DynaView';

console.log('load insert example ui component');

Template.insertExample.helpers({
  data() {
    return {
      collection: 'Examples',
      id:'insertExample',
      type: 'insert',
      doc: {
        stringInitialised: 'Initial text value',
        dateInitialised: new Date(),
        timeInitialised: '12:34 PM'
      }
    };
  }
});
