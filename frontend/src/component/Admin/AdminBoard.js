import React from 'react'
import { NavLink, redirect, useNavigate ,Link} from "react-router-dom";
import Sidebar from '../Sidebar/Sidebar';
export default function AdminBoard() {
  return (
    <>
    <Sidebar/>
      <div class=" p-4 overflow-y-auto ml-16 ">

      <div>
<div>
    <div
        class="bg-gradient-to-r from-purple-100 via-yellow-100 to-blue-200 min-h-screen flex justify-center items-center p-4">
        <div class="bg-opacity-30 backdrop-blur-lg p-9 rounded-md shadow-lg w-full md:w-4/5 lg:w-2/3">

            
            <div
                class="max-w-md mx-auto bg-gradient-to-r from-purple-100 via-yellow-100 to-gray-100 p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer mt-4 w-full md:w-4/5">
                <h1 class="text-3xl font-semibold mb-4 text-gray-500 text-center">Add Catagory</h1>

                <div class="flex justify-center items-center py-2 px-3 gap-3 mt-4">
                    <NavLink to="/categoryuploader" class="items-center py-2.5 px-4 text-xs font-medium text-center text-white hover:shadow-lg rounded-lg">
                        <i class="bi bi-plus-square-fill text-purple-400 text-3xl"></i> 
                    </NavLink>
                </div>
            </div>

            
            <div
                class="max-w-md mx-auto bg-gradient-to-r from-purple-100 via-yellow-100 to-gray-100 p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer mt-4 w-full md:w-4/5">
                <h1 class="text-3xl font-semibold mb-4 text-gray-500 text-center">Upload Layout</h1>

                <div class="flex justify-center items-center py-2 px-3 gap-3 mt-4">
                    <NavLink to="/adminboard/adminlayout" class="items-center py-2.5 px-4 text-xs font-medium text-center text-white hover:shadow-lg rounded-lg">
                        <i class="bi bi-cloud-arrow-up-fill text-purple-400 text-3xl"></i> 
                    </NavLink>
                </div>
            </div>
            <div
                class="max-w-md mx-auto bg-gradient-to-r from-purple-100 via-yellow-100 to-gray-100 p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer mt-4 w-full md:w-4/5">
                <h1 class="text-3xl font-semibold mb-4 text-gray-500 text-center">All Layouts</h1>

                <div class="flex justify-center items-center py-2 px-3 gap-3 mt-4">
                    <NavLink to="/adminboard/notification" class="items-center py-2.5 px-4 text-xs font-medium text-center text-white hover:shadow-lg rounded-lg">
                        <i class="bi bi-cloud-arrow-up-fill text-purple-400 text-3xl"></i> 
                    </NavLink>
                </div>
            </div>
            <div
                class="max-w-md mx-auto bg-gradient-to-r from-purple-100 via-yellow-100 to-gray-100 p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer mt-4 w-full md:w-4/5">
                <h1 class="text-3xl font-semibold mb-4 text-gray-500 text-center">Admin Layouts</h1>

                <div class="flex justify-center items-center py-2 px-3 gap-3 mt-4">
                    <NavLink to="/layoutbyadmin" class="items-center py-2.5 px-4 text-xs font-medium text-center text-white hover:shadow-lg rounded-lg">
                        <i class="bi bi-cloud-arrow-up-fill text-purple-400 text-3xl"></i> 
                    </NavLink>
                </div>
            </div>

            <div class="flex justify-center items-center py-2 px-3 gap-3 mt-4">
                <a href="#" class="inline-flex items-center py-3 px-6 text-lg font-medium text-center text-purple-400 shadow-md">
                    <i class="bi bi-house-fill text-2xl mr-2"></i> 
                    Go to Home
                </a>
            </div>
            
        </div>
    </div>
</div>
    </div>   
</div>
    </>
 
  )
}
