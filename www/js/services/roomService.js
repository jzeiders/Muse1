angular.module('muse').factory('roomService',['fireService',function(fireService){
  var service = {};
  var roomsArray = fireService.getArray("rooms");
  service.localRoom = function(author){
    return {type: 'local',
    open: 'invite',
    name: 'local room',
    loc: {lat: 40,lng:40},
    author: author,
    songs: [],
    members: []
  }
  }
  service.addRoom = function(data) {
    fireService.addToArray(roomsArray,data);
  };
  service.getRoomsArray = function(){
    return roomsArray;
  }
  return service;

}]);
