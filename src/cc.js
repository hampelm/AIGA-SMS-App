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

    console.log("Found contact?", body);
    done(undefined, body.results);
  });
};

// http://developer.constantcontact.com/docs/contacts-api/contacts-collection.html?method=POST
cc.updateContact = function(contact, options, done) {

  // Add contact to the given list
  contact.lists.push({
      id: process.env.CCLISTID
  });

  if (options.phone) {
    contact.cell_phone = options.phone;
  }

  request.post({
    url: 'https://api.constantcontact.com/v2/contacts/' + contact.id + '/',
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
    json: contact
  }, function(error, response, body) {
    if(error) {
      console.error('Error updating a contact on Constant Contact: ', error);
    }

    console.log("Finished attempt to update user", response);
    done(error, response);
  });
};

// http://developer.constantcontact.com/docs/contacts-api/contacts-collection.html?method=POST
cc.addContact = function(options, done) {

  var data = {
    lists: [{
      id: process.env.CCLISTID
    }],
    email_addresses: [{
      email_address: options.email
    }]
  };

  if (options.phone) {
    data.cell_phone = options.phone;
  }

  if(options.name) {
    data.first_name = options.name;
  }

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
    json: data
  }, function(error, response, body) {
    if(error) {
      console.error('Error adding a contact on Constant Contact: ', error);
    }

    console.log("Finished attempt to add user", response);
    done(error, response);
  });
};
