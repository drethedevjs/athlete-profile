(function() {

  const homeController = function($scope, profilesFactory) {
    function init() {
      profilesFactory.getProfiles().then(profiles => {
        $scope.profiles = profiles;
      });
    }

    init();
  };

  angular.module("app").controller('HomeController', homeController);
}())
