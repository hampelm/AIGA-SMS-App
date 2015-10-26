/*jslint node: true */
'use strict';

// Libraries
var request = require('request');

// Local
var settings = require('../settings');

var cc = module.exports;

cc.findContact = function(options, done) {
  request.get({
    url: 'https://api.constantcontact.com/v2/contacts',
    qs: {
      email: options.email,
      status: 'ALL',
      limit: 1,
      api_key: process.env.CC_KEY
    },
    auth: {
      bearer: process.env.CC_TOKEN
    }
  }, function(error, response, body) {
    body = JSON.parse(body);

    if (error) {
      console.error("Error getting contacts: ", error);
      return done(error);
    }

    done(undefined, body.results);
  });
};

// http://developer.constantcontact.com/docs/contacts-api/contacts-collection.html?method=POST
cc.addContact = function(options, done) {
  request.post({
    url: 'https://api.constantcontact.com/v2/contacts',
    headers: {
      'content-type': 'application/json'
    },
    auth: {
      bearer: process.env.CC_TOKEN
    },
    qs: {
      action_by: 'ACTION_BY_VISITOR',
      api_key: process.env.CC_KEY
    },
    json: {
      lists: [{
        id: settings.ccListId
      }],
      email_addresses: [{
        email_address: options.email
      }]
    }
  }, function(error, response, body) {
    if(error) {
      console.error('Error adding a contact on Constant Contact: ', error);
    }

    console.log("Response from cc", body);
    done(error, response);
  });
};
