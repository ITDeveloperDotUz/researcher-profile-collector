const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
	country_code: {type: String},
	email: {type: String, required: true},
	first_name: {type: String, required: true},
	last_name: {type: String, required: true},

})

module.exports = model('Researcher', schema)