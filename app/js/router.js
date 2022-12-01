angular.module("app").config(function($routeProvider) {

  $routeProvider.when('/', {
    templateUrl: '../templates/home.html',
    controller: 'HomeController'
  });

  $routeProvider.when('/form-basic', {
    templateUrl: '../templates/formBasicInfo.html',
    controller: 'FormController'
  });

  $routeProvider.when('/form-basic/:id', {
    templateUrl: '../templates/formBasicInfo.html',
    controller: 'FormController'
  });

  $routeProvider.when('/form-about/:id', {
    templateUrl: '../templates/formAbout.html',
    controller: 'FormController'
  });

  $routeProvider.when('/form-summary/:id', {
    templateUrl: '../templates/formSummary.html',
    controller: 'FormController'
  });

  $routeProvider.when('/form/:id', {
    templateUrl: '../templates/form.html',
    controller: 'FormController'
  });

  $routeProvider.otherwise({ redirectTo: '/' });

});
