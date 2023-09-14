import React, {useState,useEffect} from 'react'
import axios from 'axios';
import { login, logout, selectUser } from "../../features/Slice";
import { useDispatch, useSelector } from "react-redux";
export default function LayoutUploader() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [product, setProduct] = useState({
    html: '',
    css: '',
    js: '',
    author:'',
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
      { ...product, categoryId: selectedCategory ,author:user,id:user.uid});
      // Reset the form
      setProduct({ html: '', css: '', js: '',author:'',id:''});
      setSelectedCategory('');
      console.log('Product added successfully!');
    } catch (error) {
      console.error('Failed to add product:', error);
    }
  };

  return (
    <div>
      <h1>Category Panel</h1>
     

      <h1>Add Product Panel</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Category:
          <select value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </label>
        <br />
     
        <br />
        <label>
   html
          <textarea type="text" name="html" value={product.html}
           onChange={handleProductChange} />
        </label>
        <br />
        <label>
         css
          <textarea type="text" name="css"
           value={product.css} onChange={handleProductChange} />
        </label>
        <br />
        <br />
        <label>
          js
          <textarea type="text" name="js"
           value={product.js} onChange={handleProductChange} />
        </label>
        <br />
        <br />
     
        <br />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );

      
  
  
}
