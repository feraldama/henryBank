const express = require('express');
const router = express.Router();

//routes Users
const postUsers = require('./users/post.users');
const getUsers = require('./users/get.users');

// use Users
router.use('/users', postUsers);
router.use('/users', getUsers);

module.exports = router;