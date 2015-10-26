/*globals describe, before, it */

'use strict';

var request = require('supertest');
var should = require('should');

var textit = require('../src/textit');

var server;
var PORT = 3212;
var BASE = 'http://0.0.0.0:3212';

var sampleTextitValues = '[{"category": {"base": "English"}, "node": "23b7de6b-fabb-4e08-ab25-d6ef88863938", "time": "2015-10-26T17:48:56.673126Z", "text": "1", "rule_value": "1", "value": "1", "label": "Response 1"}, {"category": {"base": "Yes"}, "node": "fd74fd76-1001-4ba8-a3da-b506b21801a3", "time": "2015-10-26T17:49:16.048538Z", "text": "Yes", "rule_value": "Yes", "value": "Yes", "label": "Opt In"}, {"category": {"base": "1"}, "node": "d5168fa2-c355-40bb-8133-a85c61be806e", "time": "2015-10-26T17:49:18.152484Z", "text": "1", "rule_value": "1 1", "value": "1 1", "label": "Response 2"}, {"category": {"base": "Name"}, "node": "075260bf-f5a9-42fe-84bc-29340b0e87df", "time": "2015-10-26T17:49:22.363899Z", "text": "Matt Hampel", "rule_value": "Matt Hampel", "value": "Matt Hampel", "label": "Name1"}, {"category": {"base": "email"}, "node": "a30e8f3a-fd9f-44d4-97ab-87f2f266911b", "time": "2015-10-26T17:49:27.602194Z", "text": "matth@localdata.com", "rule_value": "matth@localdata.com", "value": "matth@localdata.com", "label": "Email 1"}]';

// TODO https://www.npmjs.com/package/test-console

describe('TextIt', function() {

  before(function(done) {
    // server = require(__dirname + '/../server.js');
    done();
  });

  it('should be able to parse values from a flow', function(done) {
    var responses = textit.parseValues(sampleTextitValues);
    responses['Email 1'].value.should.equal('matth@localdata.com');
    responses['Name1'].value.should.equal('Matt Hampel');
    done();
  });
});
