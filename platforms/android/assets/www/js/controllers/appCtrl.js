angular.module('muse').controller('appCtrl', ['$scope', 'fireService', 'storageService' ,function($scope, fireService, storageService) {
  var signIn = function(type) {
    if (type == "facebook") {
      fireService.fbSign().then(function(user) {
        console.log(user);
        $scope.userData.uid = user.uid;
        $scope.userData.isAnon = false;
      }).catch(function(error) {
        console.log(error);
      });
    }
    if (type == "anon") {
      fireService.anonSign().then(function(user) {
        console.log(user)
        $scope.userData.uid = user.uid;
        $scope.userData.isAnon = true;
      }).catch(function(error) {
        consoe.log(error);
      });
    }
  };
  $scope.signIn = function(type) {
    signIn(type);
  };

  $scope.userData = {
    name: null,
    currentRoom: null,
    uid: null,
    isAnon: null
  };
  if ($scope.userData.uid === null) {
    signIn('anon');
  }
}]);
