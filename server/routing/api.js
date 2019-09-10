"use strict";

const express = require("express");

const setupRouter =
  (app) => {
    const router = express.Router();

    router.get("/api/sample",
      async (req, res, next) => {
        try {
          res.json({ message: "foobar!" });
        } catch (error) {
          next(error);
        }
      });

    app.use(router);
  };

module.exports = setupRouter;
