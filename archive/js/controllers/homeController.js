(function() {

  const homeController = function($scope, profilesFactory, $location) {
    $scope.profiles = [];
    function init() {
      profilesFactory.getProfiles().then(profiles => {
        $scope.profiles = profiles;
      });
    }

    init();

    $scope.navigateToBasicInfoPage = () => $location.path('/form-basic');
    $scope.viewProfile = (profileId) => $location.path(`/form-summary/${profileId}`);

    $scope.deleteProfile = (profileId) => {
      profilesFactory.deleteProfile(profileId).then((res) => {
        $scope.profiles = $scope.profiles.filter(p => p._id !== profileId);
      });
    }
  };

  angular.module("app").controller('HomeController', homeController);
}())
