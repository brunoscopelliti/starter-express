"use strict";

const path = require("path");
const express = require("express");
const serveFavicon = require("serve-favicon");

class AssetsTask {
  constructor () {
    this.name = "ASSETS";
  }

  run (app) {
    const dist = path.resolve(process.cwd(), "assets");
    app.use(serveFavicon(path.resolve(dist, "images", "favicon.ico")));
    app.use(express.static(path.resolve(dist, "images")));
    app.use(express.static(path.resolve(dist, "client")));
  }
}

module.exports = AssetsTask;
