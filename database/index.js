var MongoClient = require("mongodb").MongoClient;
const server = {};
var database;
var collection;
server.connectToDatabaseServer = () => {
  MongoClient.connect(
    "mongodb+srv://BlumpTech:BlumpTech@cluster0.dbdi7.mongodb.net?retryWrites=true&w=majority",
    (err, client) => {
      if (err) console.log("error", err);
      else {
        console.log("connected");
        database = client.db("sample_mflix");
        collection = database.collection("comments");
      }
    }
  );
};

server.insert = (data) => {
  return collection.insertOne(data);
};

server.read = () => {
  return new Promise((res, rej) => {
    collection.find({}).toArray((err, docs) => {
      if (err) {
        console.log("error", err);
        rej(err);
      }
      console.log(docs);
      res(docs);
    });
  });
};

server.database = database;
server.collection = collection;
module.exports = server;
