angular.module("app").config(function($routeProvider) {

  $routeProvider.when('/home', {
    templateUrl: '../templates/home.html',
    controller: 'HomeController'
  });

  $routeProvider.otherwise({ redirectTo: '/' });

});
