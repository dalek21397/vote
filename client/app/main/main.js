'use strict';

angular.module('votePlexApp')
  .config(function ($stateProvider) {
    $stateProvider
        .state('main', {
            url: '/',
            views: {
            	'header': {
            		templateUrl: 'components/navbar/navbar.html',
            		controller: 'NavbarCtrl'
            	},
            	'main-content': {
                    templateUrl: 'app/main/main-content.html',
                    controller: 'MainContentCtrl as vm'
                },
                'content': {
                    templateUrl: 'app/main/main.html',
                    controller: 'MainCtrl as vm'
                },
            	'footer': {
            		templateUrl: 'components/footer/footer.html'
            	}	
            }    
        });
});