const {Router} = require('express')
const {check, validationResult} = require('express-validator')
const router = Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/User')

// /api/auth/register
router.post('/register', [
		check('mail', 'Incorrect email address').isEmail(),
		check('password', 'Minimum length of symbols for password is 6').isLength({min: 6})
	],
	async(req, res) => {
		try {
			const errors = validationResult(req)
			if (!errors.isEmpty()) {
				return res.status(400).json({
					errors: errors.array(),
					message: 'Incorrect credentials passed for registration.'
				})
			}

			const {email, username, password} = req.body

			const candidate = await User.findOne({email})
			if (candidate) return res.status(400).json({message: 'This email is already registered.'})

			const user = new User({ email, username, password: await bcrypt.hash(password, 12) })

			await user.save()

			res.status(201).json({message: 'New user successfully registered.'})
		} catch (e) {
			res.status(500).json({message: 'Something went wrong. Please try again later'})
		}
	}
)

// /api/auth/login
router.post('/login', [
		check('username', 'Incorrect username passed').exists(),
		check('password', 'Incorrect password passed').exists()
	],
	async(req, res) => {
		try {
			const errors = validationResult(req)
			if (!errors.isEmpty()) {
				return res.status(400).json({
					errors: errors.array(),
					message: 'Incorrect credentials passed for authentication.'
				})
			}

			const {username, password} = req.body
			const user = await User.findOne({username})
			if (!user) return res.status(400).json({message: 'Cannot find user with these credentials.'})

			const passwordMatched = await bcrypt.compare(password, user.password)
			if(!passwordMatched) return res.status(400).json({message: 'Password not matched'})

			const token = jwt.sign(
				{userId: user.id, time: new Date()},
				config.get('jwtSecret'),
				{expiresIn: '1h'}
			)
			res.json({ token, userId: user.id })
		} catch (e) {
			res.status(500).json({message: 'Something went wrong. Please try again later'})
		}
	}
)


module.exports = router