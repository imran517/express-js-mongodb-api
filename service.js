const model = require('./model');
const dbContext = require('./dbContext');

class Service {
    constructor () { }

    getTasks (callback) {        
        dbContext.connect(function(db) {
            db.collection("tasks").find({})
            .toArray(function (err, result) {
                if (err) {
                    callback({ message: `Error fetching tasks!`});
               } else {
                   console.log(result);
                   callback(result);
                }
              });    
        });                 
    }

    getTask (id, callback) {
        dbContext.connect(function(db) {
            db.collection("tasks").findOne({id: id}, function (err, result) {
                if (err) {
                    callback({ message: `Error fetching a task!`});
               } else {
                   console.log(result);
                   callback(result);
                }
              }); 
        }); 
    }

    addTask (task, callback) {
        dbContext.connect(function(db) {
            db.collection("tasks").insertOne(task, function (err, result) {
                if (err) {
                    callback( { message: `Error adding a task!`});
               } else {
                   let msg = { message: "Success adding a task!" }
                   console.log(msg);
                   callback(msg);
                }
              });    
        }); 
    }

    updateTask (task, callback) {
        dbContext.connect(function(db) {
            db.collection("tasks").updateOne({id: task.id }, { $set: task}, function (err, result) {
                if (err) {
                    callback( { message: `Error updating a task!`});
               } else {
                   let msg = { message: "Success updating a task!" }
                   console.log(msg);
                   callback(msg);
                }
              });    
        }); 
    }
    
    deleteTask (task, callback) {
        dbContext.connect(function(db) {
            db.collection("tasks").deleteOne(task, function (err, result) {
                if (err) {
                    callback( { message: `Error deleting a task!`});
               } else {
                   let msg = { message: "Success deleting a task!" }
                   console.log(msg);
                   callback(msg);
                }
              });    
        }); 
    }
}

module.exports = Service;
