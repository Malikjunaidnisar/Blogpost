const path = require('path')

const express = require('express')
const bcrypt = require('bcryptjs')

const {isGuest} = require('../middleware/isGuest.js')

const {User} = require('../model/User.js')

const signupRouter = express.Router()

signupRouter
.get('/',isGuest,(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,'../','public','signup.html'))
})
.post('/',async (req,res)=>{
	try{
	const saltRounds = 10
	
	const hash = bcrypt.hashSync(req.body.password, saltRounds)

	let newUser = {
		userName:req.body.name,
		userEmail:req.body.email,
		userPassword:hash
	}
	
	await User.create(newUser)
	
	return res.status(200).redirect('/login')
	}
	catch(err){
		
		if(err){
			 res.status(400).send(`Dublicate Email.<br><br><a href="/signup">Back to SignUp Page</a>`)
		}
	}
})

module.exports={signupRouter}
