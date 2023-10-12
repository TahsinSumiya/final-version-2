import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { login, logout, selectUser } from "../../features/Slice";
import './SideNavbar.css'
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineSearch } from "react-icons/ai";
export default function Sidebar() {

    const handleClick = () => {
     logout()
        localStorage.removeItem('user');
      };
  return (
   
<div className='h-screen  md:w-64 sidebar fixed top-0 left-0 z-40'>
<nav class="main-menu">



<div>
    <a class="logo" href="">
    </a>
</div>
{/* <!-- <div class="settings"></div> --> */}
<div class="scrollbar" id="style-1">

    <ul>

        <li>
            <Link to="/">
                <i class="bi bi-house"></i>
               <span class="nav-text">Home</span>
            </Link>
        </li>

        <li>
            <Link to="/searchjob">
                <i class="bi bi-search"></i>   
                <span class="nav-text">Search....</span>
            </Link>
        </li>


        <li>
            <Link to="/profile">
                <i class="bi bi-person-bounding-box"></i>                        
                <span class="nav-text">User profile</span>
            </Link>
        </li>

        <li class="darkerlishadow">
            <Link to="/getcategory">
                <i class="bi bi-bar-chart-steps"></i>
                <span class="nav-text">Layout Designs</span>
            </Link>
        </li>

        <li class="darkerli">
            <Link to="/layoutuploader">
                <i class="bi bi-upload"></i>
                <span class="nav-text">Upload design</span>
            </Link>
        </li>

        <li class="darkerli">
            <Link to="/allusers">
                <i class="bi bi-people"></i>
                <span class="nav-text">All Users</span>
            </Link>
        </li>

        <li class="darkerli">
            <Link to="/allquestion">
                <i class="bi bi-question-diamond-fill"></i>
                <span class="nav-text">All Questions</span>
            </Link>
        </li>

        

        <li class="darkerli">
            <Link to="/add-question">
                <i class="bi bi-question-lg"></i>
                <span class="nav-text">Ask a question</span>
            </Link>
        </li>

    </ul>

    {/* <li>
        <Link to="/admin">
            <i class="bi bi-person-fill"></i>
            <span class="nav-text">Admin</span>
        </Link>
    </li> */}

    <li>
        <Link to="/userpost">
            <i class="bi bi-bell-fill"></i>
            <span class="nav-text">Notification</span>
        </Link>
    </li>
    <li>
        <Link to="/editor">
            <i class="bi bi-bell-fill"></i>
            <span class="nav-text">Editor</span>
        </Link>
    </li>

    <ul class="logout">
        <li>
            <Link to="/auth" onClick={handleClick} >
                <i class="bi bi-box-arrow-right"></i>                        
                <span class="nav-text">
                    Log Out
                </span>

            </Link>
        </li>
    </ul>
    

</div>
</nav>
</div>

 

  )
}
