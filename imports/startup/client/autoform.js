/*jshint esversion: 6 */
import { EJSON } from 'meteor/ejson';
import AutoFrom from 'meteor/aldeed:autoform';

console.log('setup autoform');

AutoForm.debug();

AutoForm.setDefaultTemplate('materialize');
// AutoForm.setDefaultTemplate('plain');

AutoForm.addHooks(null, {
    formToDoc: (doc) => {
      return doc;
    },
    onError: (operation, error) => {
      if (error) {
        console.warn(error);
      }
    },
    // Called when form does not have a `type` attribute
    onSubmit: function (insertDoc, updateDoc, currentDoc) {
      this.done(null, insertDoc);
      return false;
    },
    //see https://github.com/aldeed/meteor-autoform/issues/840
    before: {
      update: function(doc) {
        _.each(doc.$set, function(value, setter) {
          if (_.isArray(value)) {
            const newValue = _.compact(value);
            doc.$set[setter] = newValue;
          }
        });
        return doc;
      }
    },
    // Called when any submit operation succeeds
    onSuccess: (formType, result) => {
      console.log('onSuccess.formType:', formType);
      if (formType === 'method') {
        alert('Success with '+formType+' form. Check server log to see that method was called.');  
      }
      else {
        console.log('onSuccess.result:', result);
        const json = EJSON.stringify(result, {indent: true, canonical: true});
        console.log('onSuccess.json:', json);
        alert('Success with '+formType+' form:\n'+json);
      }


    }
});
