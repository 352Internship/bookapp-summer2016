'use strict';

angular.module('bookappApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('items', {
        url: '/items',
        templateUrl: 'app/items/items.html',
        controller: 'ItemsCtrl'
      });
  });