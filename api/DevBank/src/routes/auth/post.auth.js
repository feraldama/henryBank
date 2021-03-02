const server = require("express").Router();
const userController = require("../../controllers/auth.controller");
const { Users } = require("../../database/db");
const passport = require("passport");
const bcrypt = require("bcrypt");

server.post("/login", passport.authenticate("local"), (req, res) => {
  console.log("BODY: ", req.user);
  res.send(req.user);
});

server.post("/logout", (req, res) => {
  req.logout();
  res.sendStatus(200);
});

server.get("/me", (req, res) => {
  if (req.isAuthenticated()) return res.send(req.user);
  else return res.status(401).send("No estás logeado");
});

module.exports = server;
