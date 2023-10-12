import React from 'react'
import { Link } from 'react-router-dom'
export default function AdminSideBar() {
  return (
    <>
      <div class="fixed top-0 left-0 bg-gradient-to-r bg-purple-200 min-h-screen flex flex-col justify-center items-center p-4">
        <div class="h-screen overflow-y-auto flex flex-col justify-center items-center">
         
            <Link to='/categoryuploader' class="bg-purple-500 hover:bg-purple-600
             text-white py-3 px-1 rounded-md transition duration-300 mb-2">
                <i class="bi bi-plus-square-fill text-3xl"></i>
            </Link>

            
            <Link to='/adminboard/adminlayout' class="bg-purple-500 hover:bg-purple-600
             text-white py-3 px-1 rounded-md transition duration-300 mb-2">
                <i class="bi bi-cloud-arrow-up-fill text-3xl"></i>
            </Link>
            <Link to='/layoutbyadmin' class="bg-purple-500 hover:bg-purple-600
             text-white py-3 px-1 rounded-md transition duration-300 mb-2">
                <i class="bi bi-person-check-fill text-3xl"></i>
            </Link>
            <Link to='/adminboard/notification' class="bg-purple-500
             hover:bg-purple-600 text-white py-3 px-1 rounded-md transition duration-300 mb-2">
            <i class="bi bi-check-all text-3xl"></i>
            </Link>

        </div>
    </div>
    </>
  )
}
