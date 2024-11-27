const { Schema, default: mongoose } = require("mongoose");


const employeeSchema= new Schema({
    userId: {type: Schema.Types.ObjectId, ref: "User", required: true},
    employeeId: {type: String, required:true},
    dob: {type: Date},
    gender: {type: String},
    maritalStatus: {type: String},
    designation: {type: String},
    department: {type: Schema.Types.ObjectId, ref: "Department", required: true},
    salary: {type: Number, required:true},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},

    
})

const Employee= mongoose.model("Employee", employeeSchema);
module.exports= Employee;