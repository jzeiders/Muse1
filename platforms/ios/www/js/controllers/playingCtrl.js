angular.module('muse').controller('playingCtrl', ['$scope',"$cordovaMedia",'$cordovaNativeAudio',
  'playingService',
 function($scope,$cordovaMedia,$cordovaNativeAudio, playingService ) {
    $scope.state = {};
    var cardFormatter = function(data, length) {
      var cards = [];
      for (var i = 0; i < length; i++) {
        song = data[i];
        console.log(song);
        if (i == data.length)
          break;
        cards.push({
          id: song.id,
          genre: song.genre,
          title: song.title,
          artwork_url:  song.artwork_url,
          artist: song.user.username,
          plays: song.playback_count,
          stream_url: song.stream_url
        });
      }
      console.log(cards[0].artwork_url);
      $scope.cards = cards;
    };
    // var playTrack = function() {
    //   console.log("Played Track");
    //   $cordovaNativeAudio.loop('music');
    // };
    // var loadTrack = function(url) {
    //   return $cordovaNativeAudio
    //     .preloadComplex('music', url, 1, 1)
    //     .then(function(msg) {
    //       return msg;
    //     }, function(error) {
    //       return error;
    //     });
    // };
    var playTrack = function(media){
      media.play();
    }
    var loadTrack = function(url){
       playTrack($cordovaMedia.newMedia(url));
    }
    $scope.musicButton = function(url){
      console.log("Pressed" + url);
      if (window.cordova) {
      loadTrack(url);
      };
      console.log("Played Track");
    }
    $scope.search = function() {
      playingService.nameSearch($scope.state.term).then(function(data) {
        console.log(data);
        if(data.data.length > 0)
          cardFormatter(data.data, 5);
      });
    };
  }
]);
