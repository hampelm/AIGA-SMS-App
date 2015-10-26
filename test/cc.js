/*globals describe, before, it */

'use strict';

// Libraries
require('dotenv').load();
var nock = require('nock');
var request = require('supertest');
var should = require('should');

// Local
var cc = require('../src/cc');

// TODO https://www.npmjs.com/package/test-console

describe('Constant Contact', function() {

  before(function(done) {
    // server = require(__dirname + '/../server.js');
    done();
  });

  it('should find a user that exists', function(done) {
    cc.findContact({
      email: 'matth@localdata.com'
    }, function(error, response) {
      should.not.exist(error);
      response[0].email_addresses[0].email_address.should.equal('matth@localdata.com');
      done();
    });
  });

  it("should not find a user that doesn't exist", function(done) {
    cc.findContact({
      email: 'foobarbaz@localdata.com'
    }, function(error, response) {
      response.length.should.equal(0);
      done();
    });
  });

  it("should create a user", function(done) {
    var fakeConstantContact = nock('https://api.constantcontact.com')
      .filteringPath(/api_key=[^&]*/g, 'api_key=XXX')
      .filteringRequestBody(function(body) {
        return '*';
      })
      .post('/v2/contacts?action_by=ACTION_BY_VISITOR&api_key=XXX', '*')
      .reply(201, function(uri, requestBody) {
        console.log("Got request body creating a user:", requestBody);
      });

    cc.addContact({
      email: 'doesnotexist@localdata.com'
    }, function(error, response) {
      console.log("Got create user results:", response);
      done();
    });
  });

});
