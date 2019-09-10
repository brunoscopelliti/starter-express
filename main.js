"use strict";

const http = require("http");

const chalk = require("chalk");
const express = require("express");

const app = module.exports = express();
const server = http.Server(app);

require("./server/bootstrap")(app);

server.listen(app.get("config").PORT,
  () => {
    console.log(chalk.bold.green("Server is listening on port %d"), server.address().port);
  });
