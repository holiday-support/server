
const express = require('express')
const calendarRoutes = express.Router()
const { Calendar } = require('../controllers')

calendarRoutes.get('/', Calendar.listCountry)
calendarRoutes.get('/countryinfo/:countrycode', Calendar.countryInfo)
calendarRoutes.get('/longweekend/:countrycode', Calendar.longWeekend)
calendarRoutes.get('/nextpublicholidaysworldwide', Calendar.nextHoliday)
calendarRoutes.get('/nextpublicholidayscountry/:countrycode', Calendar.nextHolidayCountry)


module.exports = calendarRoutes