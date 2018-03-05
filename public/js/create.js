// Code here handles what happens when a user submits a new character on the form.
// Effectively it takes the form inputs then sends it to the server to save in the DB.

var completed = false;
var appendNewTask = function (author, task, dueDate, id) {

  //we are adding text and appending our id to the new <tr>
  $("<tr>").text(author).appendTo("#author");
  $("<tr>").text(task).appendTo("#task");
  $("<tr>").text(dueDate).appendTo("#dueDate");


  var button = $("<button>").attr("data-id", id).text("complete")
  $("<tr>").append(button).appendTo("#completeButton");
};

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
    dueDate: $("#inputDueDate").val().trim(),
  };


  // send an AJAX POST-request with jQuery
  $.post("/api/projects", newTask)
    // on success, run this callback
    .then(function(data) {

      appendNewTask(data.author, data.task, data.dueDate, data.id);
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


$("#completeButton").on("click", "button", function (event) {
  var number = $(this).attr('data-id');

//created variables for each column
  var dueDateColumn = $('#dueDate tr:nth-of-type(' + number + ')');
  var taskColumn = $('#task tr:nth-of-type(' + number + ')');
  var authorColumn = $('#author tr:nth-of-type(' + number + ')');
  var completeButtonColumn = $('#completeButton tr:nth-of-type(' + number + ')');

  //make column green when the complete button is clicked
  $(dueDateColumn).css("background-color", "#7FFF00");
  $(taskColumn).css("background-color", "#7FFF00");
  $(authorColumn).css("background-color", "#7FFF00");
  $(completeButtonColumn).text("Completed!");

  // $('#dueDate tr:nth-of-type(' + number + ')').remove()
  // $('#task tr:nth-of-type(' + number + ')').remove()
  // $('#author tr:nth-of-type(' + number + ')').remove()

});

function getTasks() {
  $.get("/api/projects", function (data) {
      projects = data;

      for(var i = 0; i < projects.length; i++) {
        appendNewTask(projects[i].author, projects[i].task, projects[i].dueDate, projects[i].id );
        console.log(projects);
      }
  });
}

getTasks();
