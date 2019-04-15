'use strict';

var express = require('express'),
app = express();

app.get('/api/account', function(req, res) {
  res.send({
    "status" : "OK",
    "module": "Account",
    "message" : "Account MS APIs are working" 
  });
});

app.listen(3002);
