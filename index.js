const express= require('express')
const path= require('path')

const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const methodOverride = require('method-override')
const bcrypt = require('bcryptjs')

const {signupRouter} = require('./controller/signupController.js')
const {loginRouter} = require('./controller/loginController.js')
const {logoutRouter} = require('./controller/logoutController.js')
const {dashboardRouter} = require('./controller/dashboardController.js')
const {homeRouter} = require('./controller/homeController.js')
const {newpostRouter} = require('./controller/newpostController.js')
const {updatepostRouter} = require('./controller/updatepostController.js')
const {connectDB} = require('./mongodb.js')

const {BlogPost} = require('./model/BlogPost.js')
const {User} = require('./model/User.js')

const app = express()
const port = process.env.PORT


app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))
app.use(methodOverride('_method'))

app.use('/signup',signupRouter)
app.use('/login',loginRouter)
app.use('/logout',logoutRouter)
app.use('/dashboard',dashboardRouter)
app.use('/',homeRouter)
app.use('/newpost',newpostRouter)
app.use('/post',updatepostRouter)


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




connectDB()
app.listen(port || 3000,()=>{
	console.log('working')
})
