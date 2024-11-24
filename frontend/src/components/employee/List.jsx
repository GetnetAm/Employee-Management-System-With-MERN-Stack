
import {Link } from "react-router-dom"

function List() {
    // const [departments, setDepertments]= useState([]);
    // const [depLoading, setDepLoading]= useState(false);
 

    return (
        <>
        {/* {depLoading ?<div>Loading......</div>:  */}
      
        <div className="p-5">
           <div className="text-center">
            <h3 className="text-2xl font-bold">Manage Employees</h3>
           </div>

           <div className="flex justify-between items-center">
            <input type="text" placeholder="Search By Dep Name"  />
            <Link to="/admin-dashboard/add-employee" className="px-4 py-1 bg-teal-600 rounded text-white">Add New Employees
            </Link>

           </div>

           <div>
          
           </div>
        </div>
        {/* } */}
        </>
    )
}

export default List
