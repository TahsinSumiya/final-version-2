import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import './css/Sidebar.css'
import { useNavigate } from 'react-router-dom';
export default function AdminSideBar() {
  const navigate = useNavigate()
  const handlelogout = () => {

   
    localStorage.removeItem('admin');
    navigate('/admin')
  };
  return (
    <>
         <div class="fixed top-0 left-0 min-h-screen flex flex-col justify-center items-center">
        <div class=" bg-sky-600 h-screen overflow-y-auto w-[200px] pt-10">
         
          <div className=''><Link to='/categoryuploader' class="flex items-center
             text-white  rounded-md transition duration-300 py-2">
                <i class="bi bi-plus-square-fill text-3xl flex items-center justify-center pb-2 "></i>
                <p className=' capitalize font-semibold text-md'>add category</p>
            </Link>
</div>
            
            <div className='my-5'>
            <Link to='/adminboard/adminlayout' class="flex items-center 
             text-white  rounded-md transition duration-300 py-2">
                <i class="bi bi-cloud-arrow-up-fill text-3xl flex items-center justify-center pb-2 "></i>
                <p className=' capitalize font-semibold text-md'>upload Design</p>
            </Link>
            </div>
            <Link to='/layoutbyadmin' class="flex items-center
             text-white  rounded-md transition duration-300 py-2">
                <i class="bi bi-person-check-fill text-3xl flex items-center justify-center pb-2 "></i>
                <p className=' capitalize font-semibold text-md'>admin layouts</p>
            </Link>
            <div className='my-5'>
            <Link to='/adminboard/notification' class="flex items-center text-white  rounded-md transition duration-300 py-2">
            <i class="bi bi-check-all text-3xl flex items-center justify-center pb-2 "></i>
            <p className=' capitalize font-semibold text-md'>all layouts</p>
            </Link>
            </div>
            <div className='my-5'>
            <Link to='/getrequest' class="flex items-center text-white  rounded-md transition duration-300 py-2">
            <i class="bi bi-card-checklist text-3xl flex items-center justify-center pb-2 "></i>
            <p className=' capitalize font-semibold text-md'>User Request</p>
            </Link>
            </div>
            <div className='my-5'>
            <Link to='/postnotice' class="flex items-center text-white  rounded-md transition duration-300 py-2">
            <i class="bi bi-bell-fill text-3xl flex items-center justify-center pb-2 "></i>
            <p className=' capitalize font-semibold text-md'>Post Notice</p>
            </Link>
            </div>
            <div className='my-5'>
            <Link to='/getnotice' class="flex items-center text-white  rounded-md transition duration-300 py-2">
            <i class="bi bi-card-list text-3xl flex items-center justify-center pb-2 "></i>
            <p className=' capitalize font-semibold text-md'>View Notice</p>
            </Link>
            </div>
            <div className='my-5'>
            <Link to='/allusers' class="flex items-center text-white  rounded-md transition duration-300 py-2">
            <i class="bi bi-people-fill text-3xl flex items-center justify-center pb-2 "></i>
            <p className=' capitalize font-semibold text-md'>All Users</p>
            </Link>
            </div>
            <div>
            <Link
            onClick={handlelogout}
              
              class="flex items-center text-white  rounded-md transition duration-300 py-2"
            >
              <i class="bi bi-box-arrow-left text-3xl flex items-center justify-center pb-2"></i>
              <p className='capitalize font-semibold text-md'>logout</p>
            </Link>
          </div>

        </div>
    </div>
    </>
  )
}
