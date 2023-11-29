import React from 'react'
import { NavLink,Navigate ,redirect, useNavigate ,Link} from "react-router-dom";

import { login, logout, selectUser } from "../../features/Slice";
import Sidebar from '../Sidebar/Sidebar';
export default function AdminBoard() {
  const navigate = useNavigate()
  const handlelogout = () => {

   
    localStorage.removeItem('admin');
    navigate('/admin')
  };
  return (
    <>

<div class="min-h-screen flex justify-center items-center p-6">
        <div class=" bg-gray-50 p-9 rounded-lg shadow-2xl w-full md:w-4/5 lg:w-2/3">
          <div className="grid grid-cols-2 gap-10 px-10">
            <NavLink to="/categoryuploader" class="">
              <div class="grid justify-items-center gap-3 max-w-md mx-auto bg-gradient-to-r from-slate-100  to-slate-200 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 cursor-pointer w-full md:w-4/5">
                <h1 class="text-3xl font-semibold text-gray-500 text-center">
                  Add Catagory
                </h1>

                <i class="bi bi-plus-square-fill text-blue-400 text-3xl"></i>
              </div>
            </NavLink>

            <NavLink to="/adminboard/adminlayout" class="">
              <div class="grid justify-items-center gap-3 max-w-md mx-auto bg-gradient-to-r from-slate-100  to-slate-200 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 cursor-pointer w-full md:w-4/5">
                <h1 class="text-3xl font-semibold text-gray-500 text-center">
                  Upload Layout
                </h1>

                <i class="bi bi-cloud-arrow-up-fill text-blue-400 text-3xl"></i>
              </div>
            </NavLink>

            <NavLink to="/adminboard/notification" class="">
              <div class="grid justify-items-center gap-3 max-w-md mx-auto bg-gradient-to-r from-slate-100  to-slate-200 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 cursor-pointer w-full md:w-4/5">
                <h1 class="text-3xl font-semibold text-gray-500 text-center">
                  All Layouts
                </h1>

                <i class="bi bi-check-all text-blue-400 text-3xl"></i>
              </div>
            </NavLink>

            <NavLink to="/layoutbyadmin" class="">
              <div class="grid justify-items-center gap-3 max-w-md mx-auto bg-gradient-to-r from-slate-100  to-slate-200 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 cursor-pointer w-full md:w-4/5">
                <h1 class="text-3xl font-semibold text-gray-500 text-center">
                  Admin Layouts
                </h1>

                <i class="bi bi-person-check-fill text-blue-400 text-3xl"></i>
              </div>
            </NavLink>
            <NavLink to="/getrequest" class="">
              <div class="grid justify-items-center gap-3 max-w-md mx-auto bg-gradient-to-r from-slate-100  to-slate-200 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 cursor-pointer w-full md:w-4/5">
                <h1 class="text-3xl font-semibold text-gray-500 text-center">
                  requests
                </h1>

                <i class="bi bi-card-checklist text-blue-400 text-3xl"></i>
              </div>
            </NavLink>

            <NavLink to="/postnotice" class="">
              <div class="grid justify-items-center gap-3 max-w-md mx-auto bg-gradient-to-r from-slate-100  to-slate-200 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 cursor-pointer w-full md:w-4/5">
                <h1 class="text-3xl font-semibold text-gray-500 text-center">
                  Notice
                </h1>

                <i class="bi bi-bell-fill text-blue-400 text-3xl"></i>
              </div>
            </NavLink>
            <NavLink to="/getnotice" class="">
              <div class="grid justify-items-center gap-3 max-w-md mx-auto bg-gradient-to-r from-slate-100  to-slate-200 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 cursor-pointer w-full md:w-4/5">
                <h1 class="text-3xl font-semibold text-gray-500 text-center">
                  View Notices
                </h1>

                <i class="bi bi-card-list text-blue-400 text-3xl"></i>
              </div>
            </NavLink>
            <NavLink to="/allusers" class="">
              <div class="grid justify-items-center gap-3 max-w-md mx-auto bg-gradient-to-r from-slate-100  to-slate-200 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 cursor-pointer w-full md:w-4/5">
                <h1 class="text-3xl font-semibold text-gray-500 text-center">
                  All Users
                </h1>

                <i class="bi bi-people-fill text-blue-400 text-3xl"></i>
              </div>
            </NavLink>
          </div>
          <div className="flex justify-center mt-10">
            <Link
               onClick={handlelogout}
              class="inline-flex items-center py-3 px-6 text-lg font-medium text-center text-blue-400 shadow-md hover:shadow-lg"
            >
              <i class="bi bi-house-fill text-2xl mr-2"></i>
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    </>
 
  )
}
