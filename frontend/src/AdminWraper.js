import React from 'react'
import { Navigate, useLocation, Outlet, useNavigate } from "react-router-dom";
export default function AdminWraper() {

  
  

      const token = JSON.parse(localStorage.getItem('admin'));

      let isLoggedIn=token? true:false

          if(isLoggedIn){
              return (
                  <>
                
                    <Outlet />
                  </>
                );
          }
       
            return <Navigate to="/admin"  />;
  
  

}
