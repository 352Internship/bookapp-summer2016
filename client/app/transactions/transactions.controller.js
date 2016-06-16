'use strict';

angular.module('bookappApp')
  .controller('TransactionsCtrl', function ($scope, usersTransactionsService) {
    var usersTrans = usersTransactionsService.query(function (response) {
      $scope.transactions = usersTrans;
    });

  });
