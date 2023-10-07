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
    <div class="bg-gradient-to-r from-purple-100 to-yellow-100 min-h-screen grid grid-col justify-center items-center p-4">



<div class="fixed top-0 w-full  bg-purple-200 p-9 rounded-md shadow-md right-0 left-0">
    <div class="flex justify-center items-center">
        <input type="text" placeholder="Search user by name or job" onChange={(e) => searchItems(e.target.value)}
            class="w-1/2 p-2 rounded-md border border-gray-300 focus:outline-none focus:border-purple-400"/>
     
    </div>
</div>




{searchInput.length > 1 ? (
                    filteredResults.map((item) => {
                        return (

                            <div class="container mx-auto p-4 mt-28">
                      
                            <div class="flex flex-col justify-between items-center px-16 gap-3 mt-4 text-gray-900 overflow-y-auto">
                                <div class="w-full bg-gradient-to-r from-purple-100 via-purple-200 to-purple-300 p-9 rounded-md ">
                                    <h1 class="text-2xl font-semibold mb-4 text-gray-500">
                                        <i class="bi bi-person-lines-fill mr-2"></i>
                                        {item.name}
                                    </h1>
                                    <p class="text-gray-500 mb-4 w-full ">{item.desc}</p>
                                    <Link to={`/specificuser?s=${item.uuid}`} class="text-purple-900 text-sm font-medium hover:underline">Click to see more</Link>
                    
                                </div>
                            </div>
                        </div>
           )
        })
    ) : (
        APIData.map((item) => {
            return (

          
                <div class="container mx-auto p-4 mt-28">
                      
                <div class="flex flex-col justify-between items-center px-16 gap-3 mt-4 text-gray-900 overflow-y-auto">
                    <div class="w-full bg-gradient-to-r from-purple-100 via-purple-200 to-purple-300 p-9 rounded-md ">
                        <h1 class="text-2xl font-semibold mb-4 text-gray-500">
                            <i class="bi bi-person-lines-fill mr-2"></i>
                            {item.name}
                        </h1>
                        <p class="text-gray-500 mb-4 w-full ">{item.desc}</p>
                        <Link to={`/specificuser?s=${item.uuid}`} class="text-purple-900 text-sm font-medium hover:underline">Click to see more</Link>
        
                    </div>
                </div>
            </div>
                )
            })
        )}
</div>
</>
  );
}

export default SearchJob;
