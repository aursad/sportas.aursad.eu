'use strict';

app.controller('ClassController', ['$rootScope', '$scope', '$state', 'getDayTrainee',
    function ($rootScope, $scope, $state, getDayTrainee) {
        $rootScope.$on("$routeChangeStart", function () {
            $rootScope.loading = true;
        });
        $rootScope.$on("$routeChangeSuccess", function () {
            $rootScope.loading = false;
        });

        $scope.dayId = $state.params.id;

        getDayTrainee.get({day: $scope.dayId}, function (success) {
            $scope.diena = success;
        });
    }]);
