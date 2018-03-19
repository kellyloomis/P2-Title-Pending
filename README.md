# P2-Title-Pending

Our app provides an opportunity for children and their parents (instructors, tutors, teachers, etc.) to effectively collaborate to complete a goal and/or project.  Using this app will teach children the ability to drill-down a project task by task to reach their desired outcome. It also allows parents to participate and monitor their child's progress as well as bond on an academic level.  Learning this imperative tool will not only assist the child reach their current goal but will help them with goal-setting and project management for the duration of their personal, educational and professional lives.  Goal Setting and Project Management are essential for being successful throughout life.   

#Getting Started

1. Review the following sub-folders in the main project folder.
	a. config
		i. create connection.js - this file will contain code to initiate the connection to MYSQL
	b. models
		i. projects.js - this file will create a variable for the model (ie table) data
	c. public
		i. css (subfolder)
			1. style.css - this file will hold any css styling required for the html files
		ii. html (subfolder)
			1. homepage.index - this file will create the homepage that will contain the overview/purpose of the app
			2. index.html - this file will allow the user to create an individual project
			3. specific.html - this file will allow the user(s) to create the detailed tasks of the project
		iii. images (subfolder that holds all applicable images)
		iv. js (subfolder)
			1. create.js - this file appends a new task to the task list in specific.html and creates a button to allow the user to "complete" a specific task
	d. routes
		i. api-routes.js - contains functions to "get" and "post" data from js/html to the database
		ii. html-routes - contains functions to "get" to the homepage when server.js is called in the command line

#Prerequisites

Run the following dependencies in your Git command line:

1. run npm install
2. run npm init
3. run npm install express
4. run npm install sequelize
5. run npm install mysql2
6. run npm install path
7. run npm install body-parser

#Deployment

1. login to MYSQL database and run the schema connected to the project
2. enter node server.js in the Git command line; should return a "listening on port [port specified in the server.js file]"
3. open specific.html in a web browser via the local host and complete the fields to append the project tasks to the task table to ensure no errors
4. launch app in Heroku which will work in conjunction with MYSQL to sync/store entered data into the MYSQL database

#Built With

1. MYSQL
2. W3 Schools Templates
3. Moment.js
4. JS, jQuery, HTML, CSS

#Authors

Andrew Kippur
David Rodriguez
Kelly Loomis