import React from 'react'
import { NavLink, redirect, useNavigate ,Link} from "react-router-dom";
export default function AdminBoard() {
  return (
    <div>
  <ul  class="w-48 text-sm font-medium text-gray-900 bg-white border
       border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600">
     <NavLink to="/categoryuploader"><li class="w-full px-4 py-2 border-b border-gray-200
     rounded-t-lg dark:border-gray-600">Category upload</li></NavLink>
    
    <NavLink to="/adminboard/layoutupload"><li class="w-full px-4 py-2 border-b border-gray-200
     dark:border-gray-600">Layout upload</li></NavLink>
    <li class="w-full px-4 py-2 rounded-b-lg">Download</li>
</ul>
    </div>
  )
}
