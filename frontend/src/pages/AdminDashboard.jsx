import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext"

function AdminDashboard() {

    const {user, loading}= useAuth();
    const navigate= useNavigate();

    if(loading){
        return <div>Loading</div>
    }

    if(!user){
        navigate("/login")
    }

    return (
        <div>
            <h1>Admin Dashbaord<span className="text-3xl text-cyan-600 bg-orange-400">{user.name}</span> </h1>
            
        </div>
    )
}

export default AdminDashboard
