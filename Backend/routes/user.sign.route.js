const { sign, login, logout } = require('../controllers/user.controller.js')

//routes config for user auth 

const express = require('express');

const route = express.Router();

route.post('/sign', sign)

route.post('/login', login)

route.post('/logout', logout)

module.exports = { route }