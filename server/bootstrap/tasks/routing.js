"use strict";

const setupApiRouter = require("server/routing/api");

class RoutingTask {
  constructor () {
    this.name = "ROUTING";
  }

  run (app) {
    const {
      PORT,
      TITLE,
    } = process.env;

    app.get("/", (req, res, next) =>
      res.render("index", { layout: "layout", title: TITLE, port: PORT }));

    setupApiRouter(app);
  }
}

module.exports = RoutingTask;
