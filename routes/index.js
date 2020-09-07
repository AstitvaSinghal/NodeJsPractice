var express = require("express");
var router = express.Router();
var server = require("../database");
/* GET home page. */
router.get("/", function (req, res, next) {
  server
    .read()
    .then((data) => {
      res.send(data);
    })
    .catch((e) => {
      res.status = 404;
      res.send(e);
    });
  //res.render('index', { title: 'Express' });
});

router.post("/", (req, res, next) => {
  console.log("inserting data", req.body);
  server
    .insert(req.body)
    .then(() => {
      res.send("Successful");
    })
    .catch((e) => {
      res.status = 404;
      res.send(e);
    });
});

module.exports = router;
