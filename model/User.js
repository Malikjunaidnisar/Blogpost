const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema({
	userName:{
		type:String,
		required:true,
		trime:true
	},
	userEmail:{
		type:String,
		required:true,
		unique:true,
		trim:true
	},
	userPassword:{
		type:String,
		required:true,
		trim:true
		
	}
})

const User = mongoose.model('user',userSchema)

module.exports={User}
