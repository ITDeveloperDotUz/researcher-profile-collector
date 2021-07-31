const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
	id: {type: Number, required: true, unique: true},
	country_code: {type: String},
	email: {type: String, required: true},
	first_name: {type: String, required: true},
	last_name: {type: String, required: true},
	avatar: {type: String},
	bio: {type: String},
	keywords: {type: String},
	orcid: {type: String},
	public_name: {type: String},
	organization: {type: String},
	social_links: {type: Object},
	googleScholarProfile: {type: Object},
	publonsProfile: {type: Object},
	scopuesProfile: {type: Object},
})

module.exports = model('Researcher', schema)