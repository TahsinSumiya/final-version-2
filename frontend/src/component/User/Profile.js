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
import Sidebar from '../Sidebar/Sidebar';
import CreateProfileforms from './CreateProfileforms';
import UpdateUser from './UpdateUser'

export default function Profile() {
    const [linkedin, setlinkedin] = useState("");
    const [github, setgithub] = useState("");
    const [date, setdate] = useState(null); // Change the initial state for date to null
    const [category, setcategory] = useState("looking-for-job");
    const [email, setemail] = useState("");
    const [desc, setDesc] = useState("");
    const [image, setImage] = useState("");
    const user = useSelector(selectUser);
    const [profileCreated, setProfileCreated] = useState(false);
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
   
      
    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     try {
    //         const bodyJSON = {
    //             linkedin: linkedin,
    //             github: github,
    //             birthdate: date, // Use the date state directly
    //             user: user,
    //             uuid: user.uid,
    //             name: user.displayName,
    //             category: category,
    //             email: category === 'hiring' ? email : '',
    //             desc:desc 
    //         };

    //         const response = await axios.post("http://localhost:80/api/user/profile", bodyJSON);

    //         if (response.status === 200) { // Check the response status
    //             alert('User created successfully!');
    //             // Reset the form or perform any other necessary actions
    //             setlinkedin("");
    //             setgithub("");
    //             setdate(null);
    //             setcategory("looking-for-job");
    //             setemail("");
    //             setDesc("")
    //         } else {
    //             alert('Failed to create user.');
    //         }
    //     } catch (error) {
    //         console.error('Error creating user:', error);
    //     }
    // };
    const [userProfile, setUserProfile] = useState(null);
  
  
    useEffect(() => {
      // Fetch user profile by user UID
      axios
        .get(`http://localhost:80/api/user/getuserpofile/${user.uid}`)
        .then((response) => {
          setUserProfile(response.data);
          setProfileCreated(true);
          console.log(response.data.image)
          
        })
        .catch((error) => {
          console.error('Error fetching user profile:', error);
        });
    }, [user.uid]); 
    return (
      <>

      <Sidebar />
      <div class=" p-4  ml-16 ">
        <div class="p-10 px-28">
          <div class="bg-gradient-to-r from-slate-100 to-gray-100 py-4 rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer">
            <h1 class="text-2xl font-semibold mb-4 text-gray-500 flex items-center">

            {userProfile && userProfile.image ? (
  <img className="rounded-full w-10 h-10 ml-2" src={`http://localhost:80/images/${userProfile.image}`} alt='profile-image' />
) : (
<img className="rounded-full w-10 h-10 ml-2" src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAACHCAMAAAALObo4AAAAMFBMVEXk5ueutLeqsbTR1dfn6erh4+S3vL+xt7rq7O3IzM7c3+DBxsi/w8bY292mrbDM0NI2fN7cAAADGklEQVR4nO2a2XLrIAxAWcRiDPj///ZCUrdJm9gSQSQzl/OYl5yRxGIJISaTyWQymUwmk8lk8n8CF96sYNK2rDHGRSfzJhkQYbFO7UhntRlvAl7b8ud3KBmDH6yh5S+JK9mGgTEBYx9a1JioZZiG108kriZ2UJnA+iwYe3LSEJEzjRISzS9yGo0xIh6jUVLDvGxAozSkdIbVw+As6qrhDAhYrIdUG58IbMisXET4MuMJGlKtXAGBheIhVWDyEI6iIVXkCQh6zX7DUyGExfIVkI3FIxA1pLQstyJyWmTmKBCIZA+W485TLZi2EMh0kdhfQyRyWsqp21+DvntU+u8gpDNuh+GsIx4uXx79j5jp8aEen1KnLeuW49ZuGvZT219D+A/Z1z3tVlhRC8c5R18wPDdl+kGneLpU1MQwXdiRn/o3HolDg54YhtvHFdqHA9uXNiTSFsIWDuGftitHhqMQKBXC2Fom7GV8X/sXsKXKmZUK8tRVHCftHQml4dgbuZj7kGLuWl5FTneRojGiwQ7BHYaEt3V6K2IOWxA8XaDHJtvvmdhPTkYOpATA8mgwpqwePKArydnsnUqJkE3iDbNTgLBFlXOdmubson7XBLeqeDCpYLx/l0Qdphthdvafxip4EbYlRutcLYxaJs7auC6XwAxyMHqxl6r4u1xqodhVB8G7akrY01pn+kfbaV04LibDtnTAp/XM4UdGWs1RLWWRLliHXSXH1Fml5MM+flhwkiG79UyPT5SL+r2K23rFBJJraH3cBKVLTCDQ5wy/TezrDw/80xOeZLK+FpKzqxde5KXviLbe/hOTtVmD3PA4FrGtl/hOOfmm6Z1Mt9K4pWFeZxg0GgaHhsGikIkiht60xaFINQLN58k5hFXjX97Kj0AHpOf29Rf8hoZ+jNQogqxV8vsKMqgS4c1KBTf2b3hPQCUjAsIfjgJmEMFeHRLVXG151kD3OB2YQRyggZgBsB0s95yOiFBt2g4eJ0u3aYrfxHFHwI9YLZV8nJaWoXUTJwXSMsRv8zj+nklZDeK4UIMeBdNsdzKZTCaTW/4ByiEj7A+wD4oAAAAASUVORK5CYII=' alt='profile-image' />
)}

            </h1>

            {userProfile ? (
              <div>
                <div class="mb-4 pl-4">
                  <h2 class="text-slate-400 mr-4">
                    {userProfile.name}
                  </h2>
                  
                  <Link
                    to={userProfile.linkedin}
                    target="_blank"
                    class="text-slate-600 hover:underline mr-4 hover:text-blue-600"
                  >
                    LinkedIn
                  </Link>
                  <Link
                    to={userProfile.github}
                    target="_blank"
                    class="text-gray-800 hover:underline hover:text-blue-600"
                  >
                    GitHub
                  </Link>
                  
                  <p class="text-gray-500 mb-4">{userProfile.desc}</p>
                
                  <p class="text-gray-500 mb-4 font-medium">Goals : {userProfile.goals}</p>
                  <a href={`mailto:${userProfile.email}`} className="text-gray-500 mb-4">Contact Email: {userProfile.email}</a>


                  {/* <Link to={userProfile.email} class="text-gray-500 mb-4">ContactEmail: {userProfile.email}</Link> */}
                  <p class="text-gray-800 font-semibold mb-4"> {userProfile.category}</p>
                </div>
              </div>
            ) : (
              <p className="pl-4">Create a public profile Show your Information </p>
            )}
          </div>

          <div class="bg-gradient-to-r from-slate-100 to-gray-100 p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer mt-8">
            {profileCreated ? <UpdateUser /> : <CreateProfileforms />}

            {/*   

          <div class="mb-4">
              <div class="relative">
              <label for="textarea1" class="my-3 block text-sm font-medium text-gray-700">Github</label>
                  <input type="text" value={github} onChange={(e) => setgithub(e.target.value)}
                   class="w-full pl-10 pr-4 py-2 border 
                    focus:ring focus:ring-slate-400 focus:ring-opacity-50 
                    focus:border-transparent focus:outline-none rounded-lg" placeholder="Github link"/>
                 <label for="textarea1" class="my-3 block text-sm font-medium text-gray-700">LinkedIn</label>
                  <input type="text" value={linkedin} onChange={(e) => setlinkedin(e.target.value)}
                   class="w-full pl-10 pr-4 py-2 border 
                    focus:ring focus:ring-slate-400 focus:ring-opacity-50 
                    focus:border-transparent focus:outline-none rounded-lg" placeholder="LinkedIn"/>
                     <label for="textarea1" class="my-3 block text-sm font-medium text-gray-700">Description</label>
                  <textarea type="text"
                   class="w-full pl-10 pr-4 py-2 border 
                    focus:ring focus:ring-slate-400 focus:ring-opacity-50 
                    focus:border-transparent focus:outline-none rounded-lg"
                    value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                    placeholder="description"/>
                     <label for="textarea1" class="my-3 block text-sm font-medium text-gray-700">email</label>
                      <input type="email"
                   class="w-full pl-10 pr-4 py-2 border 
                    focus:ring focus:ring-slate-400 focus:ring-opacity-50 
                    focus:border-transparent focus:outline-none rounded-lg"
                    value={email}
                            onChange={(e) => setemail(e.target.value)}
                    placeholder="email"/>
                    
              </div>
              <label for="textarea1" class="my-3 block text-sm font-medium text-gray-700">Category</label>
              <select onChange={(e) => setcategory(e.target.value)}
               class="mt-2 w-full px-3 py-2 border rounded-md focus:ring focus:ring-slate-400 focus:ring-opacity-50 focus:border-transparent focus:outline-none rounded-lg">
                  <option value="looking for Job">Looking for Job</option>
                  <option value="hiring">Hiring</option>
              </select>
            <div className='flex my-5'>
            <label for="textarea1" class="block text-sm font-medium text-gray-700">date of Birth</label>
              <DatePicker className='mx-5 w-5 bg-slate-500'
                    selected={date}
                    onChange={date => setdate(date)}
                />
            </div>
              
          </div>
   */}
          </div>
        </div>
      </div>
      </>

    );
}
