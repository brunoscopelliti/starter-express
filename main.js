"use strict";

const http = require("http");

const chalk = require("chalk");
const express = require("express");

require("dotenv").config({ path: "./.env.sample" });

const app = module.exports = express();
const server = http.Server(app);

require("./server/bootstrap")(app);

server.listen(process.env.PORT,
  () => {
    console.log(chalk.bold.green("Server is listening on port %d"), server.address().port);
  });
