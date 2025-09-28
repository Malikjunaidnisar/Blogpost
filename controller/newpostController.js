const path = require('path')

const express = require('express')
const jwt = require('jsonwebtoken')
const {BlogPost} = require('../model/BlogPost.js')

const newpostRouter = express.Router()

let post = [
	{
		id:1,
		title:'Working on nodejs',
		content:'Working on nodejs is hard'
	},
	{
	        id:2,
	        title:'Working on html',
	        content:'Working on html is easy'
	    }
]

const sig = 'my'
newpostRouter
.get('/',(req,res)=>{
    try{
    const token = jwt.verify(req.cookies.token,sig)
    if(!token){
        return res.status(400).rediect('/login')
        }
    res.status(200).sendFile(path.join(__dirname,'../','public','newpost.html'))
    }
    catch(err){
        res.status(400).redirect('/login')
    }

})
.post('/',async (req,res)=>{
    try{
    const token = jwt.verify(req.cookies.token,sig)
    if(!token){
        return res.status(400).rediect('/login')
        }
        
    let newpost ={
    	title:req.body.title,
    	userId : token.userId,
    	content:req.body.content
    }
    await BlogPost.create(newpost)
    newpost = JSON.stringify(newpost)
    res.setHeader('Set-Cookie',`post=${newpost};Max-Age=120`)
   	return res.status(200).sendFile(path.join(__dirname,'../','public','singleblog.html'))
         }
    catch(err){
        res.status(400).redirect('/login')
    }
})


module.exports={newpostRouter}
