(function() {
  let profilesFactory = function($http) {
    let factory = {};

    factory.getProfiles = function() {
      return $http.get('http://localhost:2222/profile');
    };

    factory.getProfile = function(profileId) {
      return $http.get(`http://localhost:2222/profile/${profileId}`);
    }

    return factory;
  }

  angular.module('app').factory('profilesFactory', profilesFactory);
}())
