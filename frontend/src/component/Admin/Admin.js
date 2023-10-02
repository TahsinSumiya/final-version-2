import React, { useEffect } from "react";
import { useState } from "react";
import axios from 'axios'

import { NavLink, redirect, useNavigate ,Link} from "react-router-dom";
import {FaEye} from 'react-icons/fa'
import Sidebar from "../Sidebar/Sidebar";
const Admin = (e) => {

  const [id,setId]=useState('');
  const [password,setPassword]=useState('');
  const [message, setMessage] = useState("");
  const [data,setData]=useState('')

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    
    setPasswordShown(!passwordShown);
  };
  // const {login,error,loading} = AdminloginHook()
 const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();

//     const response = await fetch('http://localhost:80/api/admin/login',{
//       method:'POST',
//       headers:{'Content-Type':'application/json'},
//       body:JSON.stringify({id,password})
//   })
//   const json = await response.json()
//   navigate("/adminboard")
//    setData(json)
//    console.log(setData)
// console.log(json)

try {
  const response = await fetch('http://localhost:80/api/admin/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id, password }),
  });
  const json = await response.json()
  // console.log(json)
  if(!response.ok){
   
    alert(json.error)
}
if(response.ok){
    localStorage.setItem('user',JSON.stringify(json))
    // dispatch({type:'LOGIN',payload:json})
    navigate("/adminboard")
}
} catch (error) {
  console.log('Error occurred during login', error);
}
  
  
  // }
  // else{
  //   console.log('Error occurred during login');
  // }

  // if(!data.password ===password && !data.id == id){

  //   toast.error("Invalid User",{
  //     position: "top-center"
  // })
      
  // }
  // if(data.password ==password && data.id == id){
 
      
  //     setMessage(true)
    
  //   }


  }
 
  // const enter = () => {
  //   if(!data.password ===password && !data.id == id){

  //     toast.error("Invalid User",{
  //       position: "top-center"
  //   })
        
  //   }
  //   if(data.password ==password && data.id == id){
  //     navigate("/adminboard")
        
  //       setMessage(true)
      
  //     }
  // };
 
    // useEffect(()=>{
      
    // },[data.password,data.id])


  return (
    // <div className="login">
    //   <h1>Login</h1>
    //   <form onSubmit={handleSubmit} >
    //     <span>
    //     {/* {message ? <p >Password Succesfulyy Update </p> : ""} */}
    //       <label htmlFor="email">id:</label>
    //       <input type="text" id="id" 
    //       onChange={(e)=>setId(e.target.value)} value={id}
    //        />
    //     </span>
    //     <span>
    //       <label htmlFor="password">Password:</label>
    //       <input type="text" id="password" 
    //       onChange={(e)=>setPassword(e.target.value)} value={password}
    //        />
    //     </span>
    //     {/* { data.password == password ? <NavLink to='adminboard'><button type="submit"> Login</button></NavLink>:
    //     <NavLink to='login'><button type="submit"> Login</button></NavLink>
    //     }  */}
    //     <button type="submit"  > Login</button>
      
    //   </form>
    // </div>
    <>
    <Sidebar/>
      <div class=" p-4 overflow-y-auto ml-16 ">
          
      <div class="lg:flex bg-purple-100 w-screen justify-center" >
      <div
        class="min-h-screen py-6 flex flex-col justify-center sm:py-12 lg:w-1/2 xl:max-w-screen-sm"
      >
     

        <div class="relative right-8 py-4  sm:max-w-xl ml-20">
          <div
            class="absolute inset-0 bg-gradient-to-r from-purple-300 to-purple-600 shadow-lg transform-skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
          ></div>

          <div
            class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20"
          >
            <div class="relative">
          
              <div class="relative">
                <h3
                  class="text-center text-2xl text-purple-900 font-display font-semibold lg:text-left xl:text-4xl xl:text-bold"
                >
                  Admin Login
                </h3>
              </div>
              <form onSubmit={handleSubmit} >
              <div class="divide-y divide-gray-200">
              <div>
                  <div class="flex justify-between items-center mt-8"></div>
                  <input
                    class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-purple-500"
                    type="text" name='id' id='id'
                    placeholder="Enter your email address"
                    onChange={(e)=>setId(e.target.value)} value={id}
                  />
                </div>
              <div class="relative ">
                    <input
                 
                      id="password"
                      name="password"
                   
                      type={passwordShown ? "text" : "password"}
                      onChange={(e)=>setPassword(e.target.value)} value={password}
                      class="relative mt-2 h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Enter your password"
                    />
                    <label for="password" class=""></label>
                    {/* <div
                      class="absolute self-end inset-y-3 inset-x-0  pr-5 flex items-center text-sm "
                    >
              <button   ><FaEye className='absolute inset-y-0 right-0 w-16'/> </button> 
                    </div> */}
                         <FaEye onClick={togglePassword} className='absolute  h-5 top-4 inset-y-0 right-0 w-16'/> 

                  </div>
               
               
                
               
                <div
                  class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
                 
                >
           

                  <div class="mt-10 justify-center">
                  <button
                      class="bg-purple-500 text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-purple-600 shadow-lg"
                    >
                      Log In
                    </button>

                  </div>
                 
                  <div
                    class="mt-10 text-sm font-display font-semibold text-gray-700 text-center"
                  >
                        <div
                    class="mt-10 text-sm font-display font-semibold text-gray-700 text-center"
                  >
                    
                  
                      {/* {error && <div className="mt-30">{error}</div>} */}

                  </div>
                  
                  </div>
             
                </div>
           
              </div>
              </form>
       
            </div>
     
          </div>
 
        </div>
      </div>

    
    </div> 
          </div></>
  
  );
};
export default Admin
