const {User} = require('../database/db')


module.exports = {

    create(user) {
        
    },

    getUsers(){
        return User.findAll()
    }
}