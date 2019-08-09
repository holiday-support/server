
const axios = require('axios')

class CalendarController{

    static listCountry(req, res, next) {
        axios({
            method: 'get',
            url: 'https://date.nager.at/api/v2/AvailableCountries'
        })
            .then(({data}) => {
                console.log('IM NEXT ===> \n', data);
                res.status(200).json(data)
            })
            .catch(next)
    }

    static countryInfo(req, res, next) {
        let { countrycode } = req.params
        axios({
            method: 'get',
            url: `https://date.nager.at/api/v2/CountryInfo`,
            params: {
                countryCode: countrycode
            }
        })
            .then(({data}) => {
                res.status(200).json(data)
            })
            .catch(next)
    }

    static longWeekend(req, res, next) {
        let { countrycode } = req.params
        axios({
            method: 'get',
            url: `https://date.nager.at/api/v2/LongWeekend/${new Date().getFullYear()}/${countrycode}`
        })
            .then(({data}) => {
                res.status(200).json(data)
            })
            .catch(next)
    }

    static nextHoliday(req, res, next) {
        axios({
            method: 'get',
            url: `https://date.nager.at/api/v2/NextPublicHolidaysWorldwide`
        })
            .then(({data}) => {
                console.log('IM NEXT ===> \n', data);
                res.status(200).json(data)
            })
            .catch(next)
    }

    static nextHolidayCountry(req, res, next) {
        let { countrycode } = req.params
        axios({
            method: 'get',
            url: `https://date.nager.at/api/v2/NextPublicHolidays/${countrycode}`
        })
            .then(({data}) => {
                res.status(200).json(data)
            })
            .catch(next)
    }
}

module.exports = CalendarController