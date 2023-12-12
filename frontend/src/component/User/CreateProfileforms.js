import React, { useState,useEffect } from 'react';
import DatePicker from "react-datepicker";  
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css"; 
import { login, logout, selectUser } from "../../features/Slice"; 
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from 'react-router-dom';
import { auth } from "../../firebase";
import UserPost from './UserPost';
import ViewProfile from './ViewProfile';
import { useNavigate } from "react-router-dom";
export default function     CreateProfileforms() {
    
    const navigate = useNavigate()
    const [linkedin, setlinkedin] = useState("");
    const [github, setgithub] = useState("");
    const [date, setdate] = useState(null); // Change the initial state for date to null
    const [category, setcategory] = useState("looking-for-job");
    const [email, setemail] = useState("");
    const [desc, setDesc] = useState("");
    const [goals, setGoals] = useState("");
    const user = useSelector(selectUser);
    const [selectedFile, setSelectedFile] = useState(null);
    const [ImageUrl, setImageUrl] = useState(null)
    const dispatch = useDispatch();
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!selectedFile) {
        alert('Please select an image file.');
        return;
    }
      try {
        const formData = new FormData();
        formData.append('image', selectedFile, selectedFile.name);
      
        formData.append('linkedin', linkedin);
        formData.append('github', github);
        formData.append('user', user);
        formData.append('uuid', user.uid);
        formData.append('name', user.displayName);
        formData.append('goals', goals);
        formData.append('category', category);
        formData.append('email', email);
        formData.append('desc', desc);
       

        const response = await axios.post("http://localhost:80/api/user/profile",formData);
  

        setImageUrl(response.data.imageUrl);
        setSelectedFile(null);
        setlinkedin("");
        setgithub("");
        setcategory("looking-for-job");
        setemail("");
        setDesc("");
        setGoals("");
        alert('User created successfully!');
      } catch (error) {
        console.error('Error creating user:', error);
      }
    };
    

    const [userProfile, setUserProfile] = useState(null);
  return (
    <>
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
                    focus:ring focus:ring-blue-300 focus:ring-opacity-50 
                    focus:border-transparent focus:outline-none rounded-lg" placeholder="Github link"/>
                 <label for="textarea1" class="my-3 block text-sm font-medium text-gray-700">LinkedIn</label>
                  <input type="text" value={linkedin}  onChange={(e) => setlinkedin(e.target.value)}
                   class="w-full pl-10 pr-4 py-2 border 
                    focus:ring focus:ring-blue-300 focus:ring-opacity-50 
                    focus:border-transparent focus:outline-none rounded-lg" placeholder="LinkedIn"/>
                     <label for="textarea1" class="my-3 block text-sm font-medium text-gray-700">Description</label>
                  <textarea type="text"
                   class="w-full pl-10 pr-4 py-2 border 
                    focus:ring focus:ring-blue-300 focus:ring-opacity-50 
                    focus:border-transparent focus:outline-none rounded-lg"
                    value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                    placeholder="description"/>

<label for="textarea1" class="my-3 block text-sm font-medium text-gray-700">Goals</label>
                      <input type="text"
                   class="w-full pl-10 pr-4 py-2 border 
                    focus:ring focus:ring-blue-300 focus:ring-opacity-50 
                    focus:border-transparent focus:outline-none rounded-lg"
                    value={goals}
                            onChange={(e) => setGoals(e.target.value)}
                    placeholder="your job category/goals"/>


                     <label for="textarea1" class="my-3 block text-sm font-medium text-gray-700">email</label>
                      <input type="email"
                   class="w-full pl-10 pr-4 py-2 border 
                    focus:ring focus:ring-blue-300 focus:ring-opacity-50 
                    focus:border-transparent focus:outline-none rounded-lg"
                    value={email}
                            onChange={(e) => setemail(e.target.value)}
                    placeholder="email"/>
                    
              </div>
              <label for="textarea1" class="my-3 block text-sm font-medium text-gray-700">Category</label>
              <select onChange={(e) => setcategory(e.target.value)}
               class="mt-2 w-full px-3 py-2 border focus:ring focus:ring-blue-300 focus:ring-opacity-50 focus:border-transparent focus:outline-none rounded-lg">
                  <option value="looking for Job">Looking for Job</option>
                  <option value="hiring">Hiring</option>
              </select>
            {/* <div className='flex my-5 end justify-end'>
            <label for="textarea1" class="block text-sm font-medium text-gray-700">date of Birth</label>
              <DatePicker className='mx-5  '
             placeholderText='10/12/3122'
                    selected={date}
                    onChange={date => setdate(date)}
                />
            </div> */}
            <div class="flex justify-around">
              <button type="submit" class="text-white hover:text-gray-700 bg-blue-400 hover:bg-slate-300 hover:border-blue-400 hover:border-b-4 border-blue-400 border-b-4 rounded-lg 
                                py-2 px-8  transition duration-300"
               onClick={handleSubmit}
               >Submit</button>
           
          </div>

          
          </div>
         
 
                                                                                                                       
    </>
  )
}
