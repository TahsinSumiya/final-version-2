
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Codepen from './Codepen.';
import { Link, useParams } from 'react-router-dom';
// import Layout from './Layout';
import Layout from '../Layout/Layout';
import Sidebar from '../Sidebar/Sidebar'
import bgimg from '../static/Images/wp7213373.webp'
import './dropdown.css'


// import { Controlled as CodeMirror } from 'react-codemirror2-react-17'
const GetAllCategory = () => {

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [layout, setLayout] = useState([]);
  const [alllayout, setallLayout] = useState([]);
  const [srcDoc, setSrcDoc] = useState('')
  const [visible, setVisible] = useState(false) 
  const [categoryclick, setcategoryclick] = useState(false) 
  let [visibility, setVisibility] = useState("block"); 


const toggleVisible = () => setVisible(!visible) 
  const [isActive, setIsActive] = useState({
    id: 'divOne',
    })

    const hideShowDiv = (e) => {
    setIsActive({
    id: e.target.id,
    })
    toggleVisible()
    }

  const fetchProductsByCategory = async (categoryId) => {
    try {
      const response = await axios.get(`http://localhost:80/api/layouts/getlayouts/${categoryId}`);
      setLayout(response.data);

      
    } catch (error) {
      console.error('Failed to fetch products:', error);
    }
  };
  useEffect(() => {
    // Fetch user profile by user UID
    axios
      .get('http://localhost:80/api/layouts/getalllayouts')
      .then((response) => {
       setcategoryclick(true)
        setallLayout(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user profile:', error);
      });
  }, []);

    // Fetch all categories 
      // Fetch all categories from the backend
      const fetchCategories = async () => {
        try {
          const response = await axios.get('http://localhost:80/api/category/getcategories'
          );
          setCategories(response.data);
      
        } catch (error) {
          console.error(error);
        }
      };
  
    

  
    useEffect(() => {
      fetchCategories();
      fetchProductsByCategory()

    }, []);


  const handleCategoryClick = async (categoryId) => {
    setSelectedCategory(categoryId);
    await fetchProductsByCategory(categoryId);
  };


    
  return (
 
    <>
<Sidebar/>
<div class="flex">

  {selectedCategory ? (
     <div class="overflow-y-auto  flex">
    
        
     <div class="relative h-full w-screen bg-opacity-60 backdrop-blur-lg">
       
         <div class="absolute inset-0 bg-gray-100 bg-opacity-80">
<p class="mx-24  my-5 inline-flex items-center py-2.5 px-4 text-xs font-medium text-center
text-white bg-purple-400 hover:bg-purple-500 rounded-lg">
           
           {layout.length} Layouts            
                   </p>
       {layout.map((layout) => (
<Layout layoutId={layout._id} html={layout.html} css = {layout.css} js={layout.js} author={layout.author} 
tags={JSON.parse(layout.tags[0])} id={layout.id}

/>
      ))}
       </div>
       </div>
       </div>
          
  ):(
    <div class="overflow-y-auto  flex">
    
        
              <div class="relative h-full w-screen bg-opacity-60 backdrop-blur-lg">
                
                  <div class="absolute inset-0 bg-gray-100 bg-opacity-80">
 <p class="mx-24  my-5 inline-flex items-center py-2.5 px-4 text-xs font-medium text-center
       text-white bg-purple-400 hover:bg-purple-500 rounded-lg">
                    
                    {alllayout.length} Layouts            
                            </p>
                {alllayout.map((layout) => (
<Layout layoutId={layout._id} html={layout.html} css = {layout.css} js={layout.js} author={layout.author} 
tags={JSON.parse(layout.tags[0])} id={layout.id}

/>
               ))}
                </div>
                </div>
                </div>
  
              
  )
}


 <div
                class="bg-gradient-to-b from-purple-200 to-purple-400 w-48
                 h-screen px-4 py-9 
                  relative md:relative">
                <h1 class="text-2xl font-semibold text-white mb-4">Categories</h1>
                {categories.map(category => (
                <div class="category-item my-2">
                    <p  class="text-white"onClick={() => handleCategoryClick(category._id)}
                     key={category._id} >
                      {category.name}
                     </p>
                </div>
             ))}
                 
            </div>
  </div>



    </>
  );
};

export default GetAllCategory;