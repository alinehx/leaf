






angular.module('leafApp').controller('EmailCtrl',  function ($scope, $rootScope, $http, alert) {
  $scope.submit = function () {
    var email = {
      email: $scope.formulario.email,
      nome: $scope.formulario.nome,
      mensagem: $scope.formulario.mensagem  
    },
    url = 'http://localhost:5800/email';

    console.log('teste');

    $http.post(url, email)
    .success(function (res) {
      alert('success','Ok!', 'E-mail enviado com sucesso'); 
    })
    .error(function (err) {        
      alert('warning', 'Erro!', 'Não foi possivel enviar o seu e-mail');           
    }); 

    console.log('email', email); 
  }    
    
});
