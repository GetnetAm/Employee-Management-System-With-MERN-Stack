const Employee = require("../models/employee")
const Leave= require("../models/Leave")

const addLeave= async(req, res)=>{
    try {
        const {userId, leaveType, startDate, endDate, reason}=req.body
        const employee= await Employee.findOne(userId)

        const newLeave= new Leave({
            employeeId:employee._id, leaveType, startDate, endDate, reason
        })
        await newLeave.save();
        return status(200).json({success: true})
    } catch (error) {
        return res.status(500).json({success: false, error:" Leave is Error server"})
        
    }
  
}


module.exports=addLeave