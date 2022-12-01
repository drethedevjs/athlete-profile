(function() {

  const homeController = function($scope, profilesFactory, $location) {
    function init() {
      profilesFactory.getProfiles().then(profiles => {
        $scope.profiles = profiles;
      });
    }

    init();

    $scope.navigateToBasicInfoPage = () => $location.path('/form-basic');
    $scope.viewProfile = (profileId) => $location.path(`/form-summary/${profileId}`);
  };

  angular.module("app").controller('HomeController', homeController);
}())
