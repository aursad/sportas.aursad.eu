'use strict';

app.controller('MainController', ['$rootScope', '$scope', '$state', 'daysResource', '$http',
    function ($rootScope, $scope, $state, daysResource, $http) {

        $rootScope.$on("$routeChangeStart", function () {
            $rootScope.loading = true;
        });
        $rootScope.$on("$routeChangeSuccess", function () {
            $rootScope.loading = false;
        });

        daysResource.get({}, function (success) {
            $scope.daysData = success;
        });


        $scope.goNext = function (classId) {
            $state.go("day", {id: classId});
        }
    }]);