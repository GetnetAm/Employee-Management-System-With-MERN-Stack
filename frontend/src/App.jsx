
import './App.css'
import {BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Login from './pages/Login'
import AdminDashboard from './pages/AdminDashboard'
import EmployeeDashboard from './pages/EmployeeDashboard'
import PrivateRoutes from './utils/PrivateRoutes'
import RoleBaseRoutes from './utils/RoleBaseRoutes'
import AdminSummary from './components/dashboard/AdminSummary'
import DepartmentList from './components/department/DepartmentList'
import AddDepartment from './components/department/AddDepartment'
import EditDepartment from './components/department/EditDepartment'
import List from './components/employee/List'
import Add from './components/employee/Add'
import View from './components/employee/View'
import EditEmployee from './components/employee/EditEmployee'
import AddSalary from './components/salary/AddSalary'
import ViewSalary from './components/salary/ViewSalary'
import SummaryEmployee from "./components/Employee Dashobard/Sammary"
import ProfileEmployee from './components/Employee Dashobard/ProfileEmployee'
import ListLeaves from './components/leaves/ListLeaves'
import AddLeave from './components/leaves/AddLeave'


function App() {

//
  return (
    <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Navigate to="/admin-dashboard" />} />
    <Route path='/login' element={<Login />}  />
    <Route path='/admin-dashboard' element={ 

    <PrivateRoutes>
      <RoleBaseRoutes requiredRole={["admin"]}>
        <AdminDashboard />
      </RoleBaseRoutes>
    </PrivateRoutes>
    }>

      <Route index element={<AdminSummary />} />
      <Route path='/admin-dashboard/departments' element={<DepartmentList />} />
      <Route path='/admin-dashboard/department/:id' element={<EditDepartment />} />
      <Route path='/admin-dashboard/add-department' element={<AddDepartment />} />


      <Route path='/admin-dashboard/employees' element={<List />} />
      <Route path='/admin-dashboard/add-employee' element={<Add />} />
      <Route path='/admin-dashboard/employee_view/:id' element={<View />} />
      <Route path='/admin-dashboard/employee/edit/:id' element={<EditEmployee />} />

      <Route path='/admin-dashboard/add-salary' element={<AddSalary />} />
      <Route path='/admin-dashboard/employee/salary/:id' element={<ViewSalary />} />



    
    </Route>



    <Route path='/employee-dashboard' element={
      <PrivateRoutes>
        <RoleBaseRoutes requiredRole={["admin", "employee"]}>
 
      <EmployeeDashboard />

      </RoleBaseRoutes>
      </PrivateRoutes>
      } >
        <Route index element={<SummaryEmployee />} />

        <Route path='/employee-dashboard/profile/:id'  element={<ProfileEmployee />}/>
        <Route path='/employee-dashboard/leaves'  element={<ListLeaves />}/>
        <Route path='/employee-dashboard/add-leave'  element={<AddLeave />}/>




    </Route>



  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
