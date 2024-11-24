
const express = require("express");
const {addDepartment, getDepartment, getDepartments, editDepartment, deleteDepartment} = require("../controller/departmentController");
// const authMiddleware= require("../middleware/authMiddleware")
const router= express.Router();

router.post("/add", addDepartment);
router.get("/list",  getDepartments);
router.get("/list/:id",  getDepartment); // single Department get
router.put("/edit/:id",  editDepartment);
router.delete("/delete/:id",  deleteDepartment);


module.exports= router;