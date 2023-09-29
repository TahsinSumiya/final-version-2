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
import AfterHome from './component/Home/AfterHome';
import Auth from "./component/Auth/AuthIndex";
import UserPost from './component/User/UserPost';
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase";
import { useEffect } from 'react';
import Searchjob from './component/User/SearchJob';
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
import AdminUploader from './component/Layout/AdminUploader';
import Notification from './component/Admin/Notification';


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  // useEffect(() => {
   
  //   auth.onAuthStateChanged((authUser) => {
  //     if (authUser) {
  //       dispatch(
  //         login({
  //           uid: authUser.uid,
  //           photo: authUser.photoURL,
  //           displayName: authUser.displayName,
  //           email: authUser.email,
  //         })
  //       );
  //     } else {
  //       dispatch(logout());
  //     }
  //     // console.log(authUser);
  //   });
  
  // }, [dispatch]);

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

  // If user authentication state is not loaded yet, show a loading spinner or some loading indicator
  if (user === undefined) {
    return <div>Loading...</div>;
  }
  const PrivateWrapper = () => {
    return user ? <Outlet /> : <Navigate to="/auth" />;
  };
  
  return (
    <>

        <Routes>
        <Route element={<PrivateWrapper />}>
  {/* <Route path="/" element={<Header />} /> */}
</Route>
<Route element={<PrivateWrapper />}>
  <Route path="/" element={<AfterHome />} />
</Route>
        <Route element={<PrivateWrapper />}>
  <Route path="/allquestion" element={<MainIndex />} />
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
<Route exact path='/adminboard/adminlayout' element={<AdminUploader/>} />
</Route>
<Route element={<PrivateWrapper />}>
<Route exact path='adminboard/notification' element={<Notification/>} />
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
