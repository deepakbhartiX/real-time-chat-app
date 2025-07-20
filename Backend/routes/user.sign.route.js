const sign = require('../controllers/user.sign.js')

const express = require('express');

const route = express.Router();

route.post('/',sign)

module.exports = {route}