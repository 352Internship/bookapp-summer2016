'use strict';

angular.module('bookappApp')
  .controller('FindCtrl', function ($scope, activeItemsService) {
    // Use the itemsService to fetch all items data
    $scope.items = activeItemsService.query();


  });
