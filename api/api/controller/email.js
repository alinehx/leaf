'use strict';


function enviaEmail (req, res) {
  var configuracaoTransportadorEmail = require('../utils/configuracaoTransportadorEmail'),
  formataEmail = require ('../utils/formataEmail'),
  transportador,
  objetoEmail;
  
  transportador = configuracaoTransportadorEmail.criaTransportador();
 
  objetoEmail = formataEmail.formataEmail(req.body);


  
  transportador.sendMail(objetoEmail, function (erro, resultado) {
    
    if (erro) {
      console.log(erro);
      return res.status(503).send({ 'erro': erro });      
    }
    return res.status(200).send(resultado.response);


  });

}


module.exports = {
  enviaEmail: enviaEmail
}