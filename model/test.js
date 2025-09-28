const mongoose= require('mongoose')

const Schema = mongoose.Schema

const testSchema = new Schema({
	name:{
		type:string,
		required:true
	},
	fname:{
		type:string,
		required:true
	}
})

const Test = mongoose.model('test',testSchema)

