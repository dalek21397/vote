'use strict';

angular.module('votePlexApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('admin', {
        url: '/admin',
        views: {
        	'header': {
        		templateUrl: 'components/navbar/navbar.html',
        		controller: 'NavbarCtrl'
        	},
        	'main-content': {
        		templateUrl: 'app/main/main-content.html'
        	},
        	'content': {
        		templateUrl: 'app/admin/admin.html',
        		controller: 'AdminCtrl'
        	},
        	'footer': {
        		templateUrl: 'components/footer/footer.html'
        	}	
        }
    });
});