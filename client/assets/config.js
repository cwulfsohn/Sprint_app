var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: "partials/tasks.html",
    controller: "taskController"
  })
  .when('/new', {
    templateUrl: "partials/new.html",
    controller: "createController"
  })
  .otherwise({
    redirectTo: '/'
  })
})
