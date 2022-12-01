(function() {

  const formController = function($scope, $routeParams, profilesFactory, $location) {

    $scope.profile = {
      firstName: "",
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
      if ($routeParams.id) {
        profilesFactory.updateProfile($routeParams.id, profile).then(profileId => {
          $scope.navigateTo(route, profileId);
        });
      } else {
        profilesFactory.saveProfile(profile).then(profileId => {
          $scope.navigateTo(route, profileId);
        });
      }
    };

    $scope.addProfile = (profile) => {
      console.log(profile);
    }

    const formSubmit = () => {
      profilesFactory.updateProfile($scope.profile).then(() => {
        console.log("Added");
      })
    }
  };

  angular.module("app").controller('FormController', formController);
}())
