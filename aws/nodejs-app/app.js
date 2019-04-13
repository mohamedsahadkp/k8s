// Simple node.js web app for demonstrating containerizing apps
'use strict';

var express = require('express'),
    app = express();

app.get('/api', function(req, res) {
  res.send({
    "status" : "OK",
    "data" : "OK" 
  });
});

app.get('/api/v2', function(req, res) {
  res.send({
    "status" : "OK",
    "data" : "v" 
  });
});


app.listen(8080);
module.exports.getApp = app;