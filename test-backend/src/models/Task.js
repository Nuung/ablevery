
'user strict';
// db setting
const mysql_dbc = require('../database/db_con')();

// connect to DB -> and connection Test
const connection = mysql_dbc.init();
mysql_dbc.test_open(connection);

// Task object constructor
const Task = function(task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

//////////////////////////////////////////////////// make Task's methods

Task.createTask = function (newTask, result) {    
    connection.query("INSERT INTO tasks set ?", newTask, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log("inputed Id:" + res.insertId);
            result(null, newTask);
        }
    });
};

Task.getTaskById = function (taskId, result) {
    connection.query("Select task from tasks where id = ?", taskId, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });   
};

Task.getAllTask = function (result) {
    connection.query("Select * from tasks", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('tasks : ', res);  
            result(null, res);
        }
    });   
};

Task.updateById = function(id, task, result){
    connection.query("UPDATE tasks SET task = ? WHERE id = ?", [task.task, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {   
            result(null, res);
        }
    }); 
};

Task.remove = function(id, result){
    connection.query("DELETE FROM tasks WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    }); 
};

module.exports = Task;
