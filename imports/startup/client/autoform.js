/*jshint esversion: 6 */
import { EJSON } from 'meteor/ejson'
import AutoFrom from 'meteor/aldeed:autoform';

console.log('setup autoform');

// AutoForm.debug();

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
    onSubmit: function (insertDoc, updateDoc, currentDoc) {
      this.done(null, insertDoc);
      return false;
    },
    onSuccess: (formType, result) => {
      console.log('onSuccess.formType:', formType);
      console.log('onSuccess.result:', result);
      const json = EJSON.stringify(result, {indent: true, canonical: true});
      console.log('onSuccess.json:', json);
      alert('Success with '+formType+' form:\n'+json);
    }
});
