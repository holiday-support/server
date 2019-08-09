const mongoose = require('mongoose')
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/group-project', {useNewUrlParser: true});

let UserSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    } 
})

let User =  mongoose.model('User' ,  UserSchema)

module.exports = User;