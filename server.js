// Libraries
var express = require('express');
var bodyParser = require('body-parser');
require('dotenv').load();
var _ = require('lodash');

// Project
var settings = require('./settings');
var textit = require('./src/textit');

// Set up and srart the server
var app = express();
var port = process.env.PORT || 3000;

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({extended: true});

var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});

// Routes
app.get('/', function (req, res) {
  res.send('ok');
});

app.post('/textit', urlencodedParser, function (req, res, body) {
  console.log("Received new stage from textit:", req.body);

  // Skip flows we don't recognize.
  if (! _.includes(settings.flowIds, req.body.flow)) {
    console.log("Encountered unknown flow", req.body.flow);
    res.sendStatus(200);
    return;
  }

  var responses = textit.parseValues(req.body.values);
  console.log("Using responses", responses);

  // Values is an array!
  // var values = req.body.values;
  // var email = values.email_1;
  // var name = values.name1;


  // Update constant contact
  // Find contact
  // Create if not found
  // Set values if found

  res.send(201);
});

// TODO
// Nexmo endpoint
app.post('/nexmo', function (req, res, body) {
  console.log("Received message from nexmo:", req.body);

  /*
  textit.createContact({
    phone: req.body.phone
  }, function(error, response) {
    // Start the flow for the user

  })
  */

  res.sendStatus(501);
});

module.exports = server;
