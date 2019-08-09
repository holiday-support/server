const express = require('express')
const routes = express.Router()
const controller  = require('../controllers/eventController')


routes.get('/events/:countryCode', controller.getEvent)
routes.get('/attractions/:countryCode', controller.getAttractions)


module.exports = routes