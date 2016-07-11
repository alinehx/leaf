'use strict';

angular
  .module('leafApp').config(function ($urlRouterProvider, $stateProvider, $httpProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('index', {
      url: '/',
      templateUrl: '../index.html',
       controller: 'EmailCtrl'
    });