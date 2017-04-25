/* jshint esversion: 6 */

import { chai } from 'meteor/practicalmeteor:chai';
import { $ } from 'meteor/jquery';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import { withRenderedTempl } from './test-helpers.js';

//client tests
if(Meteor.isClient){

  require('./dynaViewLauncher.js');
  require('./dynaViewLauncher.test.html');

  Template.testTemplate2.helpers({
    testData: {
      text: 'text'
    }
  });

  describe('DynaView Launcher', function () {

    //clean up session after each test
    afterEach(function () {
      Session.keys = {}
    });

    it('sets DynaView in Session', function () {

      //render template
      withRenderedTempl('testTemplate2', undefined, el => {

        //trigger click event
        $(el).find('.js-dynaview-launcher').click();

        //get the dynaview from the session
        const dynaViewJson = Session.get('DynaView');
        console.log('HERE', dynaViewJson);

        //run test
        chai.assert.equal(dynaViewJson,
          '{"template":"someTemplate","data":{"text":"text"}}',
          'incorrect session data'
        );
      });
    });
  });
}
