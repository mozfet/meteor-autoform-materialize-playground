/* jshint esversion: 6 */

import { chai } from 'meteor/practicalmeteor:chai';
import { $ } from 'meteor/jquery';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { EJSON } from 'meteor/ejson';

import { withRenderedTempl } from './test-helpers.js';

//client tests
if(Meteor.isClient){

  require('./dynaView.js');
  require('./dynaView.test.html');

  Template.testTemplate.onCreated(() => {
    // console.log('testTemplate.onCreated.data', Template.instance().data);
  });

  describe('DynaView', function () {

    //clean up session after each test
    afterEach(function () {
      Session.keys = {}
    });

    it('renders the container', function () {

      Session.set('DynaView',EJSON.stringify({
        template: 'testTemplate'
      }));

      //render template
      withRenderedTempl('DynaView', undefined, el => {

        //run test
        chai.assert.equal($(el).find('#js-dynaview').length, 1, 'could not find the container id');
      });
    });

    it('shows the view with only template defined', function () {

      Session.set('DynaView', EJSON.stringify({
        template: 'testTemplate'
      }));

      //render template
      withRenderedTempl('DynaView', undefined, el => {

        //run tests
        chai.assert.equal($(el).find('#js-dynaview-show').length, 1, 'could not find the show div');
        chai.assert.equal($(el).find('#js-test-template').length, 1, 'could not find the dynamic template');
      });
    });

    it('does not show the view with undefined Session DynaView', function () {

      Session.set('DynaView', '{}#$%@#^}}}}');

      //render template
      withRenderedTempl('DynaView', undefined, el => {

        //run test
        chai.assert.equal($(el).find('#js-dynaview-show').length, 0, 'found the show div');
      });
    });

    it('does not show the view with invalid json Session DynaView', function () {

      Session.set('DynaView', '{}#$%@#^}}}}');

      //render template
      withRenderedTempl('DynaView', undefined, el => {

        //run test
        chai.assert.equal($(el).find('#js-dynaview-show').length, 0, 'found the show div');
      });
    });

    it('does not show the view without template name in Session DynaView', function () {

      Session.set('DynaView', EJSON.stringify({
      }));

      //render template
      withRenderedTempl('DynaView', undefined, el => {

        //run test
        chai.assert.equal($(el).find('#js-dynaview-show').length, 0, 'found the show div');
      });
    });

    it('does not show the view with invalid formatted template name', function () {

      Session.set('DynaView', EJSON.stringify({
        template: 345
      }));

      //render template
      withRenderedTempl('DynaView', undefined, el => {

        //run test
        chai.assert.equal($(el).find('#js-dynaview-show').length, 0, 'found the show div');
      });
    });

    it('does not show the view with non existing template name', function () {

      Session.set('DynaView', EJSON.stringify({
        template: 'someOtherTestTemplate'
      }));

      //render template
      withRenderedTempl('DynaView', undefined, el => {

        //run test
        chai.assert.equal($(el).find('#js-dynaview-show').length, 0, 'found the show div');
      });
    });

    it('shows the view with template data', function () {

      Session.set('DynaView', EJSON.stringify({
        template: 'testTemplate',
        data: {
          text: 'text'
        }
      }));

      //render template
      withRenderedTempl('DynaView', undefined, el => {

        //run test
        chai.assert.equal($(el).find('#js-test-template').html(), 'text');
      });
    });

    it('does not show the view with invalid formatted data', function () {

      Session.set('DynaView', EJSON.stringify({
        template: 'testTemplate',
        data: 'text'
      }));

      //render template
      withRenderedTempl('DynaView', undefined, el => {

        //run test
        chai.assert.equal($(el).find('#js-dynaview-show').length, 0, 'found the show div');
      });
    });


  });
}
