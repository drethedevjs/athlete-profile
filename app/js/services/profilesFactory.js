(function() {
  let profilesFactory = function($http) {
    let factory = {};

    factory.getProfiles = function() {
      return $http.get('http://localhost:2222/profile').then(res => {
        return res.data;
      });
    };

    factory.getProfile = function(profileId) {
      return $http.get(`http://localhost:2222/profile/${profileId}`).then(res => {
        return res.data[0];
      });
    }

    factory.updateProfile = function(profileId, profile) {
      return $http.put(`http://localhost:2222/profile/${profileId}`, profile).then(res => {
        return res.data._id;
      });
    }

    factory.saveProfile = function(profile) {
      return $http.post('http://localhost:2222/profile', profile).then(res => {
        return res.data._id;
      });
    }

    return factory;
  }

  angular.module('app').factory('profilesFactory', profilesFactory);
}())
