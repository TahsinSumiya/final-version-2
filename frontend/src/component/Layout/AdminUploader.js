import React, {useState,useEffect} from 'react'
import axios from 'axios';
import { login, logout, selectUser } from "../../features/Slice";
import { useDispatch, useSelector } from "react-redux";

export default function AdminUploader() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [product, setProduct] = useState({
    html: '',
    css: '',
    js: '',
    author:'Admin',
    id:''
  });

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:80/api/category/getcategories');
      setCategories(response.data);
    } catch (error) {
      console.error('Failed to fetch categories:', error);
    }
  };


  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleProductChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:80/api/layouts/layoutUploader', 
      { ...product, categoryId: selectedCategory });
      // Reset the form
      setProduct({ html: '', css: '', js: '',author:'',id:''});
      setSelectedCategory('');
      console.log('Product added successfully!');
    } catch (error) {
      console.error('Failed to add product:', error);
    }
  };
  return (
    <>
   <body class="bg-gradient-to-r from-purple-100 via-yellow-100 to-blue-200 min-h-screen flex justify-center items-center p-4">
    <div class="bg-opacity-30 backdrop-blur-lg p-9 rounded-md shadow-md w-full md:w-2/3 lg:w-1/2">
        <h1 class="text-3xl font-semibold mb-4 text-gray-500">Upload Design</h1>
        <form onSubmit={handleSubmit}>
            <div class="mb-4">
                <label for="dropdown" class="block text-sm font-medium text-gray-700">Select an Option</label>
                <select value={selectedCategory} onChange={handleCategoryChange}
                className='w-full px-3 py-2 border rounded-md focus:ring focus:ring-purple-400 focus:ring-opacity-50 focus:border-transparent focus:outline-none rounded-lg'
                >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
            </div>
            <div class="mb-4">
                <label for="html" class="block text-sm font-medium text-gray-700">HTML</label>
                <textarea id="html" name="html" 
                value={product.html}
                onChange={handleProductChange}
                rows="4" class="w-full px-3 py-2 border rounded-md focus:ring focus:ring-purple-400 focus:ring-opacity-50 focus:border-transparent focus:outline-none rounded-lg"></textarea>
            </div>
            <div class="mb-4">
                <label for="css" class="block text-sm font-medium text-gray-700">CSS</label>
                <textarea id="css" name="css"
                value={product.css} onChange={handleProductChange}
                rows="4" class="w-full px-3 py-2 border rounded-md focus:ring focus:ring-purple-400 focus:ring-opacity-50 focus:border-transparent focus:outline-none rounded-lg"></textarea>
            </div>
            <div class="mb-4">
                <label for="js" class="block text-sm font-medium text-gray-700">JS</label>
                <textarea id="js" name="js"
                 value={product.js} onChange={handleProductChange} 
                rows="4" class="w-full px-3 py-2 border rounded-md focus:ring focus:ring-purple-400 focus:ring-opacity-50 focus:border-transparent focus:outline-none rounded-lg"></textarea>
            </div>
            <button type="submit" class="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-md transition duration-300">Submit</button>
        </form>
    </div>
</body>
    </>
  )
}
