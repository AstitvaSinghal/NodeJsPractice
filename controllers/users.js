const validate = require("../models").validate;
const database = require("../database");

const addUser = (body) => {
  return validate(body, "users")
    .then((result) => {
      console.log("result", result);
      return database.insert(
        result,
        database.getDatabase().collection("users")
      );
    })
    .catch((e) => {
      throw e.message;
    });
};

module.exports = { addUser };
