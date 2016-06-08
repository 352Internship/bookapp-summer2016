'use strict';

angular.module('bookappApp')
  .controller('AddCtrl', function ($scope, itemsService, $state) {

    $scope.addItemSubmit = function () {
      var send = itemsService.save({
        isbn: $scope.isbn,
        classcode: $scope.classcode,
        price: $scope.price,
        type: $scope.type,
        status: true,
        sellerid: "57557f14a6364cc81bf24d93"
      }, function(data) {
        $state.go('find');
      });
    }
  });
