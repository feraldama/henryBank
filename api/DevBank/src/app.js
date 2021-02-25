const express = require("express");
const morgan = require("morgan");
const routes = require("./routes/index");
const bodyParser = require("body-parser");
const passport = require("passport");
const bcrypt = require("bcrypt");
const LocalStrategy = require("passport-local").Strategy;

const server = express();
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:19006");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  next();
});

const { Users } = require("./database/db");
server.name = "API";

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(morgan("dev"));
server.use("/", routes);

passport.use(
  new LocalStrategy(function (username, password, done) {
    Users.findOne({
      where: {
        email: username,
      },
    })
      .then((res) => {
        if (bcrypt.compareSync(password, res.dataValues.clave)) {
          return done(null, res.dataValues);
        } else {
          return done(null, false);
        }
      })
      .catch((err) => {
        return done(err);
      });
  })
);

module.exports = server;
