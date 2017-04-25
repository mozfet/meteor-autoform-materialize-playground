/*jshint esversion: 6 */

//imports
import { Template } from 'meteor/templating';
import './modalExample.html';

console.log('load modal example ui component');

//on created
Template.modalExample.onCreated(() => {
  const instance = Template.instance();
});

//on rendered
Template.modalExample.onRendered(() => {
  const instance = Template.instance();
});

//helpers
Template.modalExample.helpers({
  data() {
    return {
      collection: 'Examples',
      id:'insertExample',
      type: 'insert',
      modalParentId: 'modalContainer',
      title: 'Add Example',
      doc: {
        stringInitialised: 'Initial text value',
        dateInitialised: new Date(),
        timeInitialised: '12:34 PM'
      }
    };
  }
});
