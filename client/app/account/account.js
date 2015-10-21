'use strict';

angular.module('votePlexApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
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
            templateUrl: 'app/account/login/login.html',
            controller: 'LoginCtrl'
          },
          'footer': {
            templateUrl: 'components/footer/footer.html'
          } 
        }
      })
      .state('signup', {
        url: '/signup',
        views: {
          'header': {
            templateUrl: 'components/navbar/navbar.html',
            controller: 'NavbarCtrl'
          },
          'main-content': {
            templateUrl: 'app/main/main-content.html'
          },
          'content': {
            templateUrl: 'app/account/signup/signup.html',
            controller: 'SignupCtrl'
          },
          'footer': {
            templateUrl: 'components/footer/footer.html'
          } 
        } 
      })
      .state('settings', {
        url: '/settings',
        views: {
          'header': {
            templateUrl: 'components/navbar/navbar.html',
            controller: 'NavbarCtrl'
          },
          'main-content': {
            templateUrl: 'app/main/main-content.html'
          },
          'content': {
           templateUrl: 'app/account/settings/settings.html',
            controller: 'SettingsCtrl',
          },
          'footer': {
            templateUrl: 'components/footer/footer.html'
          } 
        },
        authenticate: true
      });
  });