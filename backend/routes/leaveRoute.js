
const express = require("express");
const addLeave = require("../controller/leaveController");
// const authMiddleware= require("../middleware/authMiddleware")
const router= express.Router();


router.post("/add",  addLeave);



module.exports= router;