const path = require('path')

const express = require('express')
const jwt = require('jsonwebtoken')


const {BlogPost} = require('../model/BlogPost.js')

const updatepostRouter = express.Router()

const sig = 'my'

updatepostRouter
.get('/:id',async (req,res)=>{
	try{
	const token = jwt.verify(req.cookies.token,sig)	
	if(!token){
		return res.status(400).rediect('/login')
		}
	let sp = await BlogPost.find({_id:req.params.id})
	if(!sp[0]) return res.status(400).send('Invalid Id')
	sp = sp[0]
	console.log(sp)
	sp = JSON.stringify(sp)
	res.setHeader('Set-Cookie',`sp=${sp};Max-Age=120`)
	return res.sendFile(path.join(__dirname,'../','public','newupdatepost.html'))
	}
	catch(err){
		console.log(err)
		res.status(400).redirect('/login')
	}
})
.put('/:id',async (req,res)=>{
	try{
	    const token = jwt.verify(req.cookies.token,sig)
	    if(!token){
	        return res.status(400).rediect('/login')
	        }
	  
	    let sp ={
	    	title:req.body.title,
	    	content:req.body.content,
	    	userId:req.body.userId
	    }
	    await BlogPost.updateOne({_id:req.params.id},sp)
	    res.status(200).redirect('/')
	    }
	    catch(err){
	    console.log(err)
	    	res.status(400).redirect('/login')
	    }
})
.delete('/:id',async (req,res)=>{
    try{
        const token = jwt.verify(req.cookies.token,sig)
        if(!token) return res.status(400).send('InvalidId')
		await BlogPost.deleteOne({_id:req.params.id})
        res.status(200).redirect('/dashboard')
    }
    catch(err){
        res.status(400).redirect('/login')
    }
    

})


module.exports={updatepostRouter}
