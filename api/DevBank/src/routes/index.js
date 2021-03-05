const express = require('express');
const router = express.Router();

//routes Users
const postUsers = require('./users/post.users');
const getUsers = require('./users/get.users');
const postAuth = require('./auth/post.auth');
const transfer = require("./transfer/tranfer");
const getTransfer = require("./transfer/get.transfer");


// tranfer
router.use('/users/transfer', transfer);
router.use('/users/transfer', getTransfer);
// auth login
router.use('/users/auth',postAuth);
// use Users
router.use('/users', postUsers);
router.use('/users', getUsers);

module.exports = router;