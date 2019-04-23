'use strict';

var express = require('express'),
app = express();

app.get('/api', function(req, res) {
  if(req.query.fibo != undefined) {
    let num = parseInt(req.query.fibo);
    console.log("Result :" + fibo(num));
  }
  res.send({
    "status" : "OK",
    "message" : "Autoscale APIs are working 3" 
  });
});

function fibo(n) {
  if (n < 2)
      return 1;
  else   return fibo(n - 2) + fibo(n - 1);
}

app.listen(9595);
