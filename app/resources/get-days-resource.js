'use strict';

app.factory('daysResource', ['$resource', function($resource) {
    return $resource('treniruote/treniruote.json', {}, {
            get: {
                method: 'GET', isArray: true
            }
        });
}]);