const express = require('express')
const path = require('path')

const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const { isGuest} = require('../middleware/isGuest.js')
const { User} = require('../model/User.js')

const loginRouter = express.Router()

const sig = 'my'
loginRouter
.get('/',isGuest,(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,'../','public','login.html'))

})

/*.post('/',async(req,res)=>{
	try{
		
	let user = await User.find({userEmail:req.body.email})
	if(!user) return res.status(400).redirect('/login')

	
	let confirmUserPassword = bcrypt.compareSync(req.body.password, user[0].userPassword);
	
	if(user && !confirmUserPassword) return res.status(400).redirect('/login')
	req.body.userId= user[0]._id
	let token = jwt.sign(req.body,sig)


	res.setHeader('Set-Cookie',`token=${token};HttpOnly;path=/;Max-Age=300`)

	res.redirect('/')
	}
	catch(err){
		return res.status(400).redirect('/login')
	}


})*/

module.exports={loginRouter}
