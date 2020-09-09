const validate = require("../models").validate;
const database = require("../database");

const addReview = (body) => {
  return validate(body, "reviews")
    .then((result) => {
      console.log("result", result);
      return database.insert(
        result,
        database.getDatabase().collection("comments")
      );
    })
    .catch((e) => {
      throw new Error(e.message);
    });
};

module.exports = { addReview };
