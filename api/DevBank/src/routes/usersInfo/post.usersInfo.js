const server = require('express').Router();
const{User, UserInfo} = require('../../database/db')


server.post('/:userId',(req, res) => {
    const info = req.body
    const {userId} = req.params
    let user

    User.findOne({
        where: {
            id: userId
        }
    })
    .then((value) => {
        if(!value){
            res.status(400).json({msg: 'User does not exist'})
        }
        user = value
        return UserInfo.create(info)
    })
    .then((info) => {
        user.setInfo(info)
        res.status(200).json({msg:'user was created successfuly'})
    })
    .catch((err) => {
        res.status(400).json(err)
    })
})


module.exports = server;