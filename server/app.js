const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const { join } = require("path");
const routes = require("./routes");
const app = express();

// Loading dotenv file
require("dotenv").config();

// Logger middleware
morgan(":method :url :status :res[content-length] - :response-time ms");

// Mongoose connection string
mongoose.connect("mongodb://127.0.0.1:27017/passport-jwt");
// Mongoose error handler
mongoose.connection.on("error", (error) => console.log(error));
// Mongoose promise configuration
mongoose.Promise = global.Promise;

// Loading auth middleware
require("./auth/auth");

// Loading bodyparser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
console.log(__dirname);
// Serves up react app
app.use(express.static(join(__dirname, "../client/build")));

// Routes configuration
app.use(routes);

//Handle errors
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({ error: err });
});

module.exports = app;
