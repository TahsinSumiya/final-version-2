
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Codepen from './Codepen.';
import { Link, useParams } from 'react-router-dom';
// import Layout from './Layout';
import Layout from '../Layout/Layout';



// import { Controlled as CodeMirror } from 'react-codemirror2-react-17'
const GetAllCategory = () => {

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [layout, setLayout] = useState([]);

  const [srcDoc, setSrcDoc] = useState('')
  // const [hidehtml, setHidehtml] = useState(true);
  // const [hidecss, setHidecss] = useState(true);
  // const [hidejs, setHidejs] = useState(true);
  const [visible, setVisible] = useState(false) 
  let [visibility, setVisibility] = useState("block"); 
  // function handleChange(editor, data, value) {
  //   onChange(value)
  // }


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
  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setSrcDoc(`
  //       <html>
  //         <body>${setHtml}</body>
  //         <style>${setCss}</style>
  //         <script>${setJs}</script>
  //       </html>
  //     `)
  //   }, 250)

  //   return () => clearTimeout(timeout)
  // }, [html, css, js])
  const fetchProductsByCategory = async (categoryId) => {
    try {
      const response = await axios.get(`http://localhost:80/api/layouts/getlayouts/${categoryId}`);
      setLayout(response.data);

      
    } catch (error) {
      console.error('Failed to fetch products:', error);
    }
  };


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

    
    {/* <div>
      <h2>Categories</h2>
      <ul>
        {categories.map(category => (
        <Link>   <li  onClick={() => handleCategoryClick(category._id)} key={category._id} >
            {category.name}
          </li> </Link>
        ))}
      </ul>

    </div>
    <div>
    <h1>Products</h1>
      {layout.length === 0 ? (
        <p>No products available for the selected category.</p>
      ) : (
        <ul>
          {layout.map((layout) => (
            <li key={layout._id}>
              {layout.author} - {layout.html}
              <button><Layout html= {layout.html} css = {layout.css} publish = {layout.publish}/></button>
            </li>
          
          ))}
        </ul>
      )}
    </div> */}
         <div class="flex ">
          
        <aside class="flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-purple-200 
        border-r rtl:border-r-0 rtl:border-l  sticky top-0">
       
     
            <div class="flex flex-col justify-between flex-1 mt-2">
          
                <nav class="flex-1 -mx-3 space-y-3">
                {categories.map(category => (
                    <a class="flex no-underline  items-center px-3 py-2 text-purple-500 transition-colors duration-300 transform
                     rounded-lg hover:bg-gray-100" href="#">
            <span onClick={() => handleCategoryClick(category._id)} key={category._id} 
            class="mx-2 text-sm font-medium no-underline"> {category.name}</span>
      
                    </a>
        
                    ))}
    
    
          
                </nav>
      
                
            </div>
        
        </aside>
       

        {/* <div class="flex flex-col justify-between flex-1 mt-6">
                <nav class="flex-1 -mx-3 space-y-3 ">
              
                  
        
                    <a class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                       
        
                        <span class="mx-2 text-sm font-medium">Dashboard</span>
                    </a>
        
                    </a>
    
    
          
                </nav>
        

            </div> */}
        {/* <!-- Cards --> */}
      <div class="container my-12 mx-auto px-4 md:px-12">
      {layout.map((layout) => (
  <Layout layoutId={layout._id} html={layout.html} css = {layout.css} js={layout.js}/>
                 ))}
      </div>
    </div> 
    </>
  );
};

export default GetAllCategory;