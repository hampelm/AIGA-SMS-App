/*jslint node: true */
'use strict';

var request = require('request');

var cc = module.exports;

cc.findContact = function(options, done) {
  request.get({
    url: '/api/v1/contacts.json',
    json: {
      limit: 500
    }
  }, function(error, response, body) {
    if(error) {
      console.error("Error getting contacts: ", error);
    }

    var contact _.find(results, {
      criteria: options.criteria
    });

    if (contact) {
      done(error, response);
      return;
    }

    if (meta.pagination.next_link) {
      // Follow the next link
    } else {
      return "not found.";
    }

  });
};

cc.createContact = function() {

};

// https://developer.constantcontact.com/docs/contacts-api/contacts-resource.html?method=PUT
cc.updateContact = function(options, done) {
  request.put({
    url: '/api/v1/contacts.json',
    json: {
    }
  }, function(error, response, body) {
    if(error) {
      console.error("Error updating a contact on constant Contact: ", error);
    }

    done(error, response);
  });
};
