// Libraries
var bodyParser = require('body-parser');
require('dotenv').load();
var express = require('express');
var _ = require('lodash');

// Project
var cc = require('./src/cc');
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
    console.log("Aborting: encountered unknown flow", req.body.flow);
    res.sendStatus(200);
    return;
  }

  // Get the values we need
  var responses = textit.parseValues(req.body.values);
  console.log("Using responses", responses);

  // Create the contact
  cc.addContact({
    email: responses['Email 1'].value
  }, function(error, response) {
    if (error) {
      res.sendStatus(500);
    }

    res.sendStatus(201);
  });
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
