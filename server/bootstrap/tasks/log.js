"use strict";

const morgan = require("morgan");

class LogTask {
  constructor () {
    this.name = "LOG";
  }

  run (app) {
    app.use(morgan("tiny"));
  }
}

module.exports = LogTask;
