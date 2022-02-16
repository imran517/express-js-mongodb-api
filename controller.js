
const Service = require('./service');

function getTasks (req, res) {
    let tasks = new Service().getTasks((result) => {
        res.json(result);
    });
}

function getTask (req, res) {
    let task = new Service().getTask(req.params.id, (result) => {
        res.json(result);
    });
}

function addTask(req, res) {
    let result = new Service().addTask(req.body, result => {
        res.json(result);
    });
}

function updateTask(req, res) {
    let result = new Service().updateTask(req.body, result => {
        res.json(result);
    });
}

function deleteTask(req, res) {
    let result = new Service().deleteTask(req.body, result => {
        res.json(result);
    });
}

module.exports =  { getTasks, getTask, addTask, updateTask, deleteTask }