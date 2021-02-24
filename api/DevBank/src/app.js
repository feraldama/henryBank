const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/index');
const bodyParser = require("body-parser");

const server = express();

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(morgan('dev'))
server.use('/', routes);



module.exports = server;