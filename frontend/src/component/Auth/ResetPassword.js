import React, { useState } from 'react';
import { auth } from '../../firebase'
import { sendPasswordResetEmail } from "firebase/auth";
import { Link } from 'react-router-dom';
const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleResetPassword = () => {
  sendPasswordResetEmail(auth,email)
      .then(() => {
        setMessage('Password reset email sent. Check your inbox.');
      })
      .catch((error) => {
        setMessage(`Error: ${error.message}`);
      });
  };

  return (
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
                  Send  Email
                </h3>
              </div>
              <form >
              <div class="divide-y divide-gray-200">
               
                <div>
                  <div class="flex justify-between items-center mt-8"></div>
                  <input
                    class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-purple-500"
                    type="email" name='email' id='email'
                    placeholder="Enter your email address"
                    onChange={(e)=>setEmail(e.target.value)} value={email}
                  />
                </div>
               
                <div
                  class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
                 
                >
           

                  <div class="mt-10">
                    <button onClick={handleResetPassword}
                      class="bg-purple-500 text-gray-100 p-2 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-purple-600 shadow-lg"
                    >
                      Send
                    </button>
                  </div>
                 
                  <div
                    class="mt-10 text-sm font-display font-semibold text-gray-700 text-center"
                  >
                        <div
                    class="mt-10 text-sm font-display font-semibold text-gray-700 text-center"
                  >
                        <span>Back to</span> 
                    <Link to='/auth'
                      class=" cursor-pointer text-purple-600 hover:text-purple-800 no-underline"
                      ><span className='no-underline px-1'>Authentication</span> 
                      </Link>
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
  );
};

export default ResetPassword;
