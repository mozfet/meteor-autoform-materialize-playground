/*jshint esversion: 6 */

import SimpleSchema from 'simpl-schema';

SimpleSchema.setDefaultMessages({
  initialLanguage: 'en',
  messages: {
    en: {
      uploadError: '{{value}}', //File-upload
    },
  }
});
