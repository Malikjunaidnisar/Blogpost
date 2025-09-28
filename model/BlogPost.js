const mongoose = require('mongoose')
const Schema = mongoose.Schema
const blogPostSchema = new Schema({
	title:{
		type:String,
		required:true,
	},
	content:{
		type:String,
		required:true,
		
	},
	userId:{
		type:String,
		required:true
		
	}
})

const BlogPost = mongoose.model('blogPost',blogPostSchema)

module.exports={BlogPost}
