// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var db = require("../models");
var express = require("express");
var app = express();


// Routes
// =============================================================
module.exports = function(app) {

  // Get all tasks
  app.get("/api/projects", function(req, res) {
    
    // Finding all tasks, and then returning them to the user as JSON.
    // Sequelize queries are aynchronous, which helps with percieved speed.
    // If we want something to be guaranteed to happen after the query, we'll use
    // the .then function
    db.projects.findAll({}).then(function(results) {
      // results are available to us inside the .then
      console.log("did this work?");
      console.log(results);
     
      res.json(results);
    });

  });

  // Add a task
  app.post("/api/projects", function(req, res) {

    console.log("Hey we added a task:");
  
    console.log(req.body);
    

    db.projects.create({
      author: req.body.author,
      task: req.body.task,
      dueDate: req.body.dueDate
    }).then(function(results) {
      console.log(results);
      res.end();
    });

  });

};