'use strict';

retweetMeal
    .config(['$routeProvider', function ($routeProvider) {

            $routeProvider.when('/', {
                templateUrl: 'src/home/home.html',
                controller: 'HomeController'
            });

            $routeProvider.otherwise({
                redirectTo: '/'
            });

    }]);