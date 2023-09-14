import React, { useState } from 'react'
import {FaPaintBrush} from 'react-icons/fa'
import {FaBars} from 'react-icons/fa'
import {FiSearch} from 'react-icons/fi'
import {FiCircle} from 'react-icons/fi'
import {BsPersonCircle} from 'react-icons/bs'
import {LiaImages} from 'react-icons/lia'
import { NavLink,Link } from "react-router-dom";
import { auth } from "../../firebase";
import { useSelector } from "react-redux";
import Dropdown from 'react-bootstrap/Dropdown';
import { login, logout, selectUser } from "../../features/Slice";
import './css/Header.css'
export default function Header() {
	const user = useSelector(selectUser);
	const [isNavOpen, setIsNavOpen] = useState(false);
	const handleOpen = () => {
	  setOpen(!open);
	};
	const handleMenuOne = () => {
	  // do something
	  setOpen(false);
	};
  
	const handleMenuTwo = () => {
	  // do something
	  setOpen(false);
	};
	const [open, setOpen] = React.useState(false);
	const handleClick = () => {
	  logout();
   
	};
  return (
    <header>
<nav class="relative w-screen  no-underline px-4 py-4 flex justify-between items-center bg-purple-100  shadow-lg">
		<a class="text-3xl font-bold leading-none" href="#">
			<div class="h-10 right-10 text-purple-500 hover:text-purple-300 shadow-2xl animate-pulse shadow-outline	 duration-500 ease-in-out transition-colors"  alt="logo" viewBox="0 0 10240 10240">
			<FaPaintBrush className=" absolute left-14 "/>
			<FiCircle className="absolute h-20 w-16 left-10 top-0 animate-spin text-purple-300"/>
			{/* <FaRegStar className="absolute h-20 w-24 top-0   animate-spin transition delay-700 duration-1000 ease-in-out"/> */}
			</div>
		</a>
		<div class="lg:hidden " >
			<button 
			class="navbar-burger flex items-center text-purple-600 p-3"
       onClick={() => setIsNavOpen((prev) => !prev)}

      >
				<svg class="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<title>Mobile menu</title>
					<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
				</svg>
			</button>
		</div>
		{user && (
		<ul class=" no-underline hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto 
		 lg:items-center lg:w-auto lg:space-x-6">
		<li  className="no-underline text-lg text-gray-500 hover:text-purple-500 
		transition duration-300 "><Link  to="/"class="no-underline text-lg text-gray-500 hover:text-purple-500 
		transition duration-300" >Home</Link></li> 
			<li class="text-gray-300">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
				</svg>
			</li>
			<li  className="no-underline text-lg text-gray-500 hover:text-purple-500 
		transition duration-300 "><Link  to="/"class="no-underline text-lg text-gray-500 hover:text-purple-500 
		transition duration-300" >queston</Link></li> 
		
		
			<li  className="no-underline text-lg text-gray-500 hover:text-purple-500 
		transition duration-300 "><Link  to="category"class="no-underline text-lg text-gray-500 hover:text-purple-500 
		transition duration-300" >Category</Link></li> 
			<li class="text-gray-300">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
				</svg>
			</li>
			<li  className="no-underline text-lg text-gray-500 hover:text-purple-500 
		transition duration-300 "><Link  to="category"class="no-underline text-lg text-gray-500 hover:text-purple-500 
		transition duration-300" >Category</Link></li> 
			
			<a class="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6  bg-gray-50
		 hover:bg-purple-500 hover:text-white  font-medium text-purple-500 rounded-xl
				transition duration-200 no-underline" href="#">
					<NavLink className="no-underline hover:text-white 
					 font-medium text-purple-500"  onClick={handleClick} to="/auth">Log out</NavLink></a>
		
		</ul> 
		
		)}
		
		

{!user && (
<Dropdown>
      <Dropdown.Toggle className=" dropdown border-0 rounded-lg" >
        Services
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown">
        <Dropdown.Item href="#/action-1" className="  justify-center hidden lg:inline-block lg:mr-3 py-2 px-6 
		 bg-purple-200 no-underline 
		 hover:bg-purple-300 hover:text-purple-400
					 font-medium  rounded-xl transition duration-200 ">
		<a class=" no-underline  " >
					<Link className="no-underline 
					font-medium text-purple-100 hover:text-purple-400 " to="login" >Log In</Link></a></Dropdown.Item>

        <Dropdown.Item href="#/action-2" className="justify-center hidden lg:inline-block  lg:mr-3 py-2 px-6 
		 bg-purple-200
		 hover:bg-purple-300 hover:text-purple-400
					 font-medium  rounded-xl transition duration-200 no-underline ">  <a className="no-underline hover:text-purple-400" >
						<Link className="no-underline
						text-purple-100 hover:text-purple-400" to="devsignup">Developers</Link></a></Dropdown.Item>
     
      </Dropdown.Menu>
    </Dropdown>)}


		
	</nav>
	<div class="navbar-menu relative z-50 lg:hidden" className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
		
		<nav  class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
			<div class="flex items-center mb-8" >
				<a class="mr-auto text-3xl font-bold leading-none" href="#">
				<div class="h-10 text-purple-500 hover:text-purple-300 shadow-2xl animate-pulse shadow-outline	 duration-500 ease-in-out transition-colors"  alt="logo" viewBox="0 0 10240 10240">
			<FaPaintBrush/>
			<FiCircle className="absolute h-20 w-14 left-3 top-0 animate-spin "/>
			</div>
				</a>
				<button class="navbar-close" onClick={() => setIsNavOpen(false)}  >
					<svg class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path  stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
					</svg>
				</button>
			</div>
			{!user && (
			<div>
				<ul>
					<li class="mb-1">
						<a class="block p-4 text-sm font-semibold text-gray-400
						 hover:bg-purple-50 hover:text-purple-600 rounded no-underline" href="#">Home</a>
					</li>
					<li class="mb-1">
						<a class="block p-4 text-sm font-semibold text-gray-400
						 hover:bg-purple-50 hover:text-purple-600 rounded no-underline" href="#">About Us</a>
					</li>
					<li class="mb-1">
						<a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-purple-50 hover:text-purple-600 rounded no-underline" href="#">Blogs</a>
					</li>
					<li class="mb-1">
						<a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded no-underline" href="#">Pricing</a>
					</li>
					<li class="mb-1">
						<a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-purple-50 hover:text-purple-600 rounded no-underline" href="#">Contact Us</a>
					</li>
				</ul>
			</div>
			)}
			<div class="mt-auto">
		
				<div class="pt-6">

			    <div>
				{user && (
		<NavLink to="login"  onClick={handleClick}><a class="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white 
		font-semibold bg-purple-600 hover:bg-purple-700  rounded-xl
		 no-underline" href="#">Log Out</a></NavLink>)}
				</div>

				{!user && (
					<div>
					<a class="block px-4 py-4 -mt-64 .leading-loose text-xs text-center font-semibold leading-none bg-gray-50
					 hover:bg-gray-100 rounded-xl no-underline" ><NavLink className="no-underline  text-purple-500 font-semibold" to="login" >Log In</NavLink></a>
					{/* <a class="block px-4 py-3 -mt-40 leading-loose text-xs text-center text-white font-semibold
					 bg-purple-600 hover:bg-purple-700  rounded-xl no-underline" ><NavLink className="no-underline  
					 text-white font-semibold
					 bg-purple-600 hover:bg-purple-700" to="signup" >Signup</NavLink></a> */}

<a class="block px-4 py-3 -mt-40 leading-loose text-xs text-center text-white font-semibold
					 bg-purple-600 hover:bg-purple-700  rounded-xl no-underline" ><NavLink className="no-underline  text-white font-semibold
					 bg-purple-600 hover:bg-purple-700" to="services" >Services</NavLink></a>
					</div>
					)}
				</div>
			
				<p class="my-4 text-xs text-center text-gray-400">
					<span>Copyright © 2023</span>
				</p>
			</div>
		</nav>
		</div>
    </header>
  )
}
