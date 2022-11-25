angular.module("app").config(function($routeProvider) {

  $routeProvider.when('/home', {
    templateUrl: '../templates/home.html',
    controller: 'HomeController'
  });

  $routeProvider.when('/form', {
    templateUrl: '../templates/form.html',
    controller: 'FormController'
  });

  $routeProvider.when('/form/:id', {
    templateUrl: '../templates/form.html',
    controller: 'FormController'
  });

  $routeProvider.otherwise({ redirectTo: '/' });

});
