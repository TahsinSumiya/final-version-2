import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header/Header";
import UpdateUser from "./component/User/UpdateUser";
import MainIndex from "./component/StackOverFlow/Mainindex";
import AllUser from "./component/Admin/AllUser";
import AddQuestion from "./component/Add-Question/Question";
import ViewQuestion from "./component/ViewQuestion.js/ViewQuestion";
import { login, logout, selectUser } from "./features/Slice";
import AfterHome from "./component/Home/AfterHome";
import ResetPassword from "./component/Auth/ResetPassword";
import UserPost from "./component/User/UserPost";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase";
import { useEffect } from "react";
import Searchjob from "./component/User/SearchJob";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
  useNavigate,
} from "react-router-dom";
import AllSpecificUser from "./component/User/AllSpecificUser";
import Search from "./component/User/Search";
import Profile from "./component/User/Profile";
import ViewProfile from "./component/User/ViewProfile";
import Admin from "./component/Admin/Admin";
import AdminBoard from "./component/Admin/AdminBoard";
import CategoryUpload from "./component/Admin/CategoryUpload";
import GetAllCategory from "./component/Category/GetAllCategory";
import LayoutUploader from "./component/Layout/LayoutUploader";
import AdminUploader from "./component/Admin/AdminUploader";
import Notification from "./component/Admin/Notification";
import LayoutByAdmin from "./component/Admin/LayoutByAdmin";
import Editorindex from "./component/Editor/Editorindex";
import BeforeHome from "./component/Home/BeforeHome";
import Footer from "./component/Home/Footer";
import AuthIndex from "./component/Auth/AuthIndex";
import PrivateWrapper from "./PrivateWrapper";
import Error from "./Error";
import Request from "./component/request/Request";
import GetRequest from "./component/Admin/GetRequest";
import PostNotice from "./component/Admin/PostNotice";
import ViewNotice from "./component/Admin/ViewNotice";
import GetNotice from "./component/Admin/GetNotice";
import ListUser from "./component/Admin/ListUser";
import AdminWraper from "./AdminWraper";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <Routes>
        <Route element={<PrivateWrapper />}>
          {/* <Route path="/" element={<Header />} /> */}

          <Route path="/error" element={<Error />} />

          <Route path="/" element={<AfterHome />} />

          <Route path="/allquestion" element={<MainIndex />} />

          <Route path="/add-question" element={<AddQuestion />} />

          <Route path="/question" element={<ViewQuestion />} />

          <Route path="/userpost" element={<UserPost />} />

          <Route path="/specificuser" element={<AllSpecificUser />} />

          <Route path="/userlist" element={<ListUser />} />

          <Route path="/search" element={<Search />} />

          <Route path="/profile" element={<Profile />} />

          <Route path="/viewprofile" element={<ViewProfile />} />

          <Route path="profile/updateprofile" element={<UpdateUser />} />

          <Route path="searchjob" element={<Searchjob />} />

       >

          <Route exact path="/categoryuploader" element={<CategoryUpload />} />

          <Route exact path="/getcategory" element={<GetAllCategory />} />

          <Route exact path="/layoutuploader" element={<LayoutUploader />} />

          <Route exact path="/layoutbyadmin" element={<LayoutByAdmin />} />

          <Route exact path="/editor" element={<Editorindex />} />

          <Route exact path="/request" element={<Request />} />

          <Route exact path="/viewnotice" element={<ViewNotice />} />
        </Route>

        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/auth" element={<AuthIndex />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* admin */}
        <Route element={<AdminWraper />}>
          <Route path="/allusers" element={<AllUser />} />
          <Route exact path="/getrequest" element={<GetRequest />} />
          <Route
            exact
            path="/adminboard/adminlayout"
            element={<AdminUploader />}
          />
             <Route exact path="/adminboard" element={<AdminBoard />} />
          <Route exact path="/layoutbyadmin" element={<LayoutByAdmin />} />
          <Route
            exact
            path="adminboard/notification"
            element={<Notification />}
          />
          <Route exact path="/getnotice" element={<GetNotice />} />
          <Route exact path="/postnotice" element={<PostNotice />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
