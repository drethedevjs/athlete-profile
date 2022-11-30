(function() {
  let profilesFactory = function($http) {
    let factory = {};

    factory.getProfiles = function() {
      return $http.get('http://localhost:2222/profile').then(res => {
        return res.data;
      });
    };

    factory.getProfile = function(profileId) {
      return $http.get(`http://localhost:2222/profile/${profileId}`);
    }

    factory.updateProfile = function(athleteData) {
      return $http.put(`http://localhost:2222/profile/${athleteData.id}`, athleteData);
    }

    return factory;
  }

  angular.module('app').factory('profilesFactory', profilesFactory);
}())
