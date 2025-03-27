var express = require('express');
var server = express();
var bodyParser = require('body-parser');
var util = require('util');
var app = require('./app');

server.use(bodyParser.json());

server.post('/', function (req, res) {
  const destination = req.query.destination;

  if (destination === "hangout") {
    app.talkToHangOut(req.body);
  } else if (destination === "slack") {
    app.talkToSlack(req.body, req.query);
  } else {
    console.log(`No destination`);
  }
  res.end();
});

server.listen(4000, function() {
  console.log('The app has started and is running on :4000');
});

