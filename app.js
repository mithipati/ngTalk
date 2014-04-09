var todoApp = angular.module("todoApp", []);

todoApp.controller("TodoController", function($scope) {

  $scope.query = "";

  $scope.items = [
    { detail: "Eat", done: false },
    { detail: "Sleep", done: false }
  ];


});
