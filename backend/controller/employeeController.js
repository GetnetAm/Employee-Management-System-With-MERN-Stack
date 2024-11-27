const User= require("../models/User")
const Employee= require("../models/employee")
const bcrypt= require("bcryptjs")
const path= require("path")
const multer= require("multer")


const storage= multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, "public/uploads")
    },

    filename: (req, file, cb)=>{
        cb(null, Date.now()+ path.extname(file.originalname))
    }
})

const upload= multer({storage: storage});

const addEmployee= async(req, res)=>{
 
    try {
        const {
            name,
            email,
            employeeId,
            dob,
            gender,
            maritalStatus,
            designation,
            department,
            salary,
            password,
            role,
        
           }= req.body;
        
           const user= await User.findOne({email})
           if(user){
            return res.status(400).json({success: false, error: "User Already Registered  in Employee"})
           }
        
           const hashPassword= await bcrypt.hash(password, 10)
           const newUser= new User({
            name,
            email,
            password: hashPassword,
            role,
            profileImage: req.file ? req.file.filename: ""
           })
           const saveUser= await newUser.save()
        
           const newEmployee= new Employee({
            userId: saveUser._id,
            employeeId,
            dob,
            gender,
            maritalStatus,
            designation,
            department,
            salary
           })
           await newEmployee.save();
           return res.status(200).json({success: true, message: "Employee Created"})
        
    } catch (error) {
        return res.status(500).json({success: false, error: "Server error in adding employee"})
        
    }



}

const getEmployees= async(req, res)=>{
    try {
        const employees= await Employee.find().populate("userId", {password: 0}).populate("department")
        return res.status(200).json({success: true, employees})
    } catch (error) {
        return res.status(500).json({success: false, error: "Get employee is server error"})
    }
}

const getEmployee= async(req, res)=>{
    const {id}= req.params;
    try {
        let employee
         employee= await Employee.findById({_id: id}).populate("userId", {password: 0}).populate("department");
         if(!employee){
            employee= await Employee.findOne({userId: id})
            .populate("userId", {password: 0})
            .populate("department")
         }
        return res.status(200).json({success: true, employee})
    } catch (error) {
        return res.status(500).json({success: false, error: "Get employee is server error"})
    }
}






const updateEmployee=async(req, res)=>{
    const {id}= req.params;
    try {
       
       const {
        name,
        maritalStatus,
        designation,
        salary,
        department
       }= req.body;

       const employee= await Employee.findById({_id: id});
       if(!employee){
        return res
        .status(404)
        .json({success: false, error: "Employee not Found"})
       }

       const user= await User.findById({_id: employee.userId})

       if(!user){
        return res
        .status(404)
        .json({success: false, error: "user not found"})
       }

       const updateUser=await User.findByIdAndUpdate({_id: employee.userId}, {name})
       const updateEmployee= await Employee.findByIdAndUpdate({_id: id},[
        maritalStatus,
        designation,
        salary,
        department
       ])

       if(!updateEmployee || !updateUser){
        return res
        .status(404)
        .json({success: false, error: "document not found"});

       }
       return res.status(200).json({success: true, message: "Employee Updated Successfully"})
        
    } catch (error) {
        return res
        .status(500)
        .json({success: false, error: "Update Employee Server Error"})
        
    }
}


const fetchEmployeesByDepId= async(req, res)=>{
    const {id}= req.params;

    try {
        const employees= await Employee.find({department: id})
        return res.status(200).json({success: true, employees});
    } catch (error) {
        return res
        .status(500)
        .json({success: false, error: "get Employees Server error"})
    }
}


module.exports={addEmployee, upload, getEmployees, getEmployee, updateEmployee, fetchEmployeesByDepId}