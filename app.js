var todoApp = angular.module("todoApp", []);

todoApp.controller("TodoController", function($scope) {

  $scope.items = [
    { detail: "Eat", done: false },
    { detail: "Sleep", done: false }
  ];

  $scope.newItem = "";

  $scope.addItem = function () {
    // Implement method
    // Remember, when changing models that will appear in the view, use $scope
  };



  // BONUS (read below)

  // Simple boolean expression
  $scope.present = true;

  // Notice that I still had to append $scope to 'present' when re-assiging its value.
  // This is because it will effect elements on the DOM.
  // The $scope is our connection to the view from here.
  $scope.removeAll = function () {
    $scope.present = false;
  };

});
