'use strict';

angular.module('bookappApp')
  .controller('AddCtrl', function ($scope, itemsService, $state, User) {

    $scope.getCurrentUser = User.get();
    
    $scope.addItemSubmit = function () {
      var send = itemsService.save({
        isbn: $scope.isbn,
        classcode: $scope.classcode,
        price: $scope.price,
        type: $scope.type,
        status: true,
        negotiable: $scope.negotiable,
        sellerid: $scope.getCurrentUser._id
      }, function(data) {
        $state.go('find');
      });
    }
  });
