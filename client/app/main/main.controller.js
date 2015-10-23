'use strict';

angular.module('votePlexApp')
  .controller('MainCtrl', function ($scope, $http, Auth, $state) {
    var vm = this;
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    vm.isLoggedIn = Auth.isLoggedIn();
    
    if($state.current.name === "mypoll") {
      vm.showPolls = true;
    }
  });
