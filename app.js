var todoApp = angular.module("todoApp", []);

todoApp.controller("TodoController", function($scope) {

  $scope.items = [
    { detail: "Eat", done: false },
    { detail: "Sleep", done: false },
    { detail: "Code", done: false },
    { detail: "Repeat", done: false }
  ];

  $scope.addItem = function () {
    $scope.items.push({ detail: $scope.newItem, done: false });
    $scope.newItem = "";
  };


});
