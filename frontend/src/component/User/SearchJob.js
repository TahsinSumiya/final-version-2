import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

function SearchJob() {
  const [APIData, setAPIData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [filterCategory, setFilterCategory] = useState('');

  useEffect(() => {
    axios.get('http://localhost:80/api/user/getuser')
      .then((response) => {
        setAPIData(response.data.reverse(0));
      });
  }, []);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== '') {
      const filteredData = APIData.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(APIData);
    }
  };

  const filterByCategory = (category) => {
    setFilterCategory(category);
    const filteredData = APIData.filter((item) => item && item.category && item.category.toLowerCase() === category.toLowerCase());
    setFilteredResults(filteredData);
  };
  
  return (
    <>
      <Sidebar />
      <div className="fixed top-0 w-full p-9 rounded-md bg-white right-0 left-0">
        <div className="flex justify-center pr-20">
          <div className="relative ">
            <div className=" absolute left-2 top-0">
              <i className="bi bi-search"></i>
            </div>
            <input
              type="text"
              placeholder="Search job category whether you are 'hiring' or 'looking-for-job'"
              onChange={(e) => searchItems(e.target.value)}
              className="w-[700px] p-2 rounded-md border border-gray-300 focus:outline-none focus:border-purple-400 pl-16"
            />
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button
            onClick={() => filterByCategory('looking-for-job')}
            className={`mx-2 px-4 py-2 rounded-md ${filterCategory === 'looking-for-job' ? 'bg-purple-700 text-white' : 'bg-gray-300 text-gray-700'}`}
          >
            Looking for Job
          </button>
          <button
            onClick={() => filterByCategory('hiring')}
            className={`mx-2 px-4 py-2 rounded-md ${filterCategory === 'hiring' ? 'bg-purple-700 text-white' : 'bg-gray-300 text-gray-700'}`}
          >
            Hiring
          </button>
        </div>
      </div>
      <div className="justify-center items-center p-4 mt-28">
        {searchInput.length > 1
          ? filteredResults.map((item) => (
            <div class=" grid grid-cols-6 gap-6 w-[900px] mx-auto p-9  px-16  mt-4 text-gray-900  bg-gradient-to-r from-slate-100  to-slate-300 rounded-md ">
            <div className="">
            {item && item.image ? (
<img className="w-28 h-28" src={`http://localhost:80/images/${item.image}`} alt='profile-image' />
) : (
<img className="w-28 h-28" src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAACHCAMAAAALObo4AAAAMFBMVEXk5ueutLeqsbTR1dfn6erh4+S3vL+xt7rq7O3IzM7c3+DBxsi/w8bY292mrbDM0NI2fN7cAAADGklEQVR4nO2a2XLrIAxAWcRiDPj///ZCUrdJm9gSQSQzl/OYl5yRxGIJISaTyWQymUwmk8lk8n8CF96sYNK2rDHGRSfzJhkQYbFO7UhntRlvAl7b8ud3KBmDH6yh5S+JK9mGgTEBYx9a1JioZZiG108kriZ2UJnA+iwYe3LSEJEzjRISzS9yGo0xIh6jUVLDvGxAozSkdIbVw+As6qrhDAhYrIdUG58IbMisXET4MuMJGlKtXAGBheIhVWDyEI6iIVXkCQh6zX7DUyGExfIVkI3FIxA1pLQstyJyWmTmKBCIZA+W485TLZi2EMh0kdhfQyRyWsqp21+DvntU+u8gpDNuh+GsIx4uXx79j5jp8aEen1KnLeuW49ZuGvZT219D+A/Z1z3tVlhRC8c5R18wPDdl+kGneLpU1MQwXdiRn/o3HolDg54YhtvHFdqHA9uXNiTSFsIWDuGftitHhqMQKBXC2Fom7GV8X/sXsKXKmZUK8tRVHCftHQml4dgbuZj7kGLuWl5FTneRojGiwQ7BHYaEt3V6K2IOWxA8XaDHJtvvmdhPTkYOpATA8mgwpqwePKArydnsnUqJkE3iDbNTgLBFlXOdmubson7XBLeqeDCpYLx/l0Qdphthdvafxip4EbYlRutcLYxaJs7auC6XwAxyMHqxl6r4u1xqodhVB8G7akrY01pn+kfbaV04LibDtnTAp/XM4UdGWs1RLWWRLliHXSXH1Fml5MM+flhwkiG79UyPT5SL+r2K23rFBJJraH3cBKVLTCDQ5wy/TezrDw/80xOeZLK+FpKzqxde5KXviLbe/hOTtVmD3PA4FrGtl/hOOfmm6Z1Mt9K4pWFeZxg0GgaHhsGikIkiht60xaFINQLN58k5hFXjX97Kj0AHpOf29Rf8hoZ+jNQogqxV8vsKMqgS4c1KBTf2b3hPQCUjAsIfjgJmEMFeHRLVXG151kD3OB2YQRyggZgBsB0s95yOiFBt2g4eJ0u3aYrfxHFHwI9YLZV8nJaWoXUTJwXSMsRv8zj+nklZDeK4UIMeBdNsdzKZTCaTW/4ByiEj7A+wD4oAAAAASUVORK5CYII=' alt='profile-image' />
)}
                     </div>
             <div class=" col-span-4">
               <Link   to={`/specificuser?s=${item.uuid}`} class="text-2xl font-semibold 
               mb-4 text-gray-500 hover:underline hover:text-purple-700">
                 {item.name}
               </Link>

               <p class="text-gray-500 mb-4 w-full">{item.desc}</p>
               <p
                   
                   class="text-purple-900 text-sm font-medium hover:underline my-4"
                 >
                   JobType: {item.goals}
                 </p>
               <p
                 
                 class="text-purple-900 text-sm font-medium hover:underline"
               >
                 {item.category}
               </p>
           </div>
         </div>
          ))
          : filteredResults.length > 0
            ? filteredResults.map((item) => (
              <div class=" grid grid-cols-6 gap-6 w-[900px] mx-auto p-9  px-16  mt-4 text-gray-900  bg-gradient-to-r from-slate-100  to-slate-300 rounded-md ">
                   <div className="">
                   {item && item.image ? (
                    <img className="w-28 h-28" src={`http://localhost:80/images/${item.image}`} alt='profile-image' />
) : (
<img className="w-28 h-28" src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAACHCAMAAAALObo4AAAAMFBMVEXk5ueutLeqsbTR1dfn6erh4+S3vL+xt7rq7O3IzM7c3+DBxsi/w8bY292mrbDM0NI2fN7cAAADGklEQVR4nO2a2XLrIAxAWcRiDPj///ZCUrdJm9gSQSQzl/OYl5yRxGIJISaTyWQymUwmk8lk8n8CF96sYNK2rDHGRSfzJhkQYbFO7UhntRlvAl7b8ud3KBmDH6yh5S+JK9mGgTEBYx9a1JioZZiG108kriZ2UJnA+iwYe3LSEJEzjRISzS9yGo0xIh6jUVLDvGxAozSkdIbVw+As6qrhDAhYrIdUG58IbMisXET4MuMJGlKtXAGBheIhVWDyEI6iIVXkCQh6zX7DUyGExfIVkI3FIxA1pLQstyJyWmTmKBCIZA+W485TLZi2EMh0kdhfQyRyWsqp21+DvntU+u8gpDNuh+GsIx4uXx79j5jp8aEen1KnLeuW49ZuGvZT219D+A/Z1z3tVlhRC8c5R18wPDdl+kGneLpU1MQwXdiRn/o3HolDg54YhtvHFdqHA9uXNiTSFsIWDuGftitHhqMQKBXC2Fom7GV8X/sXsKXKmZUK8tRVHCftHQml4dgbuZj7kGLuWl5FTneRojGiwQ7BHYaEt3V6K2IOWxA8XaDHJtvvmdhPTkYOpATA8mgwpqwePKArydnsnUqJkE3iDbNTgLBFlXOdmubson7XBLeqeDCpYLx/l0Qdphthdvafxip4EbYlRutcLYxaJs7auC6XwAxyMHqxl6r4u1xqodhVB8G7akrY01pn+kfbaV04LibDtnTAp/XM4UdGWs1RLWWRLliHXSXH1Fml5MM+flhwkiG79UyPT5SL+r2K23rFBJJraH3cBKVLTCDQ5wy/TezrDw/80xOeZLK+FpKzqxde5KXviLbe/hOTtVmD3PA4FrGtl/hOOfmm6Z1Mt9K4pWFeZxg0GgaHhsGikIkiht60xaFINQLN58k5hFXjX97Kj0AHpOf29Rf8hoZ+jNQogqxV8vsKMqgS4c1KBTf2b3hPQCUjAsIfjgJmEMFeHRLVXG151kD3OB2YQRyggZgBsB0s95yOiFBt2g4eJ0u3aYrfxHFHwI9YLZV8nJaWoXUTJwXSMsRv8zj+nklZDeK4UIMeBdNsdzKZTCaTW/4ByiEj7A+wD4oAAAAASUVORK5CYII=' alt='profile-image' />
)}
                            </div>
                    <div class=" col-span-4">
                      <Link   to={`/specificuser?s=${item.uuid}`} class="text-2xl font-semibold 
                      mb-4 text-gray-500 hover:underline hover:text-purple-700">
                        {item.name}
                      </Link>

                      <p class="text-gray-500 mb-4 w-full">{item.desc}</p>
                      <p
                   
                   class="text-purple-900 text-sm font-medium hover:underline my-4"
                 >
                   JobType: {item.goals}
                 </p>
                      <p
                        
                        class="text-purple-900 text-sm font-medium hover:underline"
                      >
                        {item.category}
                      </p>
                  </div>
                </div>
            ))
            : APIData.map((item) => (
              <div class=" grid grid-cols-6 gap-6 w-[900px] mx-auto p-9  px-16  mt-4 text-gray-900  bg-gradient-to-r from-slate-100  to-slate-300 rounded-md ">
              <div className="">
              {item && item.image ? (
                <img className="w-28 h-28" src={`http://localhost:80/images/${item.image}`} alt='profile-image' />
) : (
<img className="w-28 h-28" src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAACHCAMAAAALObo4AAAAMFBMVEXk5ueutLeqsbTR1dfn6erh4+S3vL+xt7rq7O3IzM7c3+DBxsi/w8bY292mrbDM0NI2fN7cAAADGklEQVR4nO2a2XLrIAxAWcRiDPj///ZCUrdJm9gSQSQzl/OYl5yRxGIJISaTyWQymUwmk8lk8n8CF96sYNK2rDHGRSfzJhkQYbFO7UhntRlvAl7b8ud3KBmDH6yh5S+JK9mGgTEBYx9a1JioZZiG108kriZ2UJnA+iwYe3LSEJEzjRISzS9yGo0xIh6jUVLDvGxAozSkdIbVw+As6qrhDAhYrIdUG58IbMisXET4MuMJGlKtXAGBheIhVWDyEI6iIVXkCQh6zX7DUyGExfIVkI3FIxA1pLQstyJyWmTmKBCIZA+W485TLZi2EMh0kdhfQyRyWsqp21+DvntU+u8gpDNuh+GsIx4uXx79j5jp8aEen1KnLeuW49ZuGvZT219D+A/Z1z3tVlhRC8c5R18wPDdl+kGneLpU1MQwXdiRn/o3HolDg54YhtvHFdqHA9uXNiTSFsIWDuGftitHhqMQKBXC2Fom7GV8X/sXsKXKmZUK8tRVHCftHQml4dgbuZj7kGLuWl5FTneRojGiwQ7BHYaEt3V6K2IOWxA8XaDHJtvvmdhPTkYOpATA8mgwpqwePKArydnsnUqJkE3iDbNTgLBFlXOdmubson7XBLeqeDCpYLx/l0Qdphthdvafxip4EbYlRutcLYxaJs7auC6XwAxyMHqxl6r4u1xqodhVB8G7akrY01pn+kfbaV04LibDtnTAp/XM4UdGWs1RLWWRLliHXSXH1Fml5MM+flhwkiG79UyPT5SL+r2K23rFBJJraH3cBKVLTCDQ5wy/TezrDw/80xOeZLK+FpKzqxde5KXviLbe/hOTtVmD3PA4FrGtl/hOOfmm6Z1Mt9K4pWFeZxg0GgaHhsGikIkiht60xaFINQLN58k5hFXjX97Kj0AHpOf29Rf8hoZ+jNQogqxV8vsKMqgS4c1KBTf2b3hPQCUjAsIfjgJmEMFeHRLVXG151kD3OB2YQRyggZgBsB0s95yOiFBt2g4eJ0u3aYrfxHFHwI9YLZV8nJaWoXUTJwXSMsRv8zj+nklZDeK4UIMeBdNsdzKZTCaTW/4ByiEj7A+wD4oAAAAASUVORK5CYII=' alt='profile-image' />
)}
                       </div>
               <div class=" col-span-4">
                 <Link   to={`/specificuser?s=${item.uuid}`} class="text-2xl font-semibold 
                 mb-4 text-gray-500 hover:underline hover:text-purple-700">
                   {item.name}
                 </Link>

                 <p class="text-gray-500 mb-4 w-full">{item.desc}</p>
                 <p
                   
                   class="text-purple-900 text-sm font-medium hover:underline my-4"
                 >
                   JobType: {item.goals}
                 </p>
                 <p
                   
                   class="text-purple-900 text-sm font-medium hover:underline"
                 >
                   {item.category}
                 </p>
             </div>
           </div>
            ))}
      </div>
    </>
  );
}

export default SearchJob;
