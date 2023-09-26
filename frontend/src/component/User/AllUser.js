import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { login, logout, selectUser } from "../../features/Slice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
export default function AllUser() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const [users, setUsers] = useState([]);
    const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
        
    // Fetch posts by user UID
    axios.get(`http://localhost:80/api/user/getfirebaseAllUsers`)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user posts:', error);
      });
  
}, []);

  return (
<div className='h-screen bg-gradient-to-r from-purple-100 via-teal-100 to-blue-100 py-16 animate-gradient'>

<div class="container mx-auto text-center">
        <h1 class="text-3xl sm:text-4xl md:text-4xl font-bold text-purple-400">All Users</h1>
    </div>
      
        {users.map((u) => (
              <div class="flex justify-between items-center pt-4 px-16 gap-3 mt-4 text-gray-900">
              <div class="flex-grow">
                  <div class="flex items-center justify-between text-xl font-medium text-white hover:text-gray-900 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 hover:from-purple-500 hover:via-purple-600 hover:to-purple-700 rounded-lg w-full py-2.5 px-4">
                      <div class=" flex">
                          <i class="bi bi-person-lines-fill mr-2"></i>
                          <span className='mt-3'> {u.displayName}</span>
                         
                      </div>
          
                      <div>
                          <span class="text-xl font-semibold">Click to see</span>
                          <Link to={`/specificuser?s=${u.uid}`} class=" text-lg font-medium hover:underline">Profile</Link>
                      </div>
                  </div>
              </div>
          </div>  
        
        ))}
    
    </div>





  )
}
