angular.module('muse').controller('roomsCtrl', ['$scope', '$ionicModal','roomService',
  function($scope, $ionicModal, roomService) {
    var newRoomModal;
    $scope.data = {};
    $scope.rooms = roomService.getRoomsArray();
    $scope.$on('modal.hidden', function(e) {
      if(window.cordova)
        cordova.plugins.Keyboard.close();
    });
    $scope.$on('$destroy', function() {
      newRoomModal.remove();
    });
    $ionicModal.fromTemplateUrl('templates/newRoomForm.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      newRoomModal = modal;
    });
    var createRoom = function() {
      newRoomModal.show();
    };
    $scope.submitRoom = function(){
      roomService.addRoom({
        type: $scope.data.type,
        open: $scope.data.open,
        name: $scope.data.name,
        loc: {lat: 40,lng:40},
        user: $scope.userData.uid
      });
      newRoomModal.hide();
    };
    $scope.createRoom = function() {
      createRoom();
    };
  }
]);
