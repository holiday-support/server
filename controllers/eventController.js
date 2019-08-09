const axios = require('axios')
class controllerEvent{
    static getEvent(req,res,next){
        axios.get('https://app.ticketmaster.com/discovery/v2/events/',{
            params : {
                'apikey' : process.env.KEY_TICKETMASTER,
                'countryCode': req.params.countryCode
            }
        })
        .then(({data})=>{
            let returnData = null
            if(data._embedded){
                returnData = data._embedded.events.map(e=> {
                if(e.pleaseNote && e.pleaseNote.length > 200) e.pleaseNote = e.pleaseNote.substring(0,200)+'...';
                if(!e.dates.start.localDate) e.dates.start.localDate = '-'
                if(!e.dates.start.localTime) e.dates.start.localTime = '-'
                if(!e.pleaseNote) e.pleaseNote = ' '
                return {
                    name : e.name,
                    url : e.url,
                    images : e.images[0].url,
                    startDate : e.dates.start.localDate,
                    localTime : e.dates.start.localTime,
                    note : e.pleaseNote
                }
            })}
            res.json({event : returnData})
        })
        .catch(err=>{
            next(err)
        })
    }


    static getAttractions(req,res,next){
        axios.get('https://app.ticketmaster.com/discovery/v2/attractions/',{
            params : {
                'apikey' : process.env.KEY_TICKETMASTER,
                'countryCode': req.params.countryCode
            }
        })
        .then(({data})=>{
            let returnData = null
            if(data._embedded){
                returnData = data._embedded.attractions.map(e=> {
                if(e.pleaseNote && e.pleaseNote.length > 100) e.pleaseNote = e.pleaseNote.substring(0,100)+'.....';

                return {
                    name : e.name,
                    url : e.url,
                    images : e.images[0].url,
                }
            })}
            res.json({event : returnData})
        })
        .catch(err=>{
            next(err)
        })
    }
}

module.exports = controllerEvent