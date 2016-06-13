'use strict';

angular.module('bookappApp')
  .service('itemsService', function ($resource) {
    // AngularJS will instantiate a singleton by calling "new" on this function
      return $resource('/api/items/:id', { id: '@_id' });
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
  });
