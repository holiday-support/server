const express = require('express')
const routes = express.Router()
const { UnsplashController } = require('../controllers')

routes.get('/search/photos' , UnsplashController.ListPhotos)

module.exports = routes