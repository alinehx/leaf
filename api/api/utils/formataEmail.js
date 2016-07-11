'use strict';


function formataEmail(dados) {
  
  var email = {
   from: dados.email,
   to: 'contato@leafsolucoes.com',
   subject: 'Contato site',
   text: 'De:' + dados.nome + '\n\n\n\n' + 'Mensagem:' + '\n\n\n\n' + dados.mensagem
  }



  return email;
}

module.exports = {
  formataEmail : formataEmail
}