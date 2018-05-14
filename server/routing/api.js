const express = require("express");

const setupRouter =
  () => {
    const router = express.Router();

    router.get("/api/sample",
      async (req, res, next) => {
        try {
          res.json({ message: "foobar!" });
        } catch (error) {
          next(error);
        }
      });

    return router;
  };

module.exports = setupRouter;
