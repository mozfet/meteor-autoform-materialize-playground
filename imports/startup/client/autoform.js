/*jshint esversion: 6 */

import AutoFrom from 'meteor/aldeed:autoform';

console.log('setup autoform');

AutoForm.setDefaultTemplate('materialize');
// AutoForm.setDefaultTemplate('plain');

AutoForm.addHooks(null, {
    formToDoc: (doc) => {
        return doc;
    },
    onError: (operation, error) => {
        if (error) {
            console.log(error);
        }
    },
    onSuccess: () => {
        alert('all good baby !');
    }
});