angular.module('app', ['ui.router', 'ngMaterial'])

.config(function($stateProvider, $urlRouterProvider, $mdThemingProvider) {

  // State Config
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html'
    })
    .state('portfolio', {
      url: '/portfolio',
      templateUrl: 'templates/portfolio.html'
    })
    .state('cv', {
      url: '/cv',
      templateUrl: 'templates/cv.html'
    })

    // Theme config
    $mdThemingProvider.theme('default')
      .primaryPalette('pink')
      .accentPalette('orange')
})
