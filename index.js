const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const database = require("./database");
const app = Express();

const MainRouter = require("./routes/index");
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
app.listen(3000, () => {
  database.connectToDatabaseServer();
});

app.use("/", MainRouter);
