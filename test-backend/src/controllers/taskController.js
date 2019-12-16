'use strict';

const Task = require('../models/Task');

exports.list_all_tasks = function(req, res) {
    Task.getAllTask(function(err, task) {
        console.log('controller')
        if (err){
            res.send(err);
            console.log('res', task);
        }
        res.send(task);
    });
};

exports.create_a_task = function(req, res) {
    // newTask에 대한 검증이 필요함! -> 예외 상황엔 no insert  / newTask 노출 X -> 정규표현식 or / 모든 곳에 해당
    // -> 내부기능이 있을 수 있다 -> 시큐어 코딩 정보 확인하기!
    let new_task = new Task(req.body);
  
    //handles null error 
    if(!new_task.task) {
        res.status(400).send({ error:true, message: 'Please provide task' });
    }
    else if(!new_task.status) {
        res.status(400).send({ error:true, message: 'Please provide status' });
    }
    else {
        Task.createTask(new_task, function(err, task) {
            if (err)
                res.send(err);

            res.json(task);
        });
    }
};
  
  
exports.read_a_task = function(req, res) {
    Task.getTaskById(req.params.taskId, function(err, task) {
        if (err)
            res.send(err);

        res.json(task);
    });
};
  
  
exports.update_a_task = function(req, res) {
    Task.updateById(req.params.taskId, new Task(req.body), function(err, task) {
        if (err)
           res.send(err);

        res.json(task);
    });
};
  
  
exports.delete_a_task = function(req, res) {
    Task.remove(req.params.taskId, function(err, task) {
        if (err)
            res.send(err);

        res.json({ message: 'Task successfully deleted' });
    });
};