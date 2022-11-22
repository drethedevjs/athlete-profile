(function() {

  const homeController = function($scope) {
    $scope.title = "Home";
    $scope.name = "Home";
    $scope.message = "Mouse Over these images to see a directive at work";

    var onLogoutSuccess = function(response) {
      $location.path('/login');
    };

    $scope.logout = function() {
      AuthenticationService.logout().success(onLogoutSuccess);
    };

  };

  angular.module("app").controller('HomeController', homeController);
}())
