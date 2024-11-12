(function() {

  const formController = function($scope, $routeParams, profilesFactory, $location) {

    $scope.profile = {
      firstName: "",
      lastName: "",
      dateOfBirth: new Date(),
      gender: "",
      sport: "",
      location: "",
      team: "",
      about: ""
    }

    if ($routeParams.id) {
      function init() {
        profilesFactory.getProfile($routeParams.id).then(profile => {
          profile.dateOfBirth = $location.$$path.includes('form-basic') ? new Date(profile.dateOfBirth) : moment(profile.dateOfBirth).format("MM-DD-YYYY");
          $scope.profile = profile;
        });
      }
      init();
    }

    $scope.navigateTo = (route, profileId) => {
      if (profileId) {
        $location.path(`/${route}/${profileId}`);
      } else if ($routeParams.id) {
        profileId = $routeParams.id;
        $scope.navigateTo(route, profileId);
      } else {
        $location.path(`/${route}`);
      }
    };

    $scope.saveProfile = (profile, route) => {
      validateForm();
      if ($routeParams.id) {
        profilesFactory.updateProfile($routeParams.id, profile).then(profileId => {
          $scope.navigateTo(route, profileId);
        });
      } else {
        profilesFactory.saveProfile(profile).then(profileId => {
            $scope.navigateTo(route, profileId);
          }
        );
      }
    };

    const validateForm = () => {
      if ($location.$$path.includes('basic')) {
        let formTree = document.getElementById("basicForm");
      }
    }
  };

  angular.module("app").controller('FormController', formController);
}())
