const {User, UserInfo} = require('../database/db');
const {Op} = require('sequelize');

module.exports = {

    createUser(user) {
        return User.findOne({
            where: {
                email: user.email
            }
        })
        .then((value) => {
            if(value){
                return false
            }
            return User.create(user)
        })
    },

    getOneUser(userId){
        return User.findOne({
            where: {
                id: userId
            }
        })
    },

    getUsers(){
        return User.findAll()
    }
}