const express = require("express");
const router = express.Router();

const middleware = require("../middleware");
const reviewsController = require("../controllers/reviews");
router.route("/").post((req, res, next) => {
  reviewsController
    .addReview(req.body)
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
