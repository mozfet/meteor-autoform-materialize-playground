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
  instance.$('.modal-trigger').leanModal({
    complete: function () {
      console.log('here');
    }
  });
});
