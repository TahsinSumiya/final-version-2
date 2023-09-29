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
import './css/profile.css'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
export default function Profile() {
    const [linkedin, setlinkedin] = useState("");
    const [github, setgithub] = useState("");
    const [date, setdate] = useState(null); // Change the initial state for date to null
    const [category, setcategory] = useState("looking-for-job");
    const [email, setemail] = useState("");
    const [desc, setDesc] = useState("");
    const user = useSelector(selectUser);

    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false) 

    const [text, setText] = useState('');

  const toggleVisible = () => setVisible(!visible) 
    const [isActive, setIsActive] = useState({
      id: 'divOne',
      })
 
        const hideShowDiv = (e) => {
        setIsActive({
        id: e.target.id,
        })
        toggleVisible()
        }
   
      
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const bodyJSON = {
                linkedin: linkedin,
                github: github,
                birthdate: date, // Use the date state directly
                user: user,
                uuid: user.uid,
                name: user.displayName,
                category: category,
                email: category === 'hiring' ? email : '',
                desc:desc 
            };

            const response = await axios.post("http://localhost:80/api/user/profile", bodyJSON);

            if (response.status === 200) { // Check the response status
                alert('User created successfully!');
                // Reset the form or perform any other necessary actions
                setlinkedin("");
                setgithub("");
                setdate(null);
                setcategory("looking-for-job");
                setemail("");
                setDesc("")
            } else {
                alert('Failed to create user.');
            }
        } catch (error) {
            console.error('Error creating user:', error);
        }
    };
    const [userProfile, setUserProfile] = useState(null);
  
  
    useEffect(() => {
      // Fetch user profile by user UID
      axios
        .get(`http://localhost:80/api/user/getuserpofile/${user.uid}`)
        .then((response) => {
          setUserProfile(response.data);
        })
        .catch((error) => {
          console.error('Error fetching user profile:', error);
        });
    }, [user.uid]); 
    return (
        <div class="bg-gradient-to-l from-blue-100 via-blue-100 to-purple-100 p-4">
        <div class="bg-gradient-to-r from-purple-100 via-yellow-100 to-gray-100 p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer">
              <h1 class="text-2xl font-semibold mb-4 text-gray-500">
                  <i class="bi bi-person-lines-fill mr-2"></i>
                  User Profile
              </h1>
  
              {userProfile ? ( 
  <div>
         
              <div class="mb-4">
              <h2   class="text-purple-400 hover:text-purple-200 mr-4">{userProfile.name}</h2>
                  <Link to={userProfile.linkedin} target="_blank" class="text-purple-600 hover:underline mr-4">LinkedIn</Link>
                  <Link to={userProfile.github} target="_blank" class="text-gray-800 hover:underline">GitHub</Link>
              </div>
  
              <p class="text-gray-500 mb-4">{userProfile.desc}</p>
  
           
              <p class="text-gray-500 mb-4">Email: {userProfile.email}</p>
        </div>
      ) : (
        <p>Loading user profile...</p>
      )}
        </div>
  
        <div class="bg-gradient-to-r from-purple-100 via-yellow-100 to-gray-100 p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer mt-8">
         
  
          <div class="mb-4">
              <a href="https://www.linkedin.com/" target="_blank" class="text-purple-600 hover:underline mr-4">LinkedIn</a>
              <a href="https://github.com/" target="_blank" class="text-gray-800 hover:underline">GitHub</a>
          </div>
  

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
            <div className='flex my-5'>
            <label for="textarea1" class="block text-sm font-medium text-gray-700">date of Birth</label>
              <DatePicker className='mx-5 w-5 bg-purple-500'
                    selected={date}
                    onChange={date => setdate(date)}
                />
            </div>
              
          </div>
  
          <div class="flex justify-around">
              <button type="submit" class="bg-purple-500 hover:bg-purple-600
               text-white py-2 px-4 rounded-md transition duration-300"
               onClick={handleSubmit}
               >Submit</button>
              <Link to='updateprofile' type="submit" class="bg-purple-500 hover:bg-purple-600
               text-white py-2 px-4 rounded-md transition duration-300">Update</Link>
          </div>
  
      <UserPost/>
      </div>
         
        
        
        
  </div>
    );
}
