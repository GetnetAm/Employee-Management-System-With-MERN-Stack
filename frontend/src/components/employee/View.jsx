
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../loader/Loader';

function View() {
    const [employee, setEmployee]= useState(null)

    const {id}= useParams();

    useEffect(()=>{
        const fetchEmployee= async()=>{
            
            
            try {
                const response= await axios.get(`http://localhost:5000/api/employee/list/${id}`, {
                    headers:{
                        "Authorization":`Bearer ${localStorage.getItem('token')}`
                    }
                })

                if(response.data.success){
                    console.log(response)
                    setEmployee(response.data.employee)
                    
             
                    // setFIlteredDepartments(data);

                }
                
            } catch (error) {
                if(error.response && !error.response.data.success){
                    alert(error.response.data.error)
                }

            }
        }
        fetchEmployee();

    }, [])
 

    return (
        <>{employee ?( 
       <div className='max-w-3xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md'>
        <h2 className='text-2xl font-bold mb-8 text-center'>Employee Details</h2>
         <div className='grid grid-cols-1 md: grid-cols-2 gap-6'>
           <div>
           <img  className="rounded-full border w-72" src={`http://localhost:5000/${employee.userId.profileImage}`}/>
           </div>
        
        <div>
        <div className='flex space-x-3 mb-5'>
            <p className='text-lg font-bold'>Name</p>
            <p className='font-medium'>{employee.userId.name}</p>


        </div>
        <div className='flex space-x-3 mb-5'>
            <p className='text-lg font-bold'>Employee ID:</p>
            <p className='font-medium'>{employee.employeeId}</p>
            

        </div>
        <div className='flex space-x-3 mb-5'>
            <p className='text-lg font-bold'>Date of Birth</p>
            <p className='font-medium'>
                {new Date(employee.dob).toLocaleDateString()}</p>
            

        </div>
        <div className='flex space-x-3 mb-5'>
            <p className='text-lg font-bold'>Gender:</p>
            <p className='font-medium'>{employee.gender}</p>
            

        </div>
        <div className='flex space-x-3 mb-5'>
            <p className='text-lg font-bold'>Department:</p>
            <p className='font-medium'>{employee.dep_name}</p>
            

        </div>
        <div className='flex space-x-3 mb-5'>
            <p className='text-lg font-bold'>Marital Status:</p>
            <p className='font-medium'>{employee.maritalStatus}</p>
            

        </div>


        </div>
            
        </div>
       </div>
       ): <div className="m-12 text-center justify-center"><Loader /></div>  } </>
    )
}

export default View