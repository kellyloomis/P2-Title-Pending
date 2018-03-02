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
  

      $("#author").append(newTask.author);
      $("#task").append(newTask.task);
      $("#dueDate").append(newTask.dueDate);

      $("div").append($("<div>newTask</div>"));


      // for (var i = 0; i < newTask.length; i++) {

      //   var divRow = $("<div>");

        

      //   $("#projectTasks").append(newTask.author);
      //   $("#projectTasks").append(newTask.task);
      //   $("#projectTasks").append(newTask.dueDate);

      // }


  // // var paragraph = $("<p>");
  // var divRow = $("<div>");
  // var div = $(".container-fluid");
  // $(divRow).append(newTask.author);
  // $(divRow).append(newTask.task);
  // $(divRow).append(newTask.dueDate);
  // $(div).append(div);


// function addNewRow() {
//   var newElem = document.createElement ("div");


//   var author = document.getElementById ("author");
//   container.appendChild (newElem);
//   var task = document.getElementById ("task");
//   container.appendChild (newElem);
//   var dueDate = document.getElementById ("dueDate");
//   container.appendChild (newElem);
//     // document.getElementById("author").appendChild(newTask.author);
//     // document.getElementById("task").appendChild(newTask.task);
//     // document.getElementById("dueDate").appendChild(newTask.dueDate);

// }

// addNewRow();

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