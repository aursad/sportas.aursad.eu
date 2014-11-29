'use strict';

app.factory('getDayTrainee', ['$resource', function($resource) {
    return $resource('treniruote/:day.json', {day:'@day'}, {
        get: {
            method: 'GET', isArray: false
        }
    });
}]);