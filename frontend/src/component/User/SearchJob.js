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
    <div class="bg-gradient-to-r from-purple-100 via-yellow-100 to-blue-200 min-h-screen flex justify-center items-center p-4">
    <div class="bg-opacity-30 backdrop-blur-lg p-9 rounded-md shadow-md w-full md:w-2/3 lg:w-1/2">
        <div class="relative">
            <input onChange={(e) => searchItems(e.target.value)}
            type="text" class="w-full pl-10 pr-4 py-2 border rounded-md focus:ring focus:ring-purple-400 focus:ring-opacity-50 focus:border-transparent focus:outline-none rounded-lg" placeholder="Search user by name or job"/>
            <button class="absolute right-3 bottom-3 text-gray-500
             hover:text-purple-800 focus:outline-none">
                <i class="bi bi-search"></i>
            </button>
        </div>

        {searchInput.length > 1 ? (
                    filteredResults.map((item) => {
                        return (
        <div class="flex justify-between items-center px-16 gap-3 mt-4 text-gray-900">
            <div class="flex-grow bg-gradient-to-r from-purple-100 via-purple-200 to-purple-300">
                <div type="submit" class="inline-flex items-center py-2.5 px-4 text-l font-medium text-center text-white hover:text-gray-900 bg-gradient-to-r from-purple-400 via-purple-300 to-purple-200 hover:from-purple-500 hover:via-purple-600 hover:to-purple-700 rounded-lg w-full">
                    <i class="bi bi-person-lines-fill mr-2"></i>
                    {item.name}
                    <p>{item.desc}</p>
                </div>
            </div>
            
            <div>
                <span class="text-l font-semibold text-purple-700">Click to see</span>
                <Link to={`/specificuser?s=${item.uuid}`} class="text-purple-900 text-sm font-medium hover:underline">Profile</Link>
            </div>        
        </div>
           
           )
        })
    ) : (
        APIData.map((item) => {
            return (
                <>

                  <div class=" p-4 overflow-y-auto ml-16 ">

                  <div class="flex justify-between items-center px-16 gap-3 mt-4 text-gray-900">
                <div class="flex-grow bg-gradient-to-r from-purple-100 via-purple-200 to-purple-300">
                <div class="flex-grow bg-gradient-to-r from-purple-100 via-purple-200 to-purple-300">
                <div type="submit" class="inline-flex items-center py-2.5 px-4 text-l font-medium text-center text-white hover:text-gray-900 bg-gradient-to-r from-purple-400 via-purple-300 to-purple-200 hover:from-purple-500 hover:via-purple-600 hover:to-purple-700 rounded-lg w-full">
                    <i class="bi bi-person-lines-fill mr-2"></i>
                    {item.name}
                    <p>{item.desc}</p>
                </div>
            </div>
                    <div >
                       
                       
                        <p className=''>{item.desc}</p>
                    </div>
                </div>
                
                <div>
                    <span class="text-l font-semibold text-purple-700">Click to see</span>
                    <Link to={`/specificuser?s=${item.uuid}`} class="text-purple-900 text-sm font-medium hover:underline">Profile</Link>
                </div>        
            </div> 
</div>
                </>
          
                           
            
            )
        })
    )}
    </div>
</div>
</>
  );
}

export default SearchJob;
