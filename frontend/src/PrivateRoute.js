import React from 'react'
import { login, logout, selectUser } from "./features/Slice";
import {BrowserRouter , Routes , Route, Navigate} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from 'react-router-dom';
export default function PrivateRoute({ component: Component, ...rest }) {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
  return (
    <>
       
    <Routes>
    <Route
      {...rest}
      element={user ? <Outlet /> : <Navigate to="/auth" />}
    />
</Routes>
   

    </>
  )
}
