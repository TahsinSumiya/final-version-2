import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

function SearchJob() {
  const [APIData, setAPIData] = useState([])
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  useEffect(() => {
      axios.get('http://localhost:80/api/user/getuser')
          .then((response) => {
              setAPIData(response.data);
          })
  }, [])

  const searchItems = (searchValue) => {
      setSearchInput(searchValue)
      if (searchInput !== '') {
          const filteredData = APIData.filter((item) => {
              return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
          })
          setFilteredResults(filteredData)
      }
      else{
          setFilteredResults(APIData)
      }
  }

  return (
    <>
    <Sidebar/>
    <div class="fixed top-0 w-full   p-9 rounded-md bg-white right-0 left-0">
      <div class="flex justify-end pr-20">
       
    <div className="relative ">
        <div className=" absolute left-2 top-1">
        <i class="bi bi-search"></i>
        </div>
    <input
            type="text"
            placeholder="Search by name or job"
            onChange={(e) => searchItems(e.target.value)}
            class="w-[700px] p-2 rounded-md border border-gray-300 focus:outline-none focus:border-purple-400 pl-16"
          />
        </div>
        </div>
      </div>
      <div class="  justify-center items-center p-4 mt-28">
        {searchInput.length > 1
          ? filteredResults.map((item) => {
              return (
                <div class=" grid grid-cols-6 gap-6 w-[900px] mx-auto p-9  px-16  mt-4 text-gray-900  bg-gradient-to-r from-slate-100  to-slate-300 rounded-md ">
                   <div className="">
                   {item && item.image ? (
  <img className="w-28 h-28" src={`http://localhost:80/images/${item.image}`} alt='profile-image' />
) : (
  <i className="bi bi-person-lines-fill"></i>
)}
                            </div>
                    <div class=" col-span-4">
                      <h1 class="text-2xl font-semibold mb-4 text-gray-500">
                        {item.name}
                      </h1>

                      <p class="text-gray-500 mb-4 w-full">{item.desc}</p>
                      <Link
                        to={`/specificuser?s=${item.uuid}`}
                        class="text-purple-900 text-sm font-medium hover:underline"
                      >
                        Click to see more
                      </Link>
                  </div>
                </div>
              );
            })
          : APIData.map((item) => {
              return (
                <div class="grid grid-cols-6 gap-6  w-[900px] mx-auto   px-16  mt-4 text-gray-900 overflow-y-auto  bg-gradient-to-r from-slate-100  to-slate-300 p-9 rounded-md">
                     
                        <div className="">
                        {/* <img
                            className=" w-28 h-28"
                            src="https://img.freepik.com/free-photo/woman-with-long-hair-yellow-shirt-is-standing-front-window_1340-37532.jpg?size=626&ext=jpg&ga=GA1.1.261911918.1690962515&semt=ais"
                            alt="profile-image"
                          /> */}
                          {item && item.image ? (
  <img className="w-28 h-28" src={`http://localhost:80/images/${item.image}`} alt='profile-image' />
) : (
  <i className="bi bi-person-lines-fill"></i>
)}

                            </div>
                        <div className=" col-span-4">
                        <h1 class="text-2xl font-semibold mb-4 text-gray-500">
                      {item.name}
                      </h1>
                       
                      <p class="text-gray-500 mb-4 w-full ">{item.desc}</p>
                      <Link
                        to={`/specificuser?s=${item.uuid}`}
                        class="text-purple-900 text-sm font-medium hover:underline"
                      >
                        Click to see more
                      </Link>
                            </div>
                    </div>
              );
            })}
      </div>
</>
  );
}

export default SearchJob;
