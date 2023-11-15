import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminSideBar from './AdminSideBar';
import DeleteReq from './DeleteReq'
import { Link } from 'react-router-dom';
export default function GetRequest() {
  const [req, setReq] = useState(null); // Correct usage of useState

  useEffect(() => {
    async function fetchRequests() {
      try {
        const response = await axios.get('http://localhost:80/api/request/getreq');
        setReq(response.data.reverse(0));
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching requests:', error);
      }
    }

    fetchRequests();
  }, []); // Empty dependency array to run the effect only once after the initial render

  // Add a loading check before rendering the component
  if (req === null) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <AdminSideBar/>
 
      <div class="  justify-center items-center p-4 mt-28">
 
      {req.map((rq) => (
                <div class=" grid grid-cols-6 gap-6 w-[900px] mx-auto p-9  px-16  mt-4 text-gray-900  bg-gradient-to-r from-slate-100  to-slate-300 rounded-md ">
                   <DeleteReq id={rq._id}/>
                    <div class=" col-span-4">
                      <Link to={`/specificuser?s=${rq.id}`} class="text-2xl font-semibold mb-4 text-gray-500">
                      {rq.name}
                      </Link>

                      <p class="text-gray-500 mb-4 w-full">{rq.request}</p>
                  
                  </div>
                    
                </div>
               ))}
                </div>
    </>
  );
}
