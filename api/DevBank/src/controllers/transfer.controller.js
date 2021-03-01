const {User, UserInfo, Account} = require('../database/db');
const {Op} = require('sequelize');

module.exports = {

    // createdAccount(data){
    //     // Mandar userId en data
    //     return Account.create(data)
    // },

    newTransfer(data){
        const {cvuM, cvu, monto} = data
        Account.findOne({where : {cvu: cvuM}})
        .then((response) => {
            console.log("AAAAAAAAAAAAA 1")
            console.log("AAAAAAAAAAAAA 1",response.dataValues.balance)
            console.log("AAAAAAAAAAAAA 1", monto)
            if( response.dataValues.balance >= monto){
                var cantidad = response.dataValues.balance - monto
                Account.update({balance: cantidad}, {where: {cvu: cvuM}})
                .then((responseA) => {
                    console.log("AAAAAAAAAAAAA 2")
                   return Account.findOne({where: {cvu}})
                })
                .then((responseB) => {
                    console.log("AAAAAAAAAAAAA 3")
                    var cantidadRecive = responseB.dataValues.balance -1 + monto + 1
                    return Account.update({balance: cantidadRecive}, {where: {cvu}})
                })
                // .then((responseC) => {
                //     //crear modelo trasfer para registrar estas transferencias.
                //     res.send("transferencia realizada con exito")
                // })
                // .catch(err => {
                //     console.log("AAAAAAAAAAAAA ERR")
                //     console.log("HUBO ERROR EN LA TRANSACCION")
                //     return err
                // })
            }else {
                console.log("ENTRO AL ELSE")
            }
        })

    }
}