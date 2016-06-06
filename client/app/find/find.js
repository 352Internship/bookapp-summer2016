'use strict';

angular.module('bookappApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('find', {
        url: '/find',
        templateUrl: 'app/find/find.html',
        controller: 'FindCtrl'
      });
  });
