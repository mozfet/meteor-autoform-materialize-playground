/*jshint esversion: 6 */

//imports
import { Template } from 'meteor/templating';
import { EJSON } from 'meteor/ejson';
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
      collection: 'Modals',
      id:'modalExample',
      type: 'insert',
      modalParentId: 'modalContainer',
      title: 'Modal Insert Example'
    };
  },
  docs() {
    return Modals.find({});
  },
  docJson(doc) {
    return EJSON.stringify(doc, {indent: true, canonical: false});
  }
});
