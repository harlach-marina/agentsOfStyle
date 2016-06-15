'use strict';

/**
 * @ngdoc function
 * @name agentsOfStyleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the agentsOfStyleApp
 */
// angular.module('agentsOfStyleApp')
//   .controller('MainCtrl', function ($scope, $rootScope) {

//     var onSuccess = function(position) {
//       $rootScope.$apply(function() {
//         $scope.position = position;
//       });
//     };
//     var onError = function(error) {
//       alert('ERROR! code: ' + error.code + ' ' + 'message: ' + error.message);
//     };
//     navigator.geolocation.getCurrentPosition(onSuccess, onError, {timeout: 10000, enableHighAccuracy: true});
//   });
angular.module('agentsOfStyleApp')
  .controller('MainCtrl', function ($scope, $rootScope, $ionicModal, $timeout) {
$scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
