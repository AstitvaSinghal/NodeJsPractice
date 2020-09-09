var express = require("express");
var router = express.Router();
var database = require("../database");
const middleware = require("../middleware");
const validate = require("../models").validate;

const userRouter = require("./users");
const reviewRouter = require("./reviews");
router.use("/user", userRouter);
router.use("/review", reviewRouter);
router.route("/").all((req, res, next) => {
  res.send({ status: false, message: "Operation not allowed" });
});

module.exports = router;
