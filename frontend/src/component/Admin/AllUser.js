import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import AdminSideBar from './AdminSideBar';

export default function AllUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch all users
    axios.get(`http://localhost:80/api/user/getfirebaseAllUsers`)
      .then((response) => {
        setUsers(response.data.reverse(0));
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });

  }, []);

  return (
    <>
      <AdminSideBar />

      <div className="p-20 ml-16 bg-gray-200 h-screen overflow-y-auto">
      <p className="mt-3 mx-36 inline-flex items-center py-2.5 px-4 text-xs font-medium text-center
       text-black bg-blue-300  rounded-lg">
      All Users ({users.length})
    </p>
      

        {users.map((u) => (
          <div key={u.uid} className="grid grid-cols-3 gap-6 w-[400px] mx-auto p-9 px-16 mt-4
           text-gray-900 bg-gradient-to-r from-slate-100 to-slate-300 rounded-md text-center">
            <div className="col-span-4">
              <Link to={`/specificuser?s=${u.uid}`} className="text-2xl 
              font-semibold mb-4 text-gray-500 text-justify">
                {u.displayName}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
