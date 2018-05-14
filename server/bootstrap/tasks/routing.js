const setupApiRouter = require("server/routing/api");

class RoutingTask {
  constructor () {
    this.name = "ROUTING";
  }

  run (app) {
    const config = app.get("config");
    app.get("/", (req, res, next) =>
      res.render("index", { layout: "layout", title: config.TITLE, port: config.PORT }));

    setupApiRouter();
  }
}

module.exports = RoutingTask;
