const express = require('express')
const routes = express.Router()
const event= require('./event')

routes.use('/ticketmaster', event)


module.exports = routes