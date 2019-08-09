const jwt = require('jsonwebtoken');
module.exports = {
    token : (data)=>{
        let token = jwt.sign({ data } , 'abc')
        return token
    },
    tokenVerify : (token)=>{
        let payload = jwt.verify(token, 'abc');
        return payload
    }
} 