(function() {

  const homeController = function($scope, profilesFactory) {
    function init() {
      $scope.profiles = profilesFactory.getProfiles();
    }

    init();
  };

  angular.module("app").controller('HomeController', homeController);
}())
