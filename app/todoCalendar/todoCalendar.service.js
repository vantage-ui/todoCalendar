'use strict';

app.service('todoService', function($window) {

  // parse the todolist object stored in local storage into JS objects array
  this.getList = function() {
    return JSON.parse($window.localStorage.getItem('todoList'));
  }

  // save to do list items as string literals in local storage
  this.setList = function(todoList) {
    $window.localStorage.setItem("todoList", JSON.stringify(todoList));
  }
});
