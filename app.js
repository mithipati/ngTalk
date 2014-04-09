var todoApp = angular.module("todoApp", []);

todoApp.controller("TodoController", function($scope) {

  $scope.items = [
    { detail: "Eat", done: false },
    { detail: "Sleep", done: false },
    { detail: "Code", done: false },
    { detail: "Take out the trash", done: false },
    { detail: "Do Laundry", done: false },
    { detail: "Beat Flappy Bird", done: false },
    { detail: "Study lambda calculus", done: false },
    { detail: "Forget lambda calculus", done: false },
    { detail: "Build some apps", done: false },
    { detail: "Buy a latte", done: false },
    { detail: "Buy another latte", done: false },
    { detail: "Save money", done: false },
    { detail: "Blog", done: false },
    { detail: "Play some table tennis", done: false },
    { detail: "Gym", done: false },
    { detail: "Watch screen casts", done: false },
    { detail: "Read API documentation", done: false },
    { detail: "Tweet", done: false },
    { detail: "Hack all day", done: false },
    { detail: "Netflix it up", done: false },
    { detail: "Angularize my HTML", done: false },
    { detail: "Solve everything recursively", done: false },
    { detail: "Repeat", done: false },
  ];

  $scope.addItem = function () {
    $scope.items.push({ detail: $scope.newItem, done: false });
    $scope.newItem = "";
  };


});
