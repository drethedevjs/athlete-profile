(function() {
  let profilesFactory = function($http) {
    let factory = {};

    factory.getProfiles = function() {
      return $http.get('/profile').then(res => {
        return res.data;
      });
    };

    factory.getProfile = function(profileId) {
      return $http.get(`/profile/${profileId}`).then(res => {
        return res.data;
      });
    }

    factory.updateProfile = function(profileId, profile) {
      return $http.put(`/profile/${profileId}`, profile).then(res => {
        return res.data._id;
      });
    }

    factory.saveProfile = function(profile) {
      return $http.post('/profile', profile).then(res => {
        return res.data._id;
      });
    }

    return factory;
  }

  angular.module('app').factory('profilesFactory', profilesFactory);
}())
