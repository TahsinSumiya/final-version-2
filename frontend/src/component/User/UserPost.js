import React from 'react'
import { login, logout, selectUser } from "../../features/Slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect ,useState} from "react";
import { Link } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import ReactHtmlParser from "react-html-parser"
import Profile from './Profile';
import Comment from '../Layout/Comment';
import './css/profile.css'
import DeleteLayout from './DeleteLayout';
import axios from "axios";
import DeeletQ from './DeeletQ';
import Sidebar from '../Sidebar/Sidebar';
function UserPost() {
    const user = useSelector(selectUser);
  const dispatch = useDispatch();
    const [userPosts, setUserPosts] = useState([]);
    const [Layouts, setLayouts] = useState([]);
    const [hide, sethide] = useState(false) 
    const [visible, setVisible] = useState(false) 
    const [text, setText] = useState('');
    const [comments, setComments] = useState([]);
    function truncate(str, n) {
      return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
 
  const toggle = () => sethide(!hide) 
    const [Active, setActive] = useState({
      id: 'One',
      })
 
        const hideShow = (e) => {
        setActive({
        id: e.target.id,
        })
        toggle()
        }
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
    useEffect(() => {
        
          // Fetch posts by user UID
          axios.get(`http://localhost:80/api/user/postbyid/${user.uid}`)
            .then((response) => {
              setUserPosts(response.data);
            })
            .catch((error) => {
              console.error('Error fetching user posts:', error);
            });
        
      }, []);
          
    useEffect(() => {
      // Fetch user profile by user UID
      axios
        .get(`http://localhost:80/api/layouts/getlayoutsbyId/${user.uid}`)
        .then((response) => {
          const layoutId = response.data._id;
          setLayouts(response.data);
        })
        .catch((error) => {
          console.error('Error fetching user profile:', error);
        });
    }, []); 
  
    const handleCommentSubmit = (e,layoutId) => {
      e.preventDefault();
      axios.post(`http://localhost:80/api/comment/comments/${layoutId}`, { 
        text,user:user})
        .then(response => {
          setText('');
          handlegetCommentSubmit ()
          
        })
        .catch(error => console.error('Error submitting comment:', error));
    };
    const handlegetCommentSubmit = async (layoutId) => {
      try {
        const response = await axios.get(`http://localhost:80/api/comment/getcomments/${layoutId}`);
        setComments(response.data);
        console.log(response);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };
   // onMount
useEffect((layoutId) => {
handlegetCommentSubmit ()
}, []);
const handleDelete = (layoutId) => {
  axios.delete(`http://localhost:80/api/layouts/deletelayout/${layoutId}`)
    .then(response => {
      console.log(response.data.message); // Layout deleted successfully message
      // You may want to refresh the layouts after deletion
      // You can use state management libraries like Redux for this purpose
    })
    .catch(error => {
      console.error('Error deleting layout:', error);
    });
};
  return (
    <>
    <Sidebar/>
     <div class=" p-4 overflow-y-auto ml-16 ">
     <div class="bg-gradient-to-r from-purple-100 via-yellow-100 to-gray-100 p-4 h-screen">

<div class="flex flex-col items-center justify-center">
  <div class="max-w-screen-lg w-full p-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-9 justify-center">
      <button id="One"
            onClick={(e) => {
            hideShow(e)
            }}
       class="bg-yellow-100 text-2xl text-center shadow-lg rounded-lg p-4 hover:shadow-xl transition duration-300 transform hover:-translate-y-1 hover:scale-105">
     
       Questions
      </button>
      <button  id="Two"
            onClick={(e) => {
            hideShow(e)
            }}
       class="bg-yellow-100 text-2xl text-center shadow-lg rounded-lg p-4 hover:shadow-xl transition duration-300 transform hover:-translate-y-1 hover:scale-105">
       
        Layouts
      </button>
    </div>
  </div>
</div>


<div className=''>
    {hide && <div className={Active.id === 'One' ? `One` : 'One hide '}>
      <div className='overflow-y-auto h-screen' >  
  
      {userPosts.map((post) => (
  <div class="px-9 pt-9 ">
  
      <div class="flex justify-between items-center py-2 px-3 gap-3  mt-4 text-gray-900">
          
          <span class="relative inline-block w-full text-gray-900 text-xl rounded-lg">
              
              <Link to={`/question?q=${post._id}`} class="block bg-white p-3 shadow-md hover:shadow-lg transition duration-300 rounded-lg text-gray-500 font-bold text-l">
              {post.title}
              </Link>
            </span>
            <button type="submit" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-purple-400 hover:bg-purple-500 rounded-lg">
              {/* <i class="bi bi-person-lines-fill mr-2"></i>  */}
              {post?.user?.displayName ? post?.user?.displayName :
         String(post?.user?.email).split('@')[0]}              
          </button>
        
      </div>
      <div class="mb-4 w-full bg-purple-200 rounded-lg border border-purple-200">
          <div class="py-2 px-4 bg-white rounded-t-lg">
              <label for="answers" class="sr-only"></label>
              <p class="w-full text-lg text-gray-900 bg-white border-0 border-b border-dashed focus:border-transparent focus:outline-none py-1">
              {ReactHtmlParser(truncate(post.body, 200))}
                </p>
                
             
          </div>
     
          <div class="flex justify-between items-center py-2
           px-3 border-t dark:border-gray-600">
            <div className='flex justify-around gap-3'>
            <button type="submit" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-purple-500 rounded-lg focus:ring-4 focus:ring-purple-200">
              {post?.answerDetails?.length}<span className='mx-2'>ans</span>
              </button>
              <button type="submit" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-purple-500 rounded-lg focus:ring-4 focus:ring-purple-200">
              {new Date(post?.created_at).toLocaleString()}
              </button>

            </div>
            
             
            <div class="flex justify-around gap-3">
            <DeeletQ qid={post._id}/>
            </div>
          </div>
            
             
            {/* <div class="flex justify-around gap-3">
           
              <button type="submit" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-purple-500 rounded-lg focus:ring-4 focus:ring-purple-200">
              {post?.answerDetails?.length}<span className='mx-2'>ans</span>
              </button>
              <button type="submit" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-purple-500 rounded-lg focus:ring-4 focus:ring-purple-200">
              {new Date(post?.created_at).toLocaleString()}
              </button>
              
      
             
            </div> */}
       
     
      </div>
   </div>
))}

   

 

  </div>
          </div>}
          {hide &&   <div className={Active.id === 'Two' ? `Two` : 
          'Two hide '}>
              {Layouts.map((layout) => (
                
          <div class="px-6 pt-9 pb-9 mt-5 shadow-xl border border-gray-200 
               rounded-lg bg-gradient-to-b from-purple-100 via-purple-200 to-purple-300">
                   
                  <div class="flex justify-end items-center py-2 px-3 gap-3 mt-4
                   text-gray-900">
                    
                  <p class="inline-flex items-center py-2.5 px-4 
                      text-xs font-medium text-center text-white
                       bg-purple-400 hover:bg-purple-500 rounded-lg
                        focus:border-transparent focus:outline-none"
                      
                        
                        >
                          {layout.author}
                      </p>
                      <button class="inline-flex items-center py-2.5 px-4 text-xs
                       font-medium text-center text-white bg-purple-400
                        hover:bg-purple-500 rounded-lg focus:border-transparent
                         focus:outline-none"
                         id="divOne"
                         onClick={(e) => {
                         hideShowDiv(e)
                         }}
                         >
                          Html
                      </button>
                      <button class="inline-flex items-center 
                      py-2.5 px-4 text-xs font-medium text-center text-white
                       bg-purple-400 hover:bg-purple-500 rounded-lg"
                       id="divTwo"
            onClick={(e) => {
            hideShowDiv(e)
            }}
                       
                       >
                          CSS
                      </button>
                      <button type="submit" class="inline-flex items-center py-2.5 
                      px-4 text-xs font-medium text-center text-white bg-purple-400
                       hover:bg-purple-500 rounded-lg"
                       id="divThree"
                       onClick={(e) => {
                    hideShowDiv(e)
                      }}
                      title='output'
                       >
                          Js
                      </button>
                      <DeleteLayout layoutId={layout._id}/>
                  </div>
                  {visible &&  <div className={isActive.id === 'divOne' ? `divOne` : 'divOne  css js'}>

<SyntaxHighlighter language="html" 
className="scroll border-4 border-purple-300 rounded-lg"  showLineNumbers={true} wrapLines={true} >
{/* {html} */}
{layout.html}
</SyntaxHighlighter>
</div>}
{visible &&  <div className={isActive.id === 'divTwo' ? `divTwo` : 'divTwo d-none js css'}>

   <SyntaxHighlighter language="css" className="scroll 
   border-4 border-purple-300 rounded-lg"  showLineNumbers={true} wrapLines={true} >
{/* {css} */}
{layout.css}
</SyntaxHighlighter>
</div>}
{visible &&  <div className={isActive.id === 'divThree' ? `divThree` : 'divTwo d-none css html'}>
 
   <SyntaxHighlighter language="js" className="scroll border-4 border-purple-300 rounded-lg"
     showLineNumbers={true} wrapLines={true} >
{/* {js} */}
{layout.js}
</SyntaxHighlighter>
</div>}

 

               
                  <div class="py-2 px-4 bg-white rounded-t-lg">
                      <label for="codepan" class="sr-only"></label>
                 
                      <div class="relative h-96">
                          <iframe id="codepan" class="w-full 
                          h-96 bg-white border-0 focus:border-transparent 
                          focus:outline-none" 
                          srcDoc={`
    <html>
      <body>${layout.html}</body>
      <style>${layout.css}</style>
      <script>${layout.js}</script>
    </html>
  `}
  height="100%"
  width="100%"
                          
                          ></iframe>
                         
                      </div>
                  </div>
  
  
                  <Comment layoutId={layout._id}/>
  
                  
              </div>
                ))}
          </div>}

    </div>

 
</div>
      </div></>
 
      
      
      

  )
}

export default UserPost