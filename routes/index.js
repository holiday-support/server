const event= require('./event')
const { UserControllers } = require('../controllers')
const express = require('express')
const routes = express.Router()
const calendarRoutes = require('./calender')

routes.use('/ticketmaster', event)
routes.post('/user' , UserControllers.create )
routes.use('/calendars', calendarRoutes)

module.exports = routes