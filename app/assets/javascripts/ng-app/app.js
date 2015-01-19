angular
  .module('myApp', [
    'ngAnimate',
    'ngSanitize',
    'ui.router',
    'ct.ui.router.extras',
    'templates'
  ])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 
    function ($stateProvider, $urlRouterProvider, $locationProvider) {
      /**
       * Routes and States
       */
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'home.html',
          controller: 'HomeCtrl'
        })
        .state('employerOptions', {
          url: '/employer_options',
          templateUrl: 'employer_options.html',
          controller: 'HomeCtrl'
        })
        .state('employerDashboard', {
          url: '/employer_dashboard',
          templateUrl: 'employer_dashboard.html',
          controller: 'HomeCtrl'
        })
        .state('prospectOptions', {
          url: '/prospect_options',
          templateUrl: 'prospect_options.html',
          controller: 'HomeCtrl'
        })
        .state('prospectQuestions', {
          url: '/prospect_questions',
          templateUrl: 'prospect_questions.html',
          controller: 'QuestionaireCtrl'
        })
        .state('donations', {
          url: '/donations',
          templateUrl: 'donations.html'
        })
        .state('team', {
          url: '/team',
          templateUrl: 'team.html'
        });

      // default fall back route
      $urlRouterProvider.otherwise('/');

      // enable HTML5 Mode for SEO
      $locationProvider.html5Mode(true);
  }]);
