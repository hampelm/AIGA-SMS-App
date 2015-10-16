var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 3000

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
  console.log(req.body.phone)
  res.send('Sms will arrive here.');
});