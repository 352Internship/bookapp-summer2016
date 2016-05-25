'use strict';

angular.module('bookappApp')
  .controller('ItemsCtrl', function ($scope, itemsService) {
    // Use the User $resource to fetch all users
    $scope.items = itemsService.query();
  });
