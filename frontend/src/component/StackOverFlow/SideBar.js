import React from 'react'
import { Link, useParams } from 'react-router-dom';
export default function SideBar() {
  return (
    <div class="flex ">
          
    <aside class="flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-purple-200 
    border-r rtl:border-r-0 rtl:border-l  sticky top-0">
   
 
        <div class="flex flex-col justify-between flex-1 mt-2">
      
            <nav class="flex-1 -mx-3 space-y-5">
            
                <a class="flex no-underline  items-center px-3 py-2 text-purple-500 transition-colors duration-300 transform
                 rounded-lg hover:bg-gray-100" href="#">
                   <Link to="/"
        class="mx-10 text-sm font-medium no-underline">Home</Link>
        
  
                </a>
    
                <a class="flex no-underline  items-center px-3 py-2 text-purple-500 transition-colors duration-300 transform
                 rounded-lg hover:bg-gray-100" href="#">
         <span><Link to="/question"
        class="mx-10 text-sm font-medium no-underline">Question</Link></span>
  
                </a>
                <a class="flex no-underline  items-center px-3 py-2 text-purple-500 transition-colors duration-300 transform
                 rounded-lg hover:bg-gray-100" href="#">
         <span><Link to="/search"
        class="mx-10 text-sm font-medium no-underline">Search users</Link></span>
  
                </a>
                <a class="flex no-underline  items-center px-3 py-2 text-purple-500 transition-colors duration-300 transform
                 rounded-lg hover:bg-gray-100" href="#">
         <span><Link to="/allusers"
        class="mx-10 text-sm font-medium no-underline">users</Link></span>
  
                </a>
                <a class="flex no-underline  items-center px-3 py-2 text-purple-500 transition-colors duration-300 transform
                 rounded-lg hover:bg-gray-100" href="#">
         <span><Link to="/profile"
        class="mx-10 text-sm font-medium no-underline">Profile</Link></span>
  
                </a>
                <a class="flex no-underline  items-center px-3 py-2 text-purple-500 transition-colors duration-300 transform
                 rounded-lg hover:bg-gray-100" href="#">
         <span><Link to="/searchjob"
        class="mx-10 text-sm font-medium no-underline">Search for job</Link></span>
  
                </a>
                <a class="flex no-underline  items-center px-3 py-2 text-purple-500 transition-colors duration-300 transform
                 rounded-lg hover:bg-gray-100" href="#">
         <span><Link to="/getcategory"
        class="mx-10 text-sm font-medium no-underline">category</Link></span>
  
                </a>
                <a class="flex no-underline  items-center px-3 py-2 text-purple-500 transition-colors duration-300 transform
                 rounded-lg hover:bg-gray-100" href="#">
         <span><Link to="/layoutuploader"
        class="mx-10 text-sm font-medium no-underline">LayoutUploader</Link></span>
  
                </a>
                <a class="flex no-underline  items-center px-3 py-2 text-purple-500 transition-colors duration-300 transform
                 rounded-lg hover:bg-gray-100" href="#">
         <span><Link to="/admin"
        class="mx-10 text-sm font-medium no-underline">admin</Link></span>
  
                </a>
                <a class="flex no-underline  items-center px-3 py-2 text-purple-500 transition-colors duration-300 transform
                 rounded-lg hover:bg-gray-100" href="#">
         <span><Link to="/userpost"
        class="mx-10 text-sm font-medium no-underline">userposts</Link></span>
  
                </a>
                
            </nav>
  
            
        </div>
    
    </aside>
   

  

</div>
  )
}
