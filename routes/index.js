var express = require("express");
var router = express.Router();
var server = require("../database");
const database = require("../database");
const middleware = require("../middleware");
router
  .route("/")
  .all((req, res, next) => {
    res.status = true;
    res.statusCode = 200;
    next();
  })
  .get((req, res, next) => {
    console.log(req.query);
    server
      .read(req.query)
      .then((data) => {
        res.send(data);
        next();
      })
      .catch((e) => {
        res.status = 404;
        res.send(e);
        next();
      });
  })
  .post(middleware.checkEntryExists, (req, res, next) => {
    console.log("inserting data", req.body);
    server
      .insert(req.body)
      .then((doc) => {
        res.send(doc);
        next();
      })
      .catch((e) => {
        res.status = 404;
        res.send(e);
        next();
      });
  })
  .put((req, res, next) => {
    res.status = false;
    res.statusCode = 404;
    res.send("Operation not allowed");
  })
  .delete((req, res, next) => {
    res.status = false;
    res.statusCode = 404;
    res.send("Operation not allowed");
  });

router
  .route("/:id")
  .all((req, res, next) => {
    res.status = true;
    res.statusCode = 200;
    next();
  })
  .get((req, res, next) => {
    console.log("fetching ", req.params);
    server
      .read({ _id: req.params.id })
      .then((doc) => {
        res.send(doc);
        next();
      })
      .catch((e) => {
        res.status = false;
        res.statusCode = 404;
        res.send(e);
        next();
      });
  })
  .post((req, res, next) => {
    res.status = false;
    res.statusCode = 404;
    res.send("Operation not allowed");
    next();
  })
  .put((req, res, next) => {
    server
      .update(req.params.id, req.body)
      .then((doc) => {
        res.send(doc);
        next();
      })
      .catch((e) => {
        res.status = false;
        res.statusCode = 404;
        res.send(e);
        next();
      });
  })
  .delete((req, res, next) => {
    server
      .delete(req.params.id)
      .then((doc) => {
        res.send(doc);
        next();
      })
      .catch((e) => {
        res.status = false;
        res.statusCode = 404;
        res.send(e);
        next();
      });
  });
module.exports = router;
