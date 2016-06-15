'use strict';

angular.module('bookappApp')
  .controller('FindCtrl', function ($scope, activeItemsService, User, transactionService) {

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

      $scope.currentUserID = data._id;
    });

    $scope.message = function (itemid, sellerid) {
      var trans = new transactionService({});
      trans.sellerid = sellerid
      trans.buyerid = $scope.currentUserID
      trans.itemid = itemid
      trans.messages = [{
        body: "I'd like to purchase this item.",
        seller: false,
      }];

      trans.$save(function(response){
    						console.log(response);
    	});
    };

  });
