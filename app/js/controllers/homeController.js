(function() {

  const homeController = function($scope, profilesFactory, $location) {
    function init() {
      profilesFactory.getProfiles().then(profiles => {
        $scope.profiles = profiles;
      });
    }

    init();

    $scope.navigateToBasicInfoPage = () => $location.path('/form-basic');
  };

  angular.module("app").controller('HomeController', homeController);
}())
