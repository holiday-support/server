const express = require('express')
const routes = express.Router()
const event= require('./event')
const image = require('./image')
const { UserControllers } = require('../controllers')

routes.use('/ticketmaster', event)
routes.use('/' ,  image )
routes.post('/user' , UserControllers.create )

module.exports = routes