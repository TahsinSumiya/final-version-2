
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
      setLayout(response.data.reverse(0));
     
      
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
        setallLayout(response.data.reverse(0));
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
              <div class="absolute inset-0">
                <p
                  class="mx-24  my-5 inline-flex items-center py-2.5 px-4 text-xs font-medium text-center
text-white hover:text-gray-700 bg-blue-400 hover:bg-slate-300 hover:border-blue-400 hover:border-b-4 border-blue-400 border-b-4 rounded-lg"
                >
                  {layout.length} Layouts
                </p>
                {layout.map((layout) => (
                  <Layout
                    layoutId={layout._id}
                    html={layout.html}
                    css={layout.css}
                    js={layout.js}
                    author={layout.author}
                    tags={JSON.parse(layout.tags[0])}
                    id={layout.id}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div class="overflow-y-auto  flex">
            <div class="relative h-full w-screen bg-opacity-60 backdrop-blur-lg">
              <div class="absolute inset-0">
                <p
                  class="mx-24  my-5 inline-flex items-center py-2.5 px-4 text-xs font-medium text-center
       text-white hover:text-gray-700 bg-blue-400 hover:bg-slate-300 hover:border-blue-400 hover:border-b-4 border-blue-400 border-b-4 rounded-lg"
                >
                  {alllayout.length} Layouts
                </p>
                {alllayout.map((layout) => (
                  <Layout
                    layoutId={layout._id}
                    html={layout.html}
                    css={layout.css}
                    js={layout.js}
                    author={layout.author}
                    tags={JSON.parse(layout.tags[0])}
                    id={layout.id}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        <div
          class="bg-gradient-to-b from-slate-200 to-slate-300 w-48
                 h-screen px-4 py-9 
                  relative md:relative overflow-y-auto"
        >
          <h1 class="text-2xl font-semibold text-gray-700 mb-4">Categories</h1>
          {categories.map((category) => (
            <div class="category-item my-2">
              <p
                class="text-gray-700 cursor-pointer"
                onClick={() => handleCategoryClick(category._id)}
                key={category._id}
              >
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