angular.module('muse').service('soundcloudService', ['$http', function($http) {
  var service = this;
  ENDPOINT = "https://api.soundcloud.com";
  CLIENT_ID = '253461658a378ff4b933ee29492644a6';
  service.getTrack = function(id) {
    return $http({
      method: 'GET',
      params: {
        client_id: CLIENT_ID
      },
      url: ENDPOINT + '/tracks/' + id
    });
  };
  service.searchByName = function(name) {
    return $http({
      method: 'GET',
      params: {
        client_id: CLIENT_ID,
        q: name
      },
      url: ENDPOINT + '/tracks'
    });
  };

}]);
