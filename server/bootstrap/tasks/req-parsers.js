const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

class RequestParserTask {
  constructor () {
    this.name = "REQPARSERS";
  }

  run (app) {
    app.use(cookieParser());

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
  }
}

module.exports = RequestParserTask;
