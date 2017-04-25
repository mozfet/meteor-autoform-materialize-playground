/*jshint esversion: 6 */

import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { EJSON } from 'meteor/ejson';
import './dynaView.html';

Template.DynaView.helpers({
  show() {
    const dynaViewJson = Session.get('DynaView');
    const isDefined = !_.isUndefined(dynaViewJson);
    let dynaView, isJson;
    try {
      dynaView = EJSON.parse(dynaViewJson);
      isJson = true;
    } catch (e) {
      isJson = false;
    } finally {
      dynaView = dynaView?dynaView:{};
    }
    const isObject = isJson?_.isObject(dynaView):false;
    // console.log('dv.dynaView:', dynaView);
    const notEmpty = isObject?!_.isEmpty(dynaView):false;
    // console.log('dv.notEmpty:', notEmpty);
    const hasTemplate = notEmpty?_.has(dynaView, 'template'):false;
    // console.log('dv.hasTemplate:', hasTemplate);
    const hasTemplateString = hasTemplate?_.isString(dynaView.template):false;
    // console.log('dv.hasTemplateString:', hasTemplateString);
    const hasExistingTemplate = hasTemplateString?!_.isUndefined(Template[dynaView.template]):false;
    // console.log('dv.hasExistingTemplate:', hasExistingTemplate);
    const hasData = notEmpty?(_.has(dynaView, 'data')):false;
    // console.log('dv.hasData:', hasData);
    const hasDataObject = hasData?_.isObject(dynaView.data):false;
    // console.log('dv.hasDataObject:', hasDataObject);
    const hasNoDataOrHasDataObject = !hasData || hasDataObject;
    // console.log('dv.hasNoDataOrHasDataObject:', hasNoDataOrHasDataObject);
    const show = hasExistingTemplate && hasNoDataOrHasDataObject;
    // console.log('dv.show:', show);
    return show;
  },
  dvTemplate: function() {
    return EJSON.parse(Session.get('DynaView')).template;
  },
  dvData: function() {
    return EJSON.parse(Session.get('DynaView')).data;
  }
});
