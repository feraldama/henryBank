const server = require('express').Router();
const userController = require('../../controllers/users.controller');
const {User} = require('../../database/db')



server.post('/', (req, res) => {
    const user = req.body
    const pass = req.body.password

    userController.createUser(user)
        .then((value) => {
            res.status(200).json(value)
        })


})

module.exports = server;