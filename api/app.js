'use strict';
var express = require('express'),
bodyParser = require('body-parser'),
app = express(),
server;

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

// Enable CORS (More info: http://enable-cors.org/)
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.post('/email', function (req, res) {
  var email = require('./api/controller/email');
  
  console.log('req', req.body);



  return email.enviaEmail(req, res);
});


server = app.listen(5800, function() {
  console.log('App running');  
});
