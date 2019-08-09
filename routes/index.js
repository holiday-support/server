const express = require('express')
const routes = express.Router()
const event= require('./event')
const { UserControllers } = require('../controllers')

routes.use('/ticketmaster', event)
routes.post('/user' , UserControllers.create )

module.exports = routes