const express = require("express");
const cors= require('cors');
const  mongoose = require("mongoose");
const cookiesParser= require("cookie-parser")
require("dotenv").config()
const app = express();

const authRouter= require("./routes/auth")
// const departmentRouter= require("./routes/departmentRoute")
const departmentRouter= require("./routes/departmentRoute")




app.use(express.json());
app.use(cookiesParser());
// app.use(cors({
//    origin: process.env.FRONTEND_URL,
//    Credential: true,
// }))
app.use(cors());
app.use(express.urlencoded({ extended: true }));


app.use('/api/auth', authRouter)
app.use('/api/department', departmentRouter)




const PORT = process.env.PORT || 3000;

mongoose

       .connect(process.env.MONGO_URI)
       .then(()=>console.log("mongo db is connecetd "))
       .catch((e)=> console.log(e))

app.listen(PORT, () => console.log("Server running on port " + PORT));