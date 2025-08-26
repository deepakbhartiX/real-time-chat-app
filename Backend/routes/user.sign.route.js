
//routes config for user auth 

const express = require('express');
const { secureRoute } = require('../middleware/secureRoute.js');
const { sign, login, logout, getallUsers } = require('../controllers/user.controller.js')

const route = express.Router();

route.post('/api/sign', sign);

route.post('/api/login', login)

route.post('/api/logout', logout)

route.get('/api/getallUser', secureRoute, getallUsers)

module.exports = { route }



