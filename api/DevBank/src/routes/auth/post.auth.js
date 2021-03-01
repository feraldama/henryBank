const server = require('express').Router();
const userController = require('../../controllers/auth.controller');
const { User } = require("../../database/db")
// const passport = require("passport");
const bcrypt = require("bcryptjs");

server.post('/login', function (req, res) {
	const {username, password} = req.body
	console.log(username, password, "aaaaaaaaaaa")
	User.findOne({
		      where: {
		        email: username,
		      },
		    })
		    .then((response) => {
				console.log("LINEA 16", res.dataValues)
				// var password = req.body.password
			    // var salt = bcrypt.genSaltSync(10);
				// var clave = bcrypt.hashSync(password, salt);
				// console.log("CLAVEEE", clave)

		        // if (clave == res.dataValues.password) {
				var clave = response.dataValues.password
				if(bcrypt.compareSync(password,  clave)){
					console.log("entre aca")
					req.session.user = response.dataValues
					res.send("me logueeeeee")
		        } else {
					console.log("entre al else")
					res.send('login failed');
		        }
		      })
		      .catch((err) => {
		        res.send('login failed');
		      });

	// if (!req.body.username || !req.body.password) {
	//   res.send('login failed');
	// } else if(req.body.username === "jose" || req.body.password === "1") {
	//   req.session.user = "jose";
	//   req.session.admin = true;
	//   res.send("entre")
	// }else {
	// 	res.send("llegan pero no coinsiden")
	// }
});
// server.post('/login', passport.authenticate('local'), (req, res) => {
// 	res.send(req.user);
// });

server.post('/logout', (req, res) => {
	req.session.destroy();
    res.sendStatus(200);
})

server.get('/me', (req, res) => {
	if (req.isAuthenticated()) return res.send(req.user);
	else return res.status(401).send('No estás logeado');
});

module.exports = server;
