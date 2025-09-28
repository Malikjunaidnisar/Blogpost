const express = require('express')
const homeRouter = express.Router()
const jwt = require('jsonwebtoken')
const path = require('path')

const sig = 'my'
homeRouter.get('/',(req,res)=>{
    try{
    const token = jwt.verify(req.cookies.token,sig)
    if(!token){
        return res.status(400).rediect('/login')
        }
    res.status(200).sendFile(path.join(__dirname,'../','public/home.html'))
    }
    catch(err){
        res.status(400).redirect('/login')
    }

})

module.exports={homeRouter}
