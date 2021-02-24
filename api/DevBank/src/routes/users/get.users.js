const server = require('express').Router();
const userController = require('../../controllers/users.controller');

server.get('/' , ( req, res) => {

    res.json({msg: 'done'})

})

module.exports = server;