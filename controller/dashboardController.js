const express = require('express')
const path = require('path')

const jwt = require('jsonwebtoken')

const dashboardRouter = express.Router()

const {BlogPost} = require('../model/BlogPost.js')

const sig = 'my'
dashboardRouter
.get('/',async (req,res)=>{
    try{
    const token = jwt.verify(req.cookies.token,sig)
    
    if(!token){
        return res.status(400).rediect('/login')
        }
    let usersPost = await BlogPost.find({userId:token.userId})
    usersPost = JSON.stringify(usersPost)
    res.setHeader('Set-Cookie',`userpost=${usersPost};Max-Age=120`)
    res.status(200).sendFile(path.join(__dirname,'../','public/dashboard.html'))
    }
    catch(err){
    console.log(err)
        res.status(400).redirect('/login')
    }
})

module.exports={dashboardRouter}
