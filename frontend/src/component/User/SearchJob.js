import React, { useState,useEffect } from 'react';
import axios from 'axios';

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
    <div>
<div >
<input 
                placeholder='Search...'
                onChange={(e) => searchItems(e.target.value)}
            />
                {searchInput.length > 1 ? (
                    filteredResults.map((item) => {
                        return (
                            <p>{item.name}</p>
                           
                        )
                    })
                ) : (
                    APIData.map((item) => {
                        return (
                            <p> {item.name}</p>
                                       
                        
                        )
                    })
                )}
            </div>
    </div>
  );
}

export default SearchJob;
