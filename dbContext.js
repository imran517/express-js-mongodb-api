const { MongoClient } = require("mongodb");
const config = require('./config');

const connectionString = `mongodb://${config.db.host}:${config.db.port}`;
const mongoClient = new MongoClient(connectionString);

module.exports = {
    connect: function (callback) {
        mongoClient.connect(function (err, client) {
        
        if (err || !client) {
          console.log(err);
          return callback(null);
        }
  
        let db = client.db("taskdb");
        console.log("Successfully connected to MongoDB.");
  
        return callback(db);
      });
    }
  };