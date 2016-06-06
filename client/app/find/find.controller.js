'use strict';

angular.module('bookappApp')
  .controller('FindCtrl', function ($scope, itemsService) {
    // Use the itemsService to fetch all items data
    $scope.items = itemsService.query();


  });
