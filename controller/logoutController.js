const express = require('express')
const logoutRouter = express.Router()
const jwt = require('jsonwebtoken')

const sig="my"

logoutRouter.get('/',(req,res)=>{
    //const token = jwt.verify(req.cookies.token,sig)
    //console.log(token)

    try{
    const token = jwt.verify(req.cookies.token,sig)
    if(!token){
        return res.status(400).rediect('/login')
    console.log('token not')
        }                    
    res.setHeader('Set-Cookie',`token=${token};HttpOnly;path=/;Max-Age=0`)
    res.status(200).redirect('/login')                                                                         
    }
    catch(err){
        res.status(400).redirect('/login')
    }

})

module.exports={logoutRouter}
