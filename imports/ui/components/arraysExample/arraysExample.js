/*jshint esversion: 6 */

//imports
import { Template } from 'meteor/templating';
import { Mongo } from 'meteor/mongo';
import {ReactiveVar} from 'meteor/reactive-var';
import { EJSON } from 'meteor/ejson';
import './arraysExample.html';

console.log('load array example ui component');

//on created
Template.arraysExample.onCreated(() => {
  const instance = Template.instance();
  instance.updateDocument = new ReactiveVar();
  instance.formId = new Mongo.ObjectID()._str;
  console.log('insert form id', instance.formId);
});

//helpers
Template.arraysExample.helpers({
  insertFormData() {
    const instance = Template.instance();
    return {
      collection: 'Arrays',
      id: 'arraysInsertExample',
      type: 'insert',
      // doc: {
      //   arrayOfStrings: ['one', 'two', 'three'],
      // }
    };
  },
  updateFormData() {
    const instance = Template.instance();

    let doc = Arrays.findOne(instance.updateDocument.get()._id);
    const result = {
      collection: 'Arrays',
      id:'arraysUpdateExample',
      type: 'update',
      doc: doc,
      modalParentId: 'modalContainer',
      title: 'Update Array'
    };
    console.log('updateData', result);
    return result;
  },
  docs() {
    return Arrays.find({});
  },
  showUpdateDocument() {
    const instance = Template.instance();
    return instance.updateDocument.get()?true:false;
  },
  updateDocument() {
    const instance = Template.instance();
    return instance.updateDocument;
  }
});

/**
 *  Array Collection Items
 **/
Template.arrayCollectionItem.onCreated(()=>{
  const instance = Template.instance();
  instance.formId = new Mongo.ObjectID()._str;
  console.log('update form id', instance.formId);
});

Template.arrayCollectionItem.helpers({
  docJson(doc) {
    return EJSON.stringify(doc, {indent: true, canonical: false});
  },
  updateFormData() {
    const instance = Template.instance();
    let doc = Arrays.findOne(instance.data.doc._id);
    const result = {
      collection: 'Arrays',
      id:'arraysUpdateExample'+instance.formId,
      type: 'update',
      doc: doc,
      modalParentId: 'modalContainer',
      title: 'Update Array'
    };
    console.log('updateData', result);
    return result;
  },
  updateDocument() {
    return instance.updateDocument;
  }
});

Template.arrayCollectionItem.events({
  'click .js-update' (event, instance) {
    console.log('click update on', instance.data);
    instance.data.updateDocument.set(instance.data.doc);
  },
  'click .js-remove' (event, instance) {

  }
});
