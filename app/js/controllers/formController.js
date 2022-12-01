(function() {

  const formController = function($scope, $routeParams, profilesFactory, $location) {

    $scope.profile = {
      firstName: "something",
      lastName: "",
      dob: "",
      gender: "",
      sport: "",
      location: "",
      team: "",
      about: ""
    }

    if ($routeParams.id) {
      function init() {
        profilesFactory.getProfile($routeParams.id).then(profile => {
          $scope.profile = profile;
        });
      }
      init();
    }

    $scope.navigateTo = (route) => $location.path(`/${route}`);

    $scope.addProfile = (profile) => {
      console.log(profile);
    }

    const formSubmit = () => {
      profilesFactory.updateProfile($scope.athleteData).then(() => {
        console.log("Added");
      })
    }
  };

  angular.module("app").controller('FormController', formController);
}())
