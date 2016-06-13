'use strict';

angular.module('bookappApp')
  .controller('AddCtrl', function ($scope, itemsService, $state, User) {
    var userEmail,
       userDomain;

    $scope.getCurrentUser = User.get();

    $scope.getCurrentUser.$promise.then(function(data) {
      userEmail = data.email.split("@");
      userDomain = userEmail[userEmail.length - 1];
    });

    $scope.addItemSubmit = function () {
      var send = itemsService.save({
        isbn: $scope.isbn,
        classcode: $scope.classcode,
        price: $scope.price,
        type: $scope.type,
        status: true,
        negotiable: $scope.negotiable,
        domain: userDomain,
        sellerid: $scope.getCurrentUser._id
      }, function(data) {
        $state.go('find');
      });
    }
  });
