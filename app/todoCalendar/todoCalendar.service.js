'use strict';

app.service('todoService', function($window) {

  this.getList = function() {
    return JSON.parse($window.localStorage.getItem('todoList'));
  }

  this.setList = function(todoList) {
    $window.localStorage.setItem("todoList", JSON.stringify(todoList));
  }
});
