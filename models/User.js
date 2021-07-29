const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
	email: {type: String, required: true, unique: true},
	password: {type: String, required: true},
	username: {type: String, required: true, unique: true},
	links: [{type: Types.ObjectId, ref: 'link'}]
})

module.exports = model('User', schema)