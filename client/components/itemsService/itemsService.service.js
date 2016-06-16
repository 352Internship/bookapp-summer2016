'use strict';

angular.module('bookappApp')
  .service('itemsService', function ($resource) {
    // AngularJS will instantiate a singleton by calling "new" on this function
      return $resource('/api/items/:id', { id: '@_id' }, {
        update: {
          method: 'PUT' // this method issues a PUT request
        }
      }
    )
  })
  .service('activeItemsService', function ($resource) {
    // AngularJS will instantiate a singleton by calling "new" on this function
      return $resource('/api/items/active', { domain: '@domain' },
        {
          find: {
            method: 'POST',
            isArray: true
          }
        });
      })
  .service('transactionService', function ($resource) {
    // AngularJS will instantiate a singleton by calling "new" on this function
      return $resource('/api/transactions/:id', { id: '@_id' });
  })
  .service('usersTransactionsService', function ($resource) {
    // AngularJS will instantiate a singleton by calling "new" on this function
      return $resource('/api/transactions/me/all');
  })
  .service('usersTransCount', function ($resource) {
    // AngularJS will instantiate a singleton by calling "new" on this function
      return $resource('/api/transactions/me/count');
  });
