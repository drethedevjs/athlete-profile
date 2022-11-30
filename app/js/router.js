angular.module("app").config(function($routeProvider) {

  $routeProvider.when('/', {
    templateUrl: '../templates/home.html',
    controller: 'HomeController'
  });

  $routeProvider.when('/form-basic', {
    templateUrl: '../templates/formPages/formBasicInfo.html',
    controller: 'FormController'
  });

  $routeProvider.when('/form-about', {
    templateUrl: '../templates/formPages/formAbout.html',
    controller: 'FormController'
  });

  $routeProvider.when('/form-summary', {
    templateUrl: '../templates/formPages/formSummary.html',
    controller: 'FormController'
  });

  $routeProvider.when('/form/:id', {
    templateUrl: '../templates/form.html',
    controller: 'FormController'
  });

  // $routeProvider.otherwise({ redirectTo: '/home' });

});
