'use strict'; 


function criaTransportador () {
  var nodemailer = require('nodemailer'),
  transporter = nodemailer.createTransport("SMTP", {
    service: "Gmail",
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS
    }
  });	

 return transporter;

}

module.exports = {
  criaTransportador : criaTransportador
}
