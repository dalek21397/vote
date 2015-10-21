'use strict';

angular.module('votePlexApp')
  .controller('MainContentCtrl', MainContentCtrl);

  MainContentCtrl.$inject = ['$scope', '$state'];

  function MainContentCtrl($scope, $state) {
    var vm = this;
    vm.showBtn = false;

    if($state.current.name === 'main'){
       vm.showBtn = true;   
    }

    vm.showSignUp = showSignUp;

    function showSignUp() {
      $state.go('signup');
    }
    
  }
