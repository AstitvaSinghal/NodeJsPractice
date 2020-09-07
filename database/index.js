const { ObjectID } = require("mongodb");

var MongoClient = require("mongodb").MongoClient;
const server = {};
var database;
var collection;
server.connectToDatabaseServer = () => {
  MongoClient.connect(
    "mongodb+srv://BlumpTech:BlumpTech@cluster0.dbdi7.mongodb.net?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true },
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

server.read = (filter) => {
  if (filter._id) filter._id = ObjectID(filter._id);

  return collection.find(filter).toArray();
};

server.update = (_id, data) => {
  return collection.findOneAndUpdate({ _id: ObjectID(_id) }, { $set: data });
};

server.delete = (_id) => {
  return collection.deleteOne({ _id: ObjectID(_id) });
};

server.database = database;
server.collection = collection;
module.exports = server;
