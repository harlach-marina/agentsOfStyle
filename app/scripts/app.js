// 'use strict';

// /**
//  * @ngdoc overview
//  * @name agentsOfStyleApp
//  * @description
//  * # agentsOfStyleApp
//  *
//  * Main module of the application.
//  */
// angular
//   .module('agentsOfStyleApp', ['ionic']);
// var PhoneGapInit = function () {
//   this.boot = function () {
//     angular.bootstrap(document, ['agentsOfStyleApp']);
//   };

//   if (window.phonegap !== undefined) {
//     document.addEventListener('deviceready', function() {
//       this.boot();
//     });
//   } else {
//     console.log('PhoneGap not found, booting Angular manually');
//     this.boot();
//   }
// };

// angular.element(document).ready(function() {
//   new PhoneGapInit();
// });
angular.module('agentsOfStyleApp', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
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
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'MainCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');
});
