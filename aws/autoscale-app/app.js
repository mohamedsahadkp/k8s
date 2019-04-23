'use strict';

var express = require('express'),
app = express();

app.get('/api', function(req, res) {
  res.send({
    "status" : "OK",
    "message" : "Autoscale APIs are working" 
  });
});

app.listen(9090);
