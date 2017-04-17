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

  //argh! workaround for package incompatability
  if( Package['materialize:materialize']) {
    console.log('using materialize:materialize modal');
    instance.$('.modal-trigger').modal({
      complete: function () {
        console.log('here');
      }
    });
  }
  else if (Package['poetic:materialize-scss']) {
    console.log('using poetic:materialize-scss.leanModal');
    instance.$('.modal-trigger').leanModal({
      complete: function () {
        console.log('here');
      }
    });
  }

});
