'use strict';

angular.module('votePlexApp')
  .controller('MainContentCtrl', MainContentCtrl);

  MainContentCtrl.$inject = ['$scope', '$state', 'Auth'];

  function MainContentCtrl($scope, $state, Auth) {
    var vm = this;
    vm.showBtn = false;
    vm.isLoggedIn = Auth.isLoggedIn();

    if($state.current.name === 'main'){
       vm.showBtn = true;   
    }

    vm.showSignUp = showSignUp;

    function showSignUp() {
      $state.go('signup');
    };


    
  }
