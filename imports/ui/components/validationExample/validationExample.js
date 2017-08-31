/*jshint esversion: 6 */

//imports
import { Template } from 'meteor/templating';
import schema from '../../../api/schemas/validationExample';
import './validationExample.html';

//on created
Template.validationExample.onCreated(() => {
  const instance = Template.instance();
});

//on rendered
Template.validationExample.onRendered(() => {
  const instance = Template.instance();
});

//helpers
Template.validationExample.helpers({
  schema: schema,
  doc:{}
});

//events
Template.validationExample.events({

  //on click class
  'click .className'(event, instance) {
  }
});

//on destroyed
Template.validationExample.onDestroyed(() => {
  const instance = Template.instance();
});
