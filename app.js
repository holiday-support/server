if(!process.argv.NODE_ENV || process.argv.NODE_ENV == 'development'){
    const env = require('dotenv').config()
}
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
const express = require('express')
const app = express()
const port = process.env.PORT
const routes = require('./routes')

app.use(cors())
app.use(express.json())
mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true},()=>{
    console.log('mongodb is connected');
});
app.use(express.urlencoded({extended:false}))
app.use(morgan('dev'))
app.listen(port,()=>{
    console.log('listening to port ',port);
})
app.get('/',(req,res,next)=>{
    res.send('HOME OF API')
})
app.use('/api',routes)
app.use(function (err, req, res, next) {
    console.log(err)
    res.status(500).send({message:'Internal Server Error'})
  })
