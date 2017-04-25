/*jshint esversion: 6 */
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { EJSON } from 'meteor/ejson';
import './dynaViewLauncher.html';

//events
Template.DynaViewLauncher.events({

  //when click on launcher
  'click .js-dynaview-launcher': function(event, template) {
    const instance = Template.instance();
    console.log('DynaView.launch.template:', instance.data.dvTemplate);

    //normalise optional data
    const data = instance.data.dvData?instance.data.dvData:{};
    console.log('DynaView.launch.data:', data);
    Session.set('DynaView', EJSON.stringify({
      template: instance.data.dvTemplate,
      data: data
    }));
  }
});
