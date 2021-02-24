const server = require('express').Router();
const userController = require('../../controllers/users.controller');

server.get('/' , ( req, res) => {

    userController.getUsers()
        .then((users) => {
            res.status(200).json(users)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
})

module.exports = server;