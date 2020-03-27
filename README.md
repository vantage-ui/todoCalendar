# To-Do Calendar app — AngularJS 
This is an Angular JS app written using Angular 1.7, it uses fullcalendar.js for the calendar view and angular-ui-calendar for date picker component.

This app allows the user to 

1.      Create/edit/delete to-do notes that include a due date

2.      View notes with their due date on a calendar view

3.      Persist notes to a browser local storage

4.      Allow searching for notes


## Getting Started
To get started download fullCalendar.zip folder and extract the contents.

1. Make sure you have node installed on your machine, to check this open terminal and type

```
node -v

```
This will display your nodejs version. If you do not have node installed you can download and install it from here https://nodejs.org/en/download/


2. open cmd prompt and perform following steps..

```
cd <path_to_todoCalendar_folder>

npm install 

npm start

Now browse to the app at  http://localhost:8000

```

This is a simple to do app with a controller, directive and service.

The controller controls the flow of data in the application, the attribute directive configures and manages custom calendar view widget, the service persists/reads data to/from the browser local storage, controller calls the service when it has to interact with the storage.

The app uses calendar api libraries to show datepicker and calendar view, it uses browser local storage to save the list on client side - in browser memory, the lcal storgae makes the existing list available on page refresh and across browser sessions.


## TODOs and Potential enhancements

Enable filtering by due date in the todo list view
Add a completed section to list all completed tasks
Toggle calendar view to day view when task list is filterd by date
Enhance the styling
Connect to a Rest API which stores/retrieves the list data on server
Show appropriate messages when user tries to enter a duplicte task