const {User} = require('../database/db')


module.exports = {

    create(user) {
        return User.findOne({
            where: {
                email: user.email
            }
        })
        .then((res) => {
            if(res){
                return ({msg: 'user already exist'})
            }
            return User.create(user)
        })
    },

    getUsers(){
        return User.findAll()
    }
}