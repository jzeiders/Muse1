angular.module('muse').controller('appCtrl', ['$scope', 'fireService', 'accountService', 'roomService',function($scope, fireService, accountService, roomService) {
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
        console.log(user);
        $scope.userData.uid = user.uid;
        $scope.userData.isAnon = true;
      }).catch(function(error) {
        consoe.log(error);
      });
    }
  };
  var signInCredential = function(cred){
    accountService.credentialSign(cred).then(function(user){
      $scope.userData.uid = user.uid;
    }).catch(function(error){
      console.log(error);
    })
  };
  $scope.credentialSign = function(cred){
    signInCredential(cred);
  }
  $scope.signIn = function(type) {
    signIn(type);
  };

  $scope.userData = {
    name: null,
    uid: null,
    isAnon: null
  };
  $scope.room = roomService.localRoom;
  if ($scope.userData.uid === null) {
    accountService.getCredential().then(function(credential){
      signInCredential(credential);
    }).catch(function(error){
      signIn('anon');
      console.log(error);
    });
  }
  if($scope.room === null){
    console.log("Created local room")
    $scope.room = roomService.localRoom($scope.userData.uid);
  }
}]);
