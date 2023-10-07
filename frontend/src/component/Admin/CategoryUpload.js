import React, {useState} from 'react'
import axios from 'axios';
import Sidebar from '../Sidebar/Sidebar';

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
    <>
    <Sidebar/>
      <div class=" p-4 overflow-y-auto ml-16 ">
      <div
        class="bg-gradient-to-r from-purple-100 via-yellow-100 to-blue-200 min-h-screen flex justify-center items-center p-4">
        <div class="bg-opacity-30 backdrop-blur-lg p-9 rounded-md shadow-lg w-full md:w-4/5 lg:w-2/3">

            <form onSubmit={handleAddCategory}>
                <h1 class="text-3xl font-semibold mb-4 text-gray-500 text-center">Add Category</h1>

                <div class="flex justify-center items-center py-2 px-3 gap-3 mt-4">
            
                    <input type="text"
                        class="w-full px-4 py-2 text-lg text-gray-900 bg-white border rounded-lg focus:ring focus:ring-purple-400 focus:ring-opacity-50 focus:border-transparent focus:outline-none"
                        placeholder="Category Name" 
                        value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
                        />
                </div>

                <div class="flex justify-center items-center py-2 px-3 gap-3 mt-4">
               
                    <button type="submit"
                        class="inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-white bg-purple-400 hover:bg-purple-500 rounded-lg">
                        <i class="bi bi-send-plus-fill  mr-3"></i>
                        Add Category
                    </button>
                </div>
            </form>

        </div>
    </div>
           
</div>

    </>
  )
}