import React, { useEffect } from "react";
import { useNavigate ,Navigate,Outlet} from "react-router-dom";
import { login, logout, selectUser } from "./features/Slice";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "./firebase";
import AuthIndex from "./component/Auth/AuthIndex";
const PrivateWrapper = ({ children }) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      dispatch(login(storedUser));
    }
  
  }, [dispatch]);
  if (user === undefined) {
    return <div><AuthIndex/></div>;
  }

 

  return !user ? <Navigate to="/auth" /> : <Outlet />;
};

export default PrivateWrapper;
