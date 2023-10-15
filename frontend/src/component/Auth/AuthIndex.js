import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    updateProfile 
  } from "firebase/auth";
  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";
  import { auth, provider } from "../../firebase";
  // import "./index.css";
  
  function Index() {
    const navigate = useNavigate();
    const [register, setRegister] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
  
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

          // return (
          //   <>
  
          //   </>
          // );
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
            console.log(res);
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
            console.log("Username before updateProfile:", username); // Log the username before updateProfile
            // Set the displayName
            updateProfile(userCredential.user, {
              displayName: username, // Ensure username has the correct value here
            })
              .then(() => {
                console.log("Display Name set successfully:", username);
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
      <div className="auth">
        <div className=" flex">
          <p><i class="bi bi-google text-violet-500"></i> </p>
          <div className="sign-option s">
            <button onClick={handleGoogleSignIN} className="single-option text-2xl
            auth-container  mx-1 my-3 inline-flex items-center py-2.5 px-4 text-xs
            font-medium text-center text-white bg-purple-400
             hover:bg-purple-500 rounded-lg focus:border-transparent
              focus:outline-none
            ">
        
             
              Login with Google
            </button>
            <p>{loading ? "Signing in..." :''}</p>
          </div>
          <div className="auth-login">
          <div className="auth-login">
          <div className="auth-login-container">
            {register ? (
              <>
                {" "}
                <div className="input-field">
                  <p>Username</p>
                  <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                    type="text"
                  />
                </div>
                <div className="input-field">
                  <p>Email</p>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                  />
                </div>
                <div className="input-field">
                  <p>Password</p>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                  />
                </div>
                <button
                  onClick={handleRegister}
                  disabled={loading}
                  style={{
                    marginTop: "10px",
                  }}
                >
                  {loading ? "Registering..." : "Register"}
                </button>
              </>
            ) : (
              <>
                <div className="input-field">
                  <p>Email</p>
                  <input type="text" />
                </div>
                <div className="input-field">
                  <p>Password</p>
                  <input type="password" />
                </div>
                <button
                  onClick={handleSignIn}
                  disabled={loading}
                  style={{
                    marginTop: "10px",
                  }}
                >
                  {loading ? "Logging in..." : "Login"}
                </button>
              </>
            )}

            <p
              onClick={() => setRegister(!register)}
              style={{
                marginTop: "10px",
                textAlign: "center",
                color: "#0095ff",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              {register ? "Login" : "Register"} ?
            </p>
          </div>
        </div>
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
          </div>
  </div>
      </div>
    );
  }
  
  export default Index;