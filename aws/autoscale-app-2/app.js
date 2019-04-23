'use strict';

var express = require('express'),
app = express();

app.get('/api', function(req, res) {
  res.send({
    "status" : "OK",
    "message" : "Autoscale APIs are working 2" 
  });
});

app.listen(9595);
