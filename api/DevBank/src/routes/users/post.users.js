const server = require('express').Router();
const userController = require('../../controllers/users.controller');
const nodemailerController = require('../../controllers/nodemailer.controller');
const nodemailer = require('nodemailer');
var bcrypt = require("bcryptjs");



server.post('/', (req, res) => {
    var user = req.body
    var password = req.body.password

    var salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(password, salt);

    user.password = req.body.password

    userController.createUser(user)
        .then((value) => {
            if (!value) {
                return res.status(400).json({ msg: 'User already exist' })
            }

            const data = {
                from: 'devbank2021@gmail',
                to: `${value.email}`,
                subject: "it works",
                text: "yeah"
            }
            
            return nodemailerController.sendEmail(data)
        })  
        .then(() => {
            res.status(200).json({msg: 'Check your email'})
        })
        .catch((err) => {
            res.status(400).json(err)
        })
})

server.post('/:userId', (req, res) => {
    
})



module.exports = server;