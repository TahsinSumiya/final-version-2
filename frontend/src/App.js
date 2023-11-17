import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header'
import UpdateUser from './component/User/UpdateUser'
import MainIndex from "./component/StackOverFlow/Mainindex";
import AllUser from './component/Admin/AllUser';
import AddQuestion from "./component/Add-Question/Question";
import ViewQuestion from "./component/ViewQuestion.js/ViewQuestion";
import { login, logout, selectUser } from "./features/Slice";
import AfterHome from './component/Home/AfterHome';
import ResetPassword from './component/Auth/ResetPassword';
import UserPost from './component/User/UserPost';
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase";
import { useEffect } from 'react';
import Searchjob from './component/User/SearchJob';
import {BrowserRouter , Routes , Route, Navigate,Outlet,useNavigate} from 'react-router-dom'
import AllSpecificUser from './component/User/AllSpecificUser';
import Search from './component/User/Search';
import Profile from './component/User/Profile';
import ViewProfile from './component/User/ViewProfile';
import Admin from './component/Admin/Admin';
import AdminBoard from './component/Admin/AdminBoard';
import CategoryUpload from './component/Admin/CategoryUpload'
import GetAllCategory from './component/Category/GetAllCategory';
import LayoutUploader from './component/Layout/LayoutUploader';
import AdminUploader from './component/Admin/AdminUploader';
import Notification from './component/Admin/Notification';
import LayoutByAdmin from './component/Admin/LayoutByAdmin';
import Editorindex from './component/Editor/Editorindex';
import BeforeHome from './component/Home/BeforeHome';
import Footer from './component/Home/Footer';
import AuthIndex from './component/Auth/AuthIndex';
 import PrivateWrapper from './PrivateWrapper';
import Error from './Error';
import Request from './component/request/Request';
import GetRequest from './component/Admin/GetRequest';
import PostNotice from './component/Admin/PostNotice';
import ViewNotice from './component/Admin/ViewNotice';
import GetNotice from './component/Admin/GetNotice';
import ListUser from './component/Admin/ListUser';
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
const navigate= useNavigate()



  return (
    <>

<Routes>
        <Route element={<PrivateWrapper />}>
  {/* <Route path="/" element={<Header />} /> */}
</Route>
<Route element={<PrivateWrapper />}>
  <Route path="/error" element={<Error />} />
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
  <Route path="/userlist" element={<ListUser />} />
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

<Route exact path='/admin' element={<Admin/>} />

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
<Route element={<PrivateWrapper />}>
<Route exact path='/layoutbyadmin' element={<LayoutByAdmin/>} />
</Route>
<Route element={<PrivateWrapper />}>
<Route exact path='/editor' element={<Editorindex/>} />
</Route>
<Route element={<PrivateWrapper />}>
<Route exact path='/request' element={<Request/>} />
</Route>
<Route element={<PrivateWrapper />}>
<Route exact path='/getrequest' element={<GetRequest/>} />
</Route>
<Route element={<PrivateWrapper />}>
<Route exact path='/postnotice' element={<PostNotice/>} />
</Route>
<Route element={<PrivateWrapper />}>
<Route exact path='/viewnotice' element={<ViewNotice/>} />
</Route>
<Route element={<PrivateWrapper />}>
<Route exact path='/getnotice' element={<GetNotice/>} />
</Route>
<Route exact path='/auth' element={<AuthIndex/>} />
<Route path="/reset-password" element={<ResetPassword/>} />

{/* <Route exact path='/add-question' element={<AddQuestion/>} />
<Route exact path='/question' element={<ViewQuestion/>} /> */}


</Routes>


    </>
  );
}

export default App;