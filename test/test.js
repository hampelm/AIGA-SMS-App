/*globals describe, before, it */

'use strict';

var request = require('supertest');
var should = require('should');

var server;
var PORT = 3212;
var BASE = 'http://0.0.0.0:3212';

// TODO https://www.npmjs.com/package/test-console

describe('app', function() {

  before(function(done) {
    server = require(__dirname + '/../server.js');
    done();
  });

  it('should respond with ok', function(done) {
    request(server)
      .get('/')
      .expect(200, 'ok', done);
  });

  it.skip('should be able to start a textit flow', function(done) {
    should.exist(false);
    done();
  });

  it.skip('should be able to send data to constant contact', function(done) {
    should.exist(false);
    done();
  });

  it.skip('should find a contact in cc if one exists', function(done) {
    should.exist(false);
    done();
  });

  it.skip("should update a contact if it already exists", function(done) {
    should.exist(false);
    done();
  });

  it.skip("should create a contact in cc if one doesn't yet exist", function(done) {
    should.exist(false);
    done();
  });

  it.skip('should send a textit flow request to constant contact', function(done) {
    should.exist(false);
    done();
  });

  it.skip('should raise an error if a contact cannot be edited', function(done) {
    should.exist(false);
    done();
  });

  it.skip('should raise an error if a contact cannot be created', function(done) {
    should.exist(false);
    done();
  });

  it.skip('should listen for messages to the shortcode and start a textit flow', function(done) {
    should.exist(false);
    done();
  });

  it.skip('should not start a textit flow if one already exists for the same number', function(done) {
    should.exist(false);
    done();
  });

  it.skip('should raise an error if a flow cannot be started', function(done) {
    should.exist(false);
    done();
  });


});
