import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile ,
  signInWithRedirect,
  signInWithCredential,
  signInAnonymously
} from "firebase/auth";
import React, { useState,useEffect } from "react";
import { login, logout, selectUser } from "../../features/Slice";
import { useNavigate,Outlet } from "react-router-dom";
import { auth, provider } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import "./index.css";
import bg from "../static/Images/beforelogin.jpg"
function AuthIndex() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [register, setRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    
    setPasswordShown(!passwordShown);
  };
  function validateEmail(email) {
    const reg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(email) === false) {
      return false;
    } else return true;
  }


  
    const handleGoogleSignIN = () => {
      setLoading(true);
      signInWithPopup(auth, provider)
        .then((res) => {
          setLoading(false);
          console.log(res);
          localStorage.setItem('user', JSON.stringify(res.user));
          navigate("/");
  
          
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
        });
    };
  

  const handleSignIn = () => {
    setError();
    setLoading(true);
    if (email === "" || password === "") {
      setError("Required field is missing");
      setLoading(false);
    } else if (!validateEmail(email)) {
      setError("Email is malformed");
      setLoading(false);
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
          localStorage.setItem('user', JSON.stringify(res.user));
          dispatch(login(res.user)); // Set user data in local storage
          navigate("/");
          setLoading(false);
        })
        .catch((error) => {
          console.log(error.code);
          setError(error.message);
          setLoading(false);
        });
    }
  };
  
  useEffect(() => {
    if (username) {
      setError(""); // Clear any previous errors
    }
  }, [username]);

  const handleRegister = () => {
    setError("");
    setLoading(true);
  
    if (email === "" || password === "" || username === "") {
      setError("Required field is missing.");
      setLoading(false);
    } else if (!validateEmail(email)) {
      setError("Email is malformed");
      setLoading(false);
    } else {
      // Create user with email and password
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Set the displayName
          updateProfile(userCredential.user, {
            displayName: username,
          })
            .then(() => {
              console.log("Display Name set successfully:", username);
              localStorage.setItem('user', JSON.stringify(userCredential.user));
              dispatch(login(userCredential.user)); // Set user data in local storage
              navigate("/");
              setLoading(false);
            })
            .catch((error) => {
              console.error("Error setting display name:", error);
              setError(error.message);
              setLoading(false);
            });
        })
        .catch((error) => {
          console.error("Registration error:", error);
          setError(error.message);
          setLoading(false);
        });
    }
  };
  
  
  return (
<div class="lg:flex  w-screen h-screen" >
    <div
      class="min-h-screen py-6 flex flex-col justify-center sm:py-12 lg:w-1/2 xl:max-w-screen-sm"
    >


      <div class="relative right-8 py-4  sm:max-w-xl ml-20">
        <div
          class="absolute inset-0 bg-gradient-to-r from-slate-200 to-slate-400 shadow-lg transform-skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
        ></div>

        <div
          class="relative px-12 p-10  bg-white shadow-lg sm:rounded-3xl "
        >
          <div class="relative">
         
          
            <div class="relative">
              <h6
                class="text-center text-sm text-gray-900 font-display font-semibold lg:text-left xl:text-4xl xl:text-bold"
              >
                {register ? "Register" : "Login"} 
              </h6>
            </div>
        {register ? (
          <>
            {" "}
            <div class="divide-y divide-gray-200">
              
            <div>
                <div class="flex justify-between items-center mt-8"></div>
                <input
                  class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-purple-500"
                  type="text" name='name' id='name'
                  placeholder="Enter your user name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <div class="flex justify-between items-center mt-8"></div>
                <input
                  class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-purple-500"
                  type="email" name='email' id='email'
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
             
              <div
                class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
               
              >
                
                <div class="relative">
                  <input
               
                    id="password"
                    name="password"
                 
                    type={passwordShown ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    class="relative  h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Enter your password"
                  />
                  <label for="password" class=""></label>
                  {/* <div
                    class="absolute self-end inset-y-3 inset-x-0  pr-5 flex items-center text-sm "
                  >
            <button   ><FaEye className='absolute inset-y-0 right-0 w-16'/> </button> 
                  </div> */}
                       <i onClick={togglePassword} className='absolute  h-5 top-4 inset-y-0 right-0 w-16'/> 

                </div>

                <div class="mt-10">
                  <button onClick={handleRegister}
                    class="bg-blue-400 text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-blue-500 shadow-lg"
                  >
                    Sign up
                  </button>
                </div>
               
                <div
                  class="mt-10 text-sm font-display font-semibold text-gray-700 text-center"
                >
               
                </div>
          
              </div>
         
            </div>
          </>
        ) : (
          <>
            <div class="divide-y divide-gray-200">
         
              <div>
                <div class="flex justify-between items-center mt-8"></div>
                <input
                  class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-purple-500"
                  type="email" name='email' id='email'
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
             
              <div
                class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
               
              >
                
                <div class="relative">
                  <input
               
                    id="password"
                    name="password"
                 
                    type={passwordShown ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    class="relative  h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Enter your password"
                  />
                  <label for="password" class=""></label>
                  {/* <div
                    class="absolute self-end inset-y-3 inset-x-0  pr-5 flex items-center text-sm "
                  >
            <button   ><FaEye className='absolute inset-y-0 right-0 w-16'/> </button> 
                  </div> */}
                       <i onClick={togglePassword} className='absolute  h-5 top-4 inset-y-0 right-0 w-16'/> 

                </div>

                <div class="mt-10">
                  <button     onClick={handleSignIn}
                    class="bg-blue-400 text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-blue-500 shadow-lg"
                  >
                    Sign in
                  </button>
                </div>
               
                <div
                  class="mt-10 text-sm font-display font-semibold text-gray-700 text-center"
                >
               
                </div>
        
              </div>
         
            </div>
          </>
        )}

        <p className="mt-2"
          onClick={() => setRegister(!register)}
          style={{
            marginTop: "2px",
            textAlign: "center",
            color: "#0095ff",
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          {register ? "Login" : "Register"} ?
        </p>
        {error !== "" && (
      <p
        style={{
          color: "red",
          fontSize: "14px",
        }}
      >
        {error}
      </p>
    )}
    <div className="grid grid-cols-3 mx-w-xs my-5 mx-auto items-center">
      <hr className="border-2"/>
      <p className=" text-center">
        or
      </p>
      <hr className="border-2"/>
    </div>
    <div className="sign-option flex justify-center  ">
          
          <button onClick={handleGoogleSignIN} className="
          " style={{
            textAlign: "center",
            color: "#0095ff",
            textDecoration: "underline",
            cursor: "pointer",
          }}>
      
      <p><i class="bi bi-google text-white text-xs"></i> </p>
            Login with Google
          </button>
         
        </div>
      </div>
    </div>

      </div>
</div>
<div
      class="hidden  lg:flex items-center justify-center flex-1 h-screen "
    >
     
         <img  className="  h-4/5 px-6 top-0 right-16 object-cover" src={bg}></img>
 
      
    </div>
  </div>
 
  );
}

export default AuthIndex;