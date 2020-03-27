'use strict';

app.controller('todoCtrl', function($scope, $filter, $window, uiCalendarConfig, todoService) {
  $scope.todoList = [];
  $scope.existingTodoList = todoService.getList();
  $scope.$watch('existingTodoList', function() {
    if ($scope.existingTodoList == null) return;
    $scope.todoList = angular.copy($scope.existingTodoList);
  }, true);

  $scope.todoAdd = function() {
    $scope.todoList.push({
      title: $scope.todoInput,
      done: false,
      backgroundColor: '#ffbf00;',
      start: $scope.dueDateInput,
      editMode: false
    });
    todoService.setList($scope.todoList);

    $scope.todoInput = "";
    $scope.dueDateInput = "";
  };

  $scope.removeItem = function(item) {
    var index = $scope.todoList.indexOf(item);
    $scope.todoList.splice(index, 1);
    todoService.setList($scope.todoList);
  };

  $scope.removeAllSelected = function() {
    var oldList = $scope.todoList;
    $scope.todoList = [];
    angular.forEach(oldList, function(x) {
      if (!x.done) $scope.todoList.push(x);
    });
    todoService.setList($scope.todoList);
  };

  $scope.toggleEditMode = function(item, event) {
    item.editMode = !item.editMode;
    todoService.setList($scope.todoList);
  }

  $scope.updateDoneStatus = function(item) {
    item.backgroundColor = item.done ? '#5cb85c' : '#ffbf00';
    $scope.saveList();
  }

  $scope.saveList = function() {
    todoService.setList($scope.todoList);
  }

  $scope.isOpened = false;

  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.isOpened = true;
  };
});
