import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
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
  
    // const handleSignIn = () => {
    //   setError();
    //   setLoading(true);
    //   if (email === "" || password === "") {
    //     setError("Required field is missing");
    //     setLoading(false);
    //   } else if (!validateEmail(email)) {
    //     setError("Email is malformed");
    //     setLoading(false);
    //   } else {
    //     signInWithEmailAndPassword(auth, email, password)
    //       .then((res) => {
    //         console.log(res);
    //       navigate("/");
    //         setLoading(false);
    //       })
    //       .catch((error) => {
    //         console.log(error.code);
    //         setError(error.message);
    //         setLoading(false);
    //       });
    //   }
    // };
  
    // const handleRegister = () => {
    //   setError("");
    //   setLoading(false);
    //   if (email === "" || password === "" || username === "") {
    //     setError("Required field is missing.");
    //     setLoading(false);
    //   } else if (!validateEmail(email)) {
    //     setError("Email is malformed");
    //     setLoading(false);
    //   } else {
    //     createUserWithEmailAndPassword(auth, email, password)
    //       .then((res) => {
    //         console.log(res);
    //      navigate("/");
    //         setLoading(false);
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //         setError(error.message);
    //         setLoading(false);
    //       });
    //   }
    // };
    return (
      <div className="auth">
        <div className="auth-container">
          <p>Add another way to log in using any of the following services. </p>
          <div className="sign-options">
            <div onClick={handleGoogleSignIN} className="single-option">
              <img
                alt="google"
                src="https://image.flaticon.com/icons/png/512/281/281764.png"
              />
              <p>{loading ? "Signing in..." : "Login with Google"}</p>
            </div>
            <div className="single-option">
              <img
                alt="github"
                src="https://image.flaticon.com/icons/png/512/270/270798.png"
              />
              <p>Login with Github</p>
            </div>
            <div className="single-option">
              <img
                alt="facebook"
                src="https://image.flaticon.com/icons/png/512/733/733547.png"
              />
              <p>Login with Facebook</p>
            </div>
          </div>
          <div className="auth-login">
        
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
    );
  }
  
  export default Index;