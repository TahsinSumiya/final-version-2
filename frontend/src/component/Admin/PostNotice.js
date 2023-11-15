import React, {useState} from 'react'
import axios from 'axios';
import { login, logout, selectUser } from "../../features/Slice";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from '../Sidebar/Sidebar';
import DeleteReq from "../Admin/DeleteReq"
import AdminSideBar from './AdminSideBar';
export default function Request() {
    const [notice, setNotice] = useState('');
    const [name, setName] = useState('');
 
    const user = useSelector(selectUser);
    const handleReq = async (e) => {
        e.preventDefault();
        try{
            axios.post('http://localhost:80/api/notice/postnotice', { 
                notice, name:"Admin"})
                .then(response => {
                  setNotice('');
                  setTimeout(function(){
                    alert("Notice uploaded")
                }, 2000);
            
                })
        }
        catch(error){
           console.error('Error submitting comment:', error);
        }
       
      
         
      };
  return (
    <>
    <AdminSideBar/>
    <div class="px-4 overflow-y-auto ml-16  ">
        <div class="min-h-screen flex justify-center items-center p-4">
          <div class=" bg-sky-50 p-9 rounded-md shadow-lg w-full md:w-4/5 lg:w-2/3">
            <form >
              <h1 class="text-3xl font-semibold mb-4 text-gray-500 text-center">
               Post Notice
              </h1>

              <div class="flex justify-center items-center py-2 px-3 gap-3 mt-4">
                <input
                  type="text"
                  class="w-full px-4 py-2 text-lg text-gray-900 bg-white border rounded-lg focus:ring focus:ring-blue-400 focus:ring-opacity-50 focus:border-transparent focus:outline-none"
                  placeholder="Send your notice" 
                  value={notice}
    onChange={(e) => setNotice(e.target.value)}
                />
              </div>

              <div class="flex justify-center items-center py-2 px-3 gap-3 mt-4">
                <button onClick={handleReq}
                  type="submit"
                  class="inline-flex items-center text-sm font-medium text-center text-white bg-blue-400 hover:bg-blue-500 rounded-lg pr-5 py-2"
                >
                  <i class="bi bi-send-plus-fill pt-1"></i>
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
