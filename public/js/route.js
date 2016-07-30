angular.module('app')
.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('login', {
        url: "/",
        templateUrl: "views/login.html",
      })
      .state('localLogin', {
        url: "/local",
        templateUrl: "views/localLogin.html",
      })
      .state('signup', {
        url: "/signup",
        templateUrl: "views/signup.html",
      })
      .state('home', {
        url: "/home",
        templateUrl: "views/home.html",
        controller: "mainController"
      })
      .state('events', {
        url: "/events",
        templateUrl: "views/events.html"
      })
      .state('utilities', {
        url: "/utilities",
        templateUrl: "views/utilities.html"
      })
      .state('services', {
        url: "/services",
        templateUrl: "views/services.html"
      })
      .state('issues', {
        url: "/issues",
        templateUrl: "views/issues.html",
      })
      .state('announcements', {
        url: "/announcements",
        templateUrl: "views/announcements.html",
      })
      .state('voting', {
        url: "/voting",
        templateUrl: "views/voting.html",
      })
      .state('logout', {
        url: "/",
        templateUrl: "views/login.html",
      })

      $urlRouterProvider.otherwise("/");

});
