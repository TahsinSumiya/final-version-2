import React from "react";
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { login, logout, selectUser } from "./features/Slice";
import Auth from "./component/Auth/AuthIndex";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import {BrowserRouter , Routes , Route, Navigate,Outlet} from 'react-router-dom'
const PrivateWrapper = ({children}) => {
  const dispatch = useDispatch();
   const user = useSelector(selectUser);
   useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser) {
      dispatch(login(storedUser));
    }

    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            displayName: authUser.displayName,
            email: authUser.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);
  // console.log("User State:", user); // Check the user state
  // const navigate = useNavigate();

 
  // if (!user) {
  //   navigate("/auth");
  //   return null;
  // }


  // return <>{children}</>;
  
  return !user ? <Navigate to="/auth" /> : <Outlet />;
   
  
};

export default PrivateWrapper;
