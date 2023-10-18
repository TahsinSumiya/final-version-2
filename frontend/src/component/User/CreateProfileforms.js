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
export default function     CreateProfileforms() {
    
    
    const [linkedin, setlinkedin] = useState("");
    const [github, setgithub] = useState("");
    const [date, setdate] = useState(null); // Change the initial state for date to null
    const [category, setcategory] = useState("looking-for-job");
    const [email, setemail] = useState("");
    const [desc, setDesc] = useState("");
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const bodyJSON = {
                linkedin: linkedin,
                github: github,
                birthdate: date,
                user: user,
                uuid: user.uid,
                name:user.displayName,
                category: category,
                email: category === 'hiring' ? email : '',
                desc:desc 
            };

            const response = await axios.post("http://localhost:80/api/user/profile", bodyJSON);

     

                setlinkedin("");
                setgithub("");
                setdate(null);
                setcategory("looking-for-job");
                setemail("");
                setDesc("")
                alert('User created successfully!');
           
        } catch (error) {
            console.error('Error creating user:', error);
        }
    };
    const [userProfile, setUserProfile] = useState(null);
  return (
    <>
      
      <div class="mb-4">
              <div class="relative">
              <label for="textarea1" class="my-3 block text-sm font-medium text-gray-700">Github</label>
                  <input type="text" value={github} onChange={(e) => setgithub(e.target.value)}
                   class="w-full pl-10 pr-4 py-2 border 
                    focus:ring focus:ring-purple-400 focus:ring-opacity-50 
                    focus:border-transparent focus:outline-none rounded-lg" placeholder="Github link"/>
                 <label for="textarea1" class="my-3 block text-sm font-medium text-gray-700">LinkedIn</label>
                  <input type="text" value={linkedin} onChange={(e) => setlinkedin(e.target.value)}
                   class="w-full pl-10 pr-4 py-2 border 
                    focus:ring focus:ring-purple-400 focus:ring-opacity-50 
                    focus:border-transparent focus:outline-none rounded-lg" placeholder="LinkedIn"/>
                     <label for="textarea1" class="my-3 block text-sm font-medium text-gray-700">Description</label>
                  <textarea type="text"
                   class="w-full pl-10 pr-4 py-2 border 
                    focus:ring focus:ring-purple-400 focus:ring-opacity-50 
                    focus:border-transparent focus:outline-none rounded-lg"
                    value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                    placeholder="description"/>
                     <label for="textarea1" class="my-3 block text-sm font-medium text-gray-700">email</label>
                      <input type="email"
                   class="w-full pl-10 pr-4 py-2 border 
                    focus:ring focus:ring-purple-400 focus:ring-opacity-50 
                    focus:border-transparent focus:outline-none rounded-lg"
                    value={email}
                            onChange={(e) => setemail(e.target.value)}
                    placeholder="email"/>
                    
              </div>
              <label for="textarea1" class="my-3 block text-sm font-medium text-gray-700">Category</label>
              <select onChange={(e) => setcategory(e.target.value)}
               class="mt-2 w-full px-3 py-2 border rounded-md focus:ring focus:ring-purple-400 focus:ring-opacity-50 focus:border-transparent focus:outline-none rounded-lg">
                  <option value="looking for Job">Looking for Job</option>
                  <option value="hiring">Hiring</option>
              </select>
            <div className='flex my-5 end justify-end'>
            <label for="textarea1" class="block text-sm font-medium text-gray-700">date of Birth</label>
              <DatePicker className='mx-5  '
             placeholderText='10/12/3122'
                    selected={date}
                    onChange={date => setdate(date)}
                />
            </div>
            <div class="flex justify-around">
              <button type="submit" class="bg-purple-500 hover:bg-purple-600
               text-white py-2 px-4 rounded-md transition duration-300"
               onClick={handleSubmit}
               >Submit</button>
           
          </div>

          
          </div>
         
 
                                                                                                                       
    </>
  )
}
