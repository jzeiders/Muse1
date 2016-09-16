angular.module('muse').service('playingService', ['soundcloudService', function(soundcloudService) {
  var service = this,
    SC = soundcloudService,
    ENDPOINT = "https://api.soundcloud.com";


  service.getTrack = function(id) {
    return SC.getTrack(id)
  };

  service.nameSearch = function(name) {
    console.log(name);
    return SC.searchByName(name).then(function(tracks) {
      return tracks;
    });
  }


}])
