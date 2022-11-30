(function() {

  const formController = function($scope, $routeParams, profilesFactory) {
    if ($routeParams.id) {
      function init() {
        profilesFactory.getProfiles().then(athleteData => {
          $scope.athleteData = athleteData;
        });
      }
      init();
    }

    const formSubmit = () => {
      profilesFactory.updateProfile($scope.athleteData).then(() => {
        console.log("Added");
      })
    }
  };

  angular.module("app").controller('FormController', formController);
}())
