angular.module('muse').factory('roomService',['fireService',function(fireService){
  var service = {};
  var roomsArray = fireService.getArray("rooms");
  service.addRoom = function(data) {
    fireService.addToArray(roomsArray,data);
  };
  service.getRoomsArray = function(){
    return roomsArray;
  }
  return service;
}]);
