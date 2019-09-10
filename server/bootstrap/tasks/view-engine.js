"use strict";

require("hbs");

class ViewEngineTask {
  constructor () {
    this.name = "VIEWENGINE";
  }

  run (app) {
    app.set("view engine", "hbs");
    app.set("views", "./views");
  }
}

module.exports = ViewEngineTask;
