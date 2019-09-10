"use strict";

const errorhandler = require("errorhandler");

class ErrorHandlerTask {
  constructor () {
    this.name = "ERRORHANDLER";
  }

  async run (app) {
    if (process.env.NODE_ENV !== "production") {
      app.use(errorhandler());
    } else {
      // @TODO: provide a decent implementation.
      app.use((err, req, res, next) => {
        res.status(500).send(err);
      });
    }
  }
}

module.exports = ErrorHandlerTask;
