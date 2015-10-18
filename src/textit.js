/*jslint node: true */
'use strict';

var request = require('request');

var textit = module.exports;


textit.createContact = function(options, done) {
  request.post({
    url: '/api/v1/contacts.json',
    json: {
      urns: ['tel+' + options.phone]
    }
  }, function(error, response, body) {
    if(error) {
      console.error("Error creating a contact on textit: ", error);
    }

    done(error, response);
  });
};

/*
Options:
* contacts: list of contact UUIDs
 */
textit.startRun = function(options, done) {
  request.post({
    url: '/api/v1/contacts.json',
    json: {
      flow_uuid: process.env.TEXIT_FLOW_UUID,
      contacts: options.contacts,
      restart_participants: false
    }
  }, function(error, response, body) {
    if(error) {
      console.error("Error starting a run on textit: ", error);
    }

    done(error, response);
  });
};
