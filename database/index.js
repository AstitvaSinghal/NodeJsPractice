const { MongoClient, ObjectID } = require("mongodb");
const server = {};
var database;
var collection;
var client;
server.connectToDatabaseServer = () => {
  MongoClient.connect(
    "mongodb+srv://BlumpTech:BlumpTech@cluster0.dbdi7.mongodb.net?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, client_local) => {
      if (err) console.log("error", err);
      else {
        console.log("connected");
        client = client_local;
        database = client_local.db("sample_mflix");
        collection = database.collection("users");
      }
    }
  );
};

server.getDatabase = () => {
  return database;
};
server.getClient = () => {
  return client;
};
server.getCollection = () => {
  return collection;
};

server.switchDatabase = (database_name) => {
  database = client.db(database_name);
};
server.switchCollection = (collection_name) => {
  collection = database.collection(collection_name);
};

server.insert = (data, coll) => {
  if (coll) return coll.insertOne(data);
  return collection.insertOne(data);
};

server.read = (filter, coll) => {
  if (filter._id) filter._id = ObjectID(filter._id);

  //if (coll) return coll.find(filter).toArray();
  return collection.find(filter).toArray();
};

server.update = (_id, data) => {
  return collection.findOneAndUpdate({ _id: ObjectID(_id) }, { $set: data });
};

server.delete = (_id) => {
  return collection.deleteOne({ _id: ObjectID(_id) });
};

//server.database = database;
//server.collection = collection;
module.exports = { ...server };
