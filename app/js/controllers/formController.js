(function() {

  const formController = function($scope, $routeParams, profilesFactory, $location) {
    if ($routeParams.id) {
      function init() {
        profilesFactory.getProfiles().then(athleteData => {
          $scope.athleteData = athleteData;
        });
      }
      init();
    }

    $scope.navigateTo = (route) => $location.path(`./${route}`);

    const formSubmit = () => {
      profilesFactory.updateProfile($scope.athleteData).then(() => {
        console.log("Added");
      })
    }
  };

  angular.module("app").controller('FormController', formController);
}())
