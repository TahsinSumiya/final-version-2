import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header'
import UpdateUser from './component/User/UpdateUser'
import MainIndex from "./component/StackOverFlow/Mainindex";
import AllUser from './component/User/AllUser';
import AddQuestion from "./component/Add-Question/Question";
import ViewQuestion from "./component/ViewQuestion.js/ViewQuestion";
import { login, logout, selectUser } from "./features/Slice";
import Auth from "./component/Auth/AuthIndex";
import UserPost from './component/User/UserPost';
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase";
import { useEffect } from 'react';
import Searchjob from './component/User/SearchJob';
import PrivateRoute from './PrivateRoute';
import {BrowserRouter , Routes , Route, Navigate,Outlet} from 'react-router-dom'
import AllSpecificUser from './component/User/AllSpecificUser';
import Search from './component/User/Search';
import Profile from './component/User/Profile';
import ViewProfile from './component/User/ViewProfile';
import Admin from './component/Admin/Admin';
import AdminBoard from './component/Admin/AdminBoard';
import CategoryUpload from './component/Category/CategoryUpload';
import GetAllCategory from './component/Category/GetAllCategory';
import LayoutUploader from './component/Layout/LayoutUploader';
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
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
      // console.log(authUser);
    });
  }, [dispatch]);
  const PrivateWrapper = () => {
    return user ? <Outlet /> : <Navigate to="/auth" />;
  };
  
  return (
    <>
 <Header/>
        <Routes>
        <Route element={<PrivateWrapper />}>
  {/* <Route path="/" element={<Header />} /> */}
</Route>
        <Route element={<PrivateWrapper />}>
  <Route path="/" element={<MainIndex />} />
</Route>
<Route element={<PrivateWrapper />}>
  <Route path="/add-question" element={<AddQuestion />} />
</Route>
<Route element={<PrivateWrapper />}>
  <Route path="/question" element={<ViewQuestion />} />
</Route>
<Route element={<PrivateWrapper />}>
  <Route path="/userpost" element={<UserPost />} />
</Route>
<Route element={<PrivateWrapper />}>
  <Route path="/allusers" element={<AllUser />} />
</Route>
<Route element={<PrivateWrapper />}>
  <Route path="/specificuser" element={<AllSpecificUser />} />
</Route>
<Route element={<PrivateWrapper />}>
  <Route path="/search" element={<Search />} />
</Route>
<Route element={<PrivateWrapper />}>
  <Route path="/profile" element={<Profile/>} />
</Route>
<Route element={<PrivateWrapper />}>
  <Route path="/viewprofile" element={<ViewProfile/>} />
</Route>
<Route element={<PrivateWrapper />}>
  <Route path="profile/updateprofile" element={<UpdateUser/>} />
</Route>
<Route element={<PrivateWrapper />}>
  <Route path="searchjob" element={<Searchjob/>} />
</Route>
<Route element={<PrivateWrapper />}>
<Route exact path='/admin' element={<Admin/>} />
</Route>
<Route element={<PrivateWrapper />}>
<Route exact path='/adminboard' element={<AdminBoard/>} />
</Route>
<Route element={<PrivateWrapper />}>
<Route exact path='/categoryuploader' element={<CategoryUpload/>} />
</Route>
<Route element={<PrivateWrapper />}>
<Route exact path='/getcategory' element={<GetAllCategory/>} />
</Route>
<Route element={<PrivateWrapper />}>
<Route exact path='/layoutuploader' element={<LayoutUploader/>} />
</Route>
<Route exact path='/auth' element={<Auth/>} />
{/* <Route exact path='/add-question' element={<AddQuestion/>} />
<Route exact path='/question' element={<ViewQuestion/>} /> */}


</Routes>
 

    </>
  );
}

export default App;
