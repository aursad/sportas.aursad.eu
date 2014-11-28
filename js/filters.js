'use strict';

/* Filters */

angular.module('phonecatFilters', []).filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});
angular.module('phonecatFilters', []).filter('notnull', function () {
    return function (input) {
        return input ? input : '\u2718';
    };
});