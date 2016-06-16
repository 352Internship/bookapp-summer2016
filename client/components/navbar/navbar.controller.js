'use strict';

angular.module('bookappApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth, usersTransCount) {
    $scope.menu = [
      {
        'title': 'Find',
        'link': '/find',
        'userLink': true
      },
      {
        'title': 'Add',
        'link': '/add',
        'userLink': true
      },

    ];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    usersTransCount.query(function (response) {
      $scope.numberOfMessages = response[0];
    });


    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
