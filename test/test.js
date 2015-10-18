/*globals describe, before, it */

'use strict';

var request = require('request');
var should = require('should');

var app = require(__dirname + '/../server.js');
var PORT = 3212;
var BASE = 'http://0.0.0.0:3212';

// TODO https://www.npmjs.com/package/test-console

describe('app', function() {

  before(function(done) {
    app.listen(PORT, done);
  });

  it('should say hello', function(done) {
    request.get(BASE, function(error, response, body) {
      body.should.equal('Hello World!');
      done();
    });
  });

  it('should say goodbye', function(done) {
    request.get(BASE, function(error, response, body) {
      body.should.equal('Goodbye');
      done();
    });
  });

  it('should be able to start a textit flow', function(done) {
    // Create flow
  });

  it('should be able to send data to constant contact', function(done) {
    should.exist(false);
  });

  it('should find a contact in cc if one exists', function(done) {
    should.exist(false);
  });

  it("should update a contact if it already exists", function(done) {
    should.exist(false);
  });

  it("should create a contact in cc if one doesn't yet exist", function(done) {
    should.exist(false);
  });

  it('should send a textit flow request to constant contact', function(done) {
    should.exist(false);
  });

  it('should raise an error if a contact cannot be edited', function(done) {
    should.exist(false);
  });

  it('should raise an error if a contact cannot be created', function(done) {
    should.exist(false);
  });

  it('should listen for messages to the shortcode and start a textit flow', function(done) {
    should.exist(false);
  });

  it('should not start a textit flow if one already exists for the same number', function(done) {
    should.exist(false);
  });

  it('should raise an error if a flow cannot be started', function(done) {
    should.exist(false);
  });


});
