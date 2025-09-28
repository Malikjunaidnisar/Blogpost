const jwt = require('jsonwebtoken')
const sig = 'my'
function isGuest(req,res,next){
    try{
        const token = jwt.verify(req.cookies.token,sig)
        if(token){
            return res.status(200).redirect('/')
            
        }
    }
    catch(err){

           
        next()
    }
    
           
}

module.exports={isGuest}
