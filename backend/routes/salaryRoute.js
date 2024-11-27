
const express = require("express");
const {getSalary, addSalary} = require("../controller/salaryController");
// const authMiddleware= require("../middleware/authMiddleware")
const router= express.Router();


router.post("/add",  addSalary);
router.get("/:id",  getSalary);


module.exports= router;