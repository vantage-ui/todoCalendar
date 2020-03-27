'use strict';

app.directive('calendarShow', function() {
  return {
    restrict: 'A',
    scope: {
      todoList: '=todoList'
    },
    link: function(scope, oElement, attrs) {

      // initialize calendar config
      scope.init = function() {
        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();

        var calendar = $('#calendar').fullCalendar({
          header: {
            left: 'prev,next',
            center: 'title',
            right: 'month,agendaDay'
          },
          dayClick: function(date, jsEvent, view) {
              scope.setSelectedDate = date.format("YYYY-MM-DD");
              scope.$apply();
            },
          events: scope.todoList
        });
      }();

      scope.upateCalendar = function() {
        $('#calendar').fullCalendar('removeEvents');
        $('#calendar').fullCalendar('addEventSource', scope.todoList);
      };

      // listen to changes in todo list and render the changes on calendar
      scope.$watch('todoList', function() {
        if (scope.todoList === undefined) return;
        scope.upateCalendar();
      }, true);
    }
  }
});
