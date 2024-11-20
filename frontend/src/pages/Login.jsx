import { useState } from "react"
import axios from "axios"

function Login() {

  
    const [email, setEmail] = useState("");
    const [password, setPassword]= useState("")
    const [error, setError]=useState(null)

    const handleSubmit= async(e)=>{
        e.preventDefault()

        try {
            const response= await axios.post("http://localhost:5000/api/auth/login",
                {email, password}
            );
           
           if(response.data.success){
            alert("Successfully login")
           }
        } catch (error) {
         if(error.response && !error.response.data.success){
            setError(error.response.data.error)
         }else{
            setError("Server error")
         }
        }

    }
    return (
        <div className="flex flex-col items-center h-screen justify-center
        bg-gradient-to-b from-teal-600 from-50% to-gray-100 to-50% space-y-6">
           {/* <h2 className="font-sevillana text-sx1 text-white">Employee Management System</h2> */}
           <h2 className="font-lobster  text-3xl text-white">Employee Management System</h2>

           {/* <div className="border shadow p-6 w-80 bg-white"> */}
           <div className="border shadow p-8 w-80 bg-white ">
           {/* <h2 className="text-2xl font-bold mb-4">Login</h2> */}
           <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

           {
            error && <p className="text-red-500">{error}</p>
           }
          

           <form onSubmit={handleSubmit}>
        
            <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
                <input type="email" placeholder="Enter Email" required className="w-full px-3 py-2 border"
                onChange={(e)=>setEmail(e.target.value)} />
            </div>

            <div>
                <label htmlFor="password" className="block text-gray-700">password</label>
                <input type="password" placeholder="***********" required className="w-full px-3 py-2 border"
                onChange={(e)=>setPassword(e.target.value)}/>
            </div>

            <div className="mb-4 flex items-center justify-between">
                <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2 text-gray-700">Remeber Me</span>
                </label>
                <a href="#" className="text-teal-600">
                    Forget Password
                </a>

            </div>


            <button type="submit" className="w-full bg-teal-600 text-white py-2">Login</button>

            
           </form>

           </div>

        </div>
    )
}

export default Login
