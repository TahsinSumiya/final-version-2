import React, {useState} from 'react'
import axios from 'axios';

export default function CategoryUpload() {
    const [newCategory, setNewCategory] = useState('');
   
    const handleAddCategory = async (e) => {
        e.preventDefault();
     
        try {
          const response = await axios.post('http://localhost:80/api/category', 
          { name: newCategory },
          
          );
          console.log(response.data);
          setNewCategory('');
          alert("uploaded")
        //   fetchCategories();
        } catch (error) {
          alert(error)
        
        }
      };
  return (
    <div>
   <form onSubmit={handleAddCategory}>
<label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
<input value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          type="name" id="name" aria-describedby="helper-text-explanation" 
class="bg-gray-50 border border-gray-300 text-gray-900 text-sm 
rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full 
p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  placeholder="name@flowbite.com"/>
 <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 
 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>   
    </div>
  )
}