import express from 'express'
const router = express.Router()
import login from '../controllers/login.js'
import signup from '../controllers/signup.js'
import {signupValidation, loginValidation} from '../middlewares/authValidation.js'

router.post('/signup', signupValidation, signup)
router.post('/login', loginValidation, login)


export default router