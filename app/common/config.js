'use strict';

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise(function ($injector) {
        $injector.invoke([
            'spaRouteService', function (spaRouteService) {
                spaRouteService.route({ defaultPath: '/' });
            }
        ]);
    });
    $urlRouterProvider.rule(function ($injector, $location) {
        var path = $location.path();
        if (path != '/' && path.slice(-1) === '/') {
            $location.replace().path(path.slice(0, -1));
        }
    });

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'home.html'
        })
        .state('apie', {
            url: '/apie',
            templateUrl: 'app/templates/common/apie.html'
        })
        .state('bendraukim', {
            url: '/bendraukim',
            templateUrl: 'app/templates/common/bendraukim.html'
        })
        .state('day', {
            url: '/day/:id',
            templateUrl: "app/templates/class.html",
            controller: "ClassController"
        });
}]);
