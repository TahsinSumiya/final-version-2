import React, {useState,useEffect} from 'react'
import axios from 'axios';
import AdminSideBar from './AdminSideBar';
import DeleteNotice from './DeleteNotice'
export default function GetNotice() {
    const [req, setReq] = useState(null); // Correct usage of useState

  useEffect(() => {
    async function fetchRequests() {
      try {
        const response = await axios.get('http://localhost:80/api/notice/getnotice');
        setReq(response.data);
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
      <div className="p-20 ml-16 bg-gray-200 h-screen overflow-y-auto">
        {req.map((rq) => (
           <div class=" grid grid-cols-6 gap-6 w-[900px] mx-auto p-9  px-16  mt-4 text-gray-900  bg-gradient-to-r from-slate-100  to-slate-300 rounded-md ">
           <DeleteNotice id={rq._id}/>
            <div class=" col-span-4">
              <h1 class="text-2xl font-semibold mb-4 text-gray-500">
              {rq.name}
              </h1>

              <p class="text-gray-500 mb-4 w-full">{rq.notice}</p>
          
          </div>
            
        </div>
        ))}
      </div>
    </>
  )
}
