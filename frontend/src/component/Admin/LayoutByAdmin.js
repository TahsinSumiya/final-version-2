
import React from 'react'
import { login, logout, selectUser } from "../../features/Slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect ,useState} from "react";
import { Link } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import ReactHtmlParser from "react-html-parser"

import Comment from '../Layout/Comment';
import '../User/css/profile.css'
import axios from "axios";
import DeleteLayout from '../User/DeleteLayout';
import Sidebar from '../Sidebar/Sidebar';
import Admincomment from './Admincomment';
import Tags from '../Layout/Tags';
import AdminSideBar from './AdminSideBar';
export default function LayoutByAdmin() {
    const [userPosts, setUserPosts] = useState([]);
    const [Layouts, setLayouts] = useState([]);
    const [hide, sethide] = useState(false) 
    const [visible, setVisible] = useState(false) 
    const [text, setText] = useState('');
    const [comments, setComments] = useState([]);
    const [open, setOpen] = useState('');

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
   
      axios
        .get('http://localhost:80/api/admin/')
        .then((response) => {
         
          setLayouts(response.data);
        })
        .catch((error) => {
          console.error('Error fetching user profile:', error);
        });
    }, []); 

    const handleCommentSubmit = (e,layoutId) => {
      e.preventDefault();
      axios.post(`http://localhost:80/api/comment/comments/${layoutId}`, { 
        text})
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
  return (
    <>
<AdminSideBar/>
<div class=" px-4 overflow-y-auto ml-52  ">
        {Layouts.map((layout) => (
          <div
            class="px-6 pt-9 pb-9 mt-5 shadow-xl border border-gray-200 
                           rounded-lg bg-gradient-to-b from-slate-100  to-slate-200"
          >
            <div
              class="flex justify-end items-center py-2 px-3 
                              gap-3  text-gray-900"
            >
              <div></div>
              
              <button
                class="inline-flex items-center 
                py-2.5 px-4 text-xs font-medium text-center border-blue-400 border-b-4 bg-slate-300 hover:bg-blue-400 text-gray-800 hover:text-white rounded-lg"
                id="divOne"
                onClick={(e) => {
                  hideShowDiv(e);
                }}
              >
                Html
              </button>
              <button
                class="inline-flex items-center 
                py-2.5 px-4 text-xs font-medium text-center border-blue-400 border-b-4 bg-slate-300 hover:bg-blue-400 text-gray-800 hover:text-white rounded-lg"
                id="divTwo"
                onClick={(e) => {
                  hideShowDiv(e);
                }}
              >
                CSS
              </button>
              <button
                type="submit"
                class="inline-flex items-center 
                py-2.5 px-4 text-xs font-medium text-center border-blue-400 border-b-4 bg-slate-300 hover:bg-blue-400 text-gray-800 hover:text-white rounded-lg"
                id="divThree"
                onClick={(e) => {
                  hideShowDiv(e);
                }}
                title="output"
              >
                Js
              </button>
              <DeleteLayout layoutId={layout._id} />
            </div>
            {visible && (
              <div
                className={
                  isActive.id === "divOne" ? `divOne` : "divOne  css js"
                }
              >
                <SyntaxHighlighter
                  language="html"
                  className="scroll border-4 border-blue-300 rounded-lg"
                  showLineNumbers={true}
                  wrapLines={true}
                >
                  {/* {html} */}
                  {layout.html}
                </SyntaxHighlighter>
              </div>
            )}
            {visible && (
              <div
                className={
                  isActive.id === "divTwo" ? `divTwo` : "divTwo d-none js css"
                }
              >
                <SyntaxHighlighter
                  language="css"
                  className="scroll 
               border-4 border-blue-300 rounded-lg"
                  showLineNumbers={true}
                  wrapLines={true}
                >
                  {/* {css} */}
                  {layout.css}
                </SyntaxHighlighter>
              </div>
            )}
            {visible && (
              <div
                className={
                  isActive.id === "divThree"
                    ? `divThree`
                    : "divTwo d-none css html"
                }
              >
                <SyntaxHighlighter
                  language="js"
                  className="scroll border-4 border-blue-300 rounded-lg"
                  showLineNumbers={true}
                  wrapLines={true}
                >
                  {/* {js} */}
                  {layout.js}
                </SyntaxHighlighter>
              </div>
            )}

            <div class="py-2 px-4 bg-white rounded-t-lg">
              <label for="codepan" class="sr-only"></label>

              <div class="relative h-96">
                <iframe
                  id="codepan"
                  class="w-full 
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

            <div class="flex justify-end items-center py-2 px-3 border-t dark:border-gray-600">
              <button
                type="submit"
                class="inline-flex items-center py-2.5 px-4 text-xs 
                             font-medium text-center text-white hover:text-gray-700 bg-blue-400 hover:bg-slate-300 hover:border-blue-400 hover:border-b-4 border-blue-400 border-b-4 rounded-lg"
                onClick={() => setOpen((hide) => !hide)}
              >
                Comment
              </button>
            </div>

            {open && <Admincomment layoutId={layout._id} />}
            <Tags tags={JSON.parse(layout.tags[0])} />
          </div>
        ))}
      </div>
    </>
  )
}
