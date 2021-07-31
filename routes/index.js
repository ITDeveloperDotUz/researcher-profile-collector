const {Router} = require('express')
const ResearcherController = require('../controllers/ResearcherController')
const {AuthController, AuthValidators} = require("../controllers/AuthController");
const router = Router()


// auth routes
router.post('/register', AuthValidators.register, AuthController.register)
router.post('/login', AuthValidators.login, AuthController.login)

// researcher routes
router.get('/researcher/search/:searchParams', ResearcherController.search)

module.exports = router