

const express = require("express")
const {login, verify} = require("../controller/authController")
const userRegister = require("../controller/UserSeed")
const authMiddleware = require("../middleware/authMiddleware")
const router= express.Router()

router.post('/login', login)

router.post('/verify', authMiddleware, verify)
router.post('/register', userRegister)

module.exports= router;