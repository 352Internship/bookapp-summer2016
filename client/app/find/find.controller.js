'use strict';

angular.module('bookappApp')
  .controller('FindCtrl', function ($scope, activeItemsService, User) {

    var userEmail,
       userDomain;

    $scope.getCurrentUser = User.get();

    $scope.getCurrentUser.$promise.then(function(data) {
      userEmail = data.email.split("@");
      userDomain = userEmail[userEmail.length - 1];

      // Use the itemsService to fetch all items data
      activeItemsService.find({ domain: userDomain }).$promise.then(function (data) {
        $scope.items = data;
      });

      $scope.currentDomain = userDomain;

    });

  });
