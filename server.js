var express = require('express');
var bodyParser = require('body-parser');
require('dotenv').load();
var textit = require('src/textit');

var app = express();
var port = process.env.PORT || 3000;

app.use( bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

app.get('/AIGA', function (req, res) {
  res.send('Hello World!');
});

app.get('/sms', function (req, res) {
  res.send('Sms will arrive here.');
});

app.post('/nexmo', function (req, res, body) {
  console.log("Received message from nexmo:", req.body);

  textit.createContact({
    phone: req.body.phone
  }, function(error, response) {
    // Start the flow for the user

  })

  req.send(201);
});


app.post('/textit', function (req, res, body) {
  console.log("Received new stage from textit:", req.body);


  // Update constant contact
  // Find contact
  // Create if not found
  // Set values if found

  req.send(201);
});

