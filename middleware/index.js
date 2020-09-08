const database = require("../database");
const middleware = {};
middleware.checkEntryExists = (req, res, next) => {
  database.read({ name: req.body.name }).then((result) => {
    console.log(result);
    if (result.length > 0) {
      res.send("User already exists");
    } else {
      next();
    }
  });
};

module.exports = middleware;
