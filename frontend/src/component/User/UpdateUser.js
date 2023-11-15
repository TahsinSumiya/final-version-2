import { Axios } from 'axios';
import React, { useState,useEffect } from 'react';
import DatePicker from "react-datepicker";  
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css"; 
import { login, logout, selectUser } from "../../features/Slice"; 
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { auth } from "../../firebase";
import UserPost from './UserPost';
import ViewProfile from './ViewProfile';
import Sidebar from '../Sidebar/Sidebar';
export default function UpdateUser() {
  const [linkedin, setlinkedin] = useState("");
  const [github, setgithub] = useState("");
  const [date, setdate] = useState(null); // Change the initial state for date to null
  const [category, setcategory] = useState("looking-for-job");
  const [email, setemail] = useState("");
  const [desc, setDesc] = useState("");
  const user = useSelector(selectUser);
  const [selectedFile, setSelectedFile] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const response = await axios.get(`http://localhost:80/api/user/getuserpofile/${user.uid}`);
        const userData = response.data;

        setlinkedin(userData.linkedin || '');
        setgithub(userData.github || '');
        setcategory(userData.category || '');
        setemail(userData.email || '');
        setDesc(userData.desc || '');
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData(); // Call the fetch function when the component mounts
  }, [user.uid]);
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const formData = new FormData();
      formData.append('image', selectedFile, selectedFile.name);
    
      formData.append('linkedin', linkedin);
      formData.append('github', github);
      formData.append('user', user);
      formData.append('uuid', user.uid);
      formData.append('name', user.displayName);
      formData.append('category', category);
      formData.append('email', category === 'hiring' ? email : '');
      formData.append('desc', desc);
     

      const response = await axios.put(`http://localhost:80/api/user/profile/${user.uid}`,formData);


      // Reset form fields after successful submission
      setSelectedFile(null);
      setlinkedin("");
      setgithub("");
      setcategory("looking-for-job");
      setemail("");
      setDesc("");
      alert('User updated successfully!');
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <>

<div className='px-24'>
    <div class="px-12 bg-gradient-to-r from-slate-100  to-slate-200 p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer mt-8">
         
  

 

         <div class="mb-4">
         <label for="textarea1" class="my-3 block text-sm font-medium text-gray-700">Image</label>
                <input
                  type="file"
                  className="w-full pl-10 pr-4 py-2 border bg-white 
                  focus:ring focus:ring-blue-300 focus:ring-opacity-50 
                  focus:border-transparent focus:outline-none rounded-lg"
                  onChange={(e) => setSelectedFile(e.target.files[0])}  
                />
             <div class="relative">
             <label for="textarea1" class="my-3 block text-sm font-medium text-gray-700">Github</label>
                 <input type="text" value={github} onChange={(e) => setgithub(e.target.value)}
                  class="w-full pl-10 pr-4 py-2 border 
                   focus:ring focus:blue-blue-400 focus:ring-opacity-50 
                   focus:border-transparent focus:outline-none rounded-lg" placeholder="Github link"/>
                <label for="textarea1" class="my-3 block text-sm font-medium text-gray-700">LinkedIn</label>
                 <input type="text" value={linkedin} onChange={(e) => setlinkedin(e.target.value)}
                  class="w-full pl-10 pr-4 py-2 border 
                   focus:ring focus:blue-purple-400 focus:ring-opacity-50 
                   focus:border-transparent focus:outline-none rounded-lg" placeholder="LinkedIn"/>
                    <label for="textarea1" class="my-3 block text-sm font-medium text-gray-700">Description</label>
                 <textarea type="text"
                  class="w-full pl-10 pr-4 py-2 border 
                   focus:ring focus:ring-blue-400 focus:ring-opacity-50 
                   focus:border-transparent focus:outline-none rounded-lg"
                   value={desc}
                           onChange={(e) => setDesc(e.target.value)}
                   placeholder="description"/>
                    <label for="textarea1" class="my-3 block text-sm font-medium text-gray-700">email</label>
                     <input type="email"
                  class="w-full pl-10 pr-4 py-2 border 
                   focus:ring focus:ring-blue-400 focus:ring-opacity-50 
                   focus:border-transparent focus:outline-none rounded-lg"
                   value={email}
                           onChange={(e) => setemail(e.target.value)}
                   placeholder="email"/>
                   
             </div>
             <label for="textarea1" class="my-3 block text-sm font-medium text-gray-700">Category</label>
             <select onChange={(e) => setcategory(e.target.value)}
              class="mt-2 w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-400 focus:ring-opacity-50 focus:border-transparent focus:outline-none">
                
                <option value="">Select a category</option>
                 <option value="looking for Job">Looking for Job</option>
                 <option value="hiring">Hiring</option>
             </select>
       
             
         </div>
 
         <div class="flex justify-around">
             <button type="submit" class="inline-flex items-center py-2.5 px-4 text-xs 
                             font-medium text-center text-white hover:text-gray-700 bg-blue-400 hover:bg-slate-300 hover:border-blue-400 hover:border-b-4 border-blue-400 border-b-4 rounded-lg"
              onClick={handleSubmit}
              >Submit</button>
          
         </div>
 
    
     </div>
     </div>
    </>
    
    
  )
}
