const server = require('express').Router();
const userController = require('../../controllers/users.controller');
const {User} = require('../../database/db')
var bcrypt = require("bcryptjs");



server.post('/', (req, res) => {
    var user = req.body
    var password = req.body.password

    var salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(password, salt);

    user.password = req.body.password

    userController.createUser(user)
        .then((value) => {
            res.status(200).json(value)
        })


})

module.exports = server;