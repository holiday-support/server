const axios = require('axios')
class UnsplashController {
    static ListPhotos(req,res,next){
        axios.get('https://api.unsplash.com/search/photos?query=japan' , {
            headers : {Authorization : 'Client-ID 884e8e799ec4d84e478ba97ca7de31c4024e02b895c3ce7760bd70743e96ac19' } 
        })
        .then(image =>{
            res.send(image.data.results)
            console.log(image.data.results)
        })
        .catch(err=>{
            next(err)
        })
    }
}

module.exports = UnsplashController