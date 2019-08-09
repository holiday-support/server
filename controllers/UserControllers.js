const { User } = require('../Models')
const {OAuth2Client} = require('google-auth-library');
const { token } = require('../helpers/token')
class UserController {
    static create(req,res){
        let data;
        let kondisi = true
        const client = new OAuth2Client("438390530813-hqkaes7ruh8js6eoc2r6cleest6jgqrh.apps.googleusercontent.com");
        client.verifyIdToken({
            idToken : req.body.id_token ,
            audience :  "438390530813-hqkaes7ruh8js6eoc2r6cleest6jgqrh.apps.googleusercontent.com"
        })
        .then(ticket=>{
            data = ticket.payload
            return User.findOne({
            })
        })
        .then(user=>{
            if(user){
                kondisi = false
                let tokenUser = token(user._id)
                console.log(tokenUser)
                console.log(user.name)
                res.json({
                    token : tokenUser,
                    name : user.name
                })
            }else {
                let { name , email } = data
                return User.create({
                    name , email , password : 'asal'
                })
            }
        })
        .then(data=>{
            if(kondisi){
                console.log('dsmfdksmf')
                res.send('sukses')
            }
        })
        .catch(err=>{
            console.log(err)    
        })
    }
}

module.exports = UserController