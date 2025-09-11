const express = require('express');
const { sendMessage } = require('../controllers/message.controller');
const { secureRoute } = require('../middleware/secureRoute.js');
const { getMessage } = require('../controllers/message.controller');

messageroute = express.Router()

messageroute.post('/api/send/:id',secureRoute,sendMessage)

messageroute.get('/api/getmessage/:id',secureRoute,getMessage)

module.exports = { messageroute }