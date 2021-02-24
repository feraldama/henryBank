const {User} = require('../database/db')


module.exports = {

    createUser(user) {
        return User.findOne({
            where: {
                email: user.email
            }
        })
        .then((value) => {
            if(value){
                return ({msg: 'user already exist'})
            }
            return User.create(user)
        })
    },

    getUsers(){
        return User.findAll()
    }
}