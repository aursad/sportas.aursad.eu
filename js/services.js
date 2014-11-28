'use strict';

/* Services */

var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('Phone', ['$resource',
  function($resource){
      return $resource('treniruote/:phoneId.json',
          {  },
          { query: { method: 'GET', params: { phoneId: 'treniruote' }, isArray: true } });
  }]);
