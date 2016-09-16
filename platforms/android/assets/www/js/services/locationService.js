angular.module('muse').service('locationService', ['$cordovaGeolocation','$q', function($cordovaGeolocation,$1) {
  service.getCurrentLocation = function() {
    if (window.cordova) {
      var posOptions = {
        timeout: 10000,
        enableHighAccuracy: false
      };
      return $cordovaGeolocation
        .getCurrentPosition(posOptions)
        .then(function(position) {
          return {lat: position.coords.latitude,lng:position.coords.longitude};
        }, function(err) {
          return error;
        });
    }
    else {
      return $q.when(
        {lat: 34.0197000,lng:-118.2820056}
      )
    }

  }
  service.getDistance = function(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1); // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d * 1000; // Distance in Meters
  };

  var deg2rad = function deg2rad(deg) {
    return deg * (Math.PI / 180);
  };
}]);
