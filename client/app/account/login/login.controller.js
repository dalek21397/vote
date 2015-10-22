'use strict';

angular.module('votePlexApp')
  .controller('LoginCtrl', function ($scope, Auth, $location, $state) {
    $scope.user = {};
    $scope.errors = {};

    $scope.login = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.login({
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then( function() {
          // Logged in, redirect to home
          
          $state.go("main", {name: "sureshtanneru"});
        })
        .catch( function(err) {
          $scope.errors.other = err.message;
        });
      }
    };

  });
