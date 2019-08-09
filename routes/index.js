const express = require('express')
const routes = express.Router()
const { UserControllers } = require('../controllers')

routes.post('/user' , UserControllers.create )

module.exports = routes