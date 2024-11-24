function Add() {
  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-6">Add New Employee</h2>

      <form>
        <div className="grid grid-cols-1 md: grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Insert Name"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Insert Email"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
            Employee ID
            </label>
            <input
              type="text"
              name="employeeId"
              placeholder="Insert Employee ID"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Date of Birth
            </label>
            <input
              type="text"
              name="dob"
              placeholder="DOB"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Gender
            </label>
            <select name="gender"
            className="mt-1 p-2 block w-full border border-gray-300 rounded">

          
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="male">Female</option>
            <option value="male">Other</option>
            </select>
        
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Marital Status
            </label>
            <select name="maritalStatus"
            className="mt-1 p-2 block w-full border border-gray-300 rounded">

          
            <option value="">Select Status</option>
            <option value="male">Single</option>
            <option value="male">Married</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Designation
            </label>
            <input
              type="text"
              name="designation"
              placeholder="Designation"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
            Department
            </label>
            <select name="department"
            className="mt-1 p-2 block w-full border border-gray-300 rounded"
            required>

          
            <option value="">Select Department</option>
            
            </select>
          </div>

          
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Salary
            </label>
            <input
              type="number"
              name="salary"
              placeholder="Salary"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>

           
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="*******"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Role
            </label>

            <select name="role"
            className="mt-1 p-2 block w-full border border-gray-300 rounded"
            required>

          
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="employee">Employee</option>
            
            </select>
          
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Upload Profile Image
            </label>
            <input
              type="file"
              name="image"
              placeholder="Upload Image"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              
            />
          </div>


        </div>

        <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-md">
            Add Employee
        </button>
      </form>
    </div>
  );
}

export default Add;
