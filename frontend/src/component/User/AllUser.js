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
    <div>
    halu users
      <ul>
        {users.map((u) => (
          <li >
           
           <Link to={`/specificuser?s=${u.uid}`}><h4>{u.displayName}</h4></Link>
           
      
          </li>
        ))}
      </ul>
    </div>
  )
}
