angular.module('muse').factory('fireService', ['$firebaseArray',"$firebaseAuth", function($firebaseArray, $firebaseAuth) {
  var service = {};
  var ref = firebase.database().ref();
  var roomsRef = ref.child('rooms');
  var roomsArray = $firebaseArray(roomsRef);
  var auth = $firebaseAuth();
  service.addToArray = function(array, room) {
    array.$add(room);
  };
  service.getArray = function(arrayRef) {
    var array = ref.child(arrayRef);
    return $firebaseArray(array);
  }
  service.fbSign = function() {
    return auth.$signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(function(firebaseUser) {
      console.log("Signed in as:", firebaseUser.uid);
      return firebaseUser;
    }).catch(function(error) {
      console.log("Authentication failed:", error);
      return error;
    });
  }
  service.anonSign = function() {
    return auth.$signInAnonymously().then(function(firebaseUser) {
      return firebaseUser;
    }).catch(function(error) {
      return error;
    });
  }
return service;
}]);
