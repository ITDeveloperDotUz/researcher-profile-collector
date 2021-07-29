const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const app = express()
app.use('/api/auth', require('./routes/auth'))

const PORT = config.get('port') || 8080

async function start(){
	try {
		await mongoose.connect(config.get('dbUrl'), {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true
		})
	} catch (e) {
		console.log('Something went wrong!', e.message)
		process.exit(1)
	}
}

start()

app.listen(PORT, () => console.log(`App has been started on port ${PORT}`))