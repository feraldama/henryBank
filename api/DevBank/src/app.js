const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/index')
const bodyParser = require("body-parser");
const passport = require("passport");
const bcrypt = require("bcrypt");
const LocalStrategy = require("passport-local").Strategy

const server = express();

const {Users} = require("./database/db");
server.name = 'API';

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(morgan('dev'))
server.use('/', routes);

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