// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('muse', ['ionic',
'firebase',
'lokijs'
,'ngCordovaMocks' //Disable for Testing
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  var config = {
    apiKey: "AIzaSyDtOevg8sFZUdiV8JxwG1_rkEc3XT2P3X4",
    authDomain: "new-muse.firebaseapp.com",
    databaseURL: "https://new-muse.firebaseio.com",
    storageBucket: "new-muse.appspot.com",
  };
   firebase.initializeApp(config);
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.playing', {
    url: '/playing',
    views: {
      'tab-playing': {
        templateUrl: 'templates/playing.html',
        controller: 'playingCtrl'
      }
    }
  })

  .state('tab.rooms', {
      url: '/rooms',
      views: {
        'tab-rooms': {
          templateUrl: 'templates/rooms.html',
          controller: 'roomsCtrl'
        }
      }
    })
    .state('tab.account', {
      url: '/account',
      views: {
        'tab-account': {
          templateUrl: 'templates/account.html',
          controller: 'accountCtrl'
        }
      }
    })

  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});
