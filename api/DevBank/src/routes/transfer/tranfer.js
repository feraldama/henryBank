const server = require('express').Router();
const userController = require('../../controllers/transfer.controller');
const { User, Account} = require("../../database/db")
// const passport = require("passport");
// const bcrypt = require("bcryptjs");


server.post('/transfer', function (req, res) {
// recibo cvu del que manda y del que recive, junto con el monto
    const {cvuManda, cvu, monto} = req.body
        Account.findOne({where : {cvu: cvuManda}})
        .then((response) => {
            console.log("AAAAAAAAAAAAA 1")
            console.log("AAAAAAAAAAAAA 1",response.dataValues.balance)
            console.log("AAAAAAAAAAAAA 1", monto)
            if( response.dataValues.balance >= monto){
                var cantidad = response.dataValues.balance - monto
                Account.update({balance: cantidad}, {where: {cvu: cvuManda}})
                .then((responseA) => {
                    console.log("AAAAAAAAAAAAA 2")
                   return Account.findOne({where: {cvu}})
                })
                .then((responseB) => {
                    console.log("AAAAAAAAAAAAA 3")
                    var cantidadRecive = responseB.dataValues.balance -1 + monto + 1
                    return Account.update({balance: cantidadRecive}, {where: {cvu}})
                })
                .then((responseC) => {
                    //crear modelo trasfer para registrar estas transferencias.
                    res.send("transferencia realizada con exito")
                })
                .catch(err => {
                    console.log("AAAAAAAAAAAAA ERR")
                    console.log("HUBO ERROR EN LA TRANSACCION")
                    return err
                })
            }else {
                console.log("ENTRO AL ELSE")
                res.send("la cuenta de origen no cuenta con saldo suficiente para realizar esta transferencia")
            }
        })
        .catch(err => {
            console.log("HUBO ERROR EN LA TRANSACCION", err)
            res.send(err)
        })
})

module.exports = server;
