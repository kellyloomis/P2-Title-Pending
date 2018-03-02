// Code here handles what happens when a user submits a new character on the form.
// Effectively it takes the form inputs then sends it to the server to save in the DB.

// when user clicks add-btn
$("#add-btn").on("click", function(event) {
  event.preventDefault();
 
  // make a newTask obj
  var newTask = {
    // name from name input
    author: $("#inputAuthor").val().trim(),
    // role from role input
    task: $("#inputTask").val().trim(),
    // due date of task
    dueDate: $("#inputDueDate").val().trim()
  };

//function for adding the new task to the document body
  var appendNewTask = function () {

      $("#author").append("<tr>",newTask.author);
      $("#task").append("<tr>",newTask.task);
      $("#dueDate").append("<tr>",newTask.dueDate);

  };

  appendNewTask();


  // send an AJAX POST-request with jQuery
  $.post("/api/new", newTask)
    // on success, run this callback
    .then(function(data) {
      // log the data we found
      console.log(data);
    
      // tell the user we're adding a character with an alert window
      alert("Adding task...");
    });

  // empty each input box by replacing the value with an empty string
  $("#inputAuthor").val("");
  $("#inputTask").val("");
  $("#inputDueDate").val("");
});