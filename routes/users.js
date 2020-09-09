const express = require("express");
const router = express.Router();

const middleware = require("../middleware");
const userController = require("../controllers/users");
router.route("/").post(middleware.checkEntryExists, (req, res, next) => {
  userController
    .addUser(req.body)
    .then((doc) => {
      console.log("doc", doc);
      res.send({ status: true, data: doc });
    })
    .catch((e) => {
      console.log("error", e);
      res.send({ status: false, message: e });
    });
});

module.exports = router;
