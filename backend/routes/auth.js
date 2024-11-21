

const express = require("express")
const login = require("../controller/authController")
const userRegister = require("../controller/UserSeed")
const router= express.Router()

router.post('/login', login)
router.post('/register', userRegister)

module.exports= router;