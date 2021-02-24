const server = require('express').Router();
const userController = require('../../controllers/users.controller');


server.post('/', (req, res) => {
    const{name,lastName,docType,docNumber,birthday,phone,email,password} = req.body

    const user = {
        name: name,
        lastName: lastName,
        docType: docType,
        docNumber: docNumber,
        birthday: birthday,
        phone: phone,
        email: email,
        password: password
    }

    userController.create(user)
        .then((user) => {
            if(user === {msg: 'user already exist'}){
                res.status(400).json({msg: 'user already exist'})
            }
            res.status(200).json({msg: 'User created successfuly', userId: user.id})
        })
        .catch((err) => {
            res.json(err)
        })
})

module.exports = server;