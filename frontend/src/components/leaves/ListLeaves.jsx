
import axios from "axios";
import { useEffect, useState } from "react";
import {Link } from "react-router-dom"
import Loader from "../loader/Loader";


function ListLeaves() {
    // const [employees, setEmployees]= useState([]);
    const [empLoading, setEmpLoading]= useState(false);
    // const [filterdEmployee, SetFilterdEmployee]= useState([]);


    
    useEffect(()=>{
        const fetchEmployee= async()=>{
            setEmpLoading(true)
            
            try {
                const response= await axios.get("http://localhost:5000/api/employee/list", {
                    headers:{
                        "Authorization":`Bearer ${localStorage.getItem('token')}`
                    }
                })

                if(response.data.success){
                   
                    // setEmployees();
                    // SetFilterdEmployee();
                    // setFIlteredDepartments(data);

                }
                
            } catch (error) {
                if(error.response && !error.response.data.success){
                    alert(error.response.data.error)
                }

            }finally{
                setEmpLoading(false)
            }
        }
        fetchEmployee();

    }, [])



    // const handleFilter=(e)=>{
    //     const records= employees.filter((emp)=>(
    //         emp.name.toLowerCase().includes(e.target.value.toLowerCase())
    //     ))
    //     SetFilterdEmployee(records)
    // }
 

    return (
        <>
        {empLoading ?<div className="m-12 text-center justify-center"><Loader /> </div>: 
      
        <div className="p-5">
           <div className="text-center">
            <h3 className="text-2xl font-bold">Manage Leaves</h3>
           </div>

           <div className="flex justify-between items-center">
           <input type="text" placeholder="Search By Name" />
     
            {/* <input type="text" placeholder="Search By Name" onChange={handleFilter} /> */}
            <Link to="/employee-dashboard/add-leave" className="px-4 py-1 bg-teal-600 rounded text-white">Add New Leaves
            </Link>

           </div>

           <div>
     
          
           </div>
        </div>
         } 
        </>
    )
}

export default ListLeaves
