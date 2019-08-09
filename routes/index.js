const express = require('express')
const routes = express.Router()
const calendarRoutes = require('./calender')

routes.use('/calendars', calendarRoutes)


module.exports = routes