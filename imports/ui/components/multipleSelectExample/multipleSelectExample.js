/*jshint esversion: 6 */

//imports
import { Template } from 'meteor/templating';
import schema from '../../../api/schemas/multipleSelectExample';
import './multipleSelectExample.html';

//on created
Template.multipleSelectExample.onCreated(() => {
  const instance = Template.instance();
});

//on rendered
Template.multipleSelectExample.onRendered(() => {
  const instance = Template.instance();
});

//helpers
Template.multipleSelectExample.helpers({
  schema: schema,
  doc: {}
});

//events
Template.multipleSelectExample.events({

  //on click class
  'click .className'(event, instance) {
  }
});

//on destroyed
Template.multipleSelectExample.onDestroyed(() => {
  const instance = Template.instance();
});
