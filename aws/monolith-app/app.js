// Simple node.js web app for demonstrating containerizing apps
'use strict';

var express = require('express'),
app = express();

app.get('/api', function(req, res) {
  res.send({
    "status" : "OK",
    "message" : "APIs are working" 
  });
});

app.listen(8080);
