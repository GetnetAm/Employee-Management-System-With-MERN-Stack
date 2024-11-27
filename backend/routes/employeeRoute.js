
const express = require("express");
const {addEmployee, upload, getEmployees, getEmployee, updateEmployee, fetchEmployeesByDepId} = require("../controller/employeeController");
// const {addDepartment, getDepartment, getDepartments, editDepartment, deleteDepartment} = require("../controller/departmentController");
// const authMiddleware= require("../middleware/authMiddleware")
const router= express.Router();

router.post("/add", upload.single("image"), addEmployee);
router.get("/list",  getEmployees);
router.get("/list/:id",  getEmployee); // single Department get
router.put("/edit/:id",  updateEmployee);
router.get("/department/:id",  fetchEmployeesByDepId);


module.exports= router;