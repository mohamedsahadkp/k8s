// Simple node.js web app for demonstrating containerizing apps
'use strict';

var express = require('express'),
app = express();

app.get('/api/user', function(req, res) {
  res.send({
    "status" : "OK",
    "module": "User",
    "message" : "User MS APIs are working" 
  });
});

app.listen(3001);
