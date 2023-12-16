
import React, { useState,useEffect } from 'react';
import DatePicker from "react-datepicker";  
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css"; 
import { login, logout, selectUser } from "../../features/Slice"; 
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { auth } from "../../firebase";
import UserPost from '../User/UserPost';
import ViewProfile from '../User/ViewProfile';
import Comment from '../Layout/Comment';
import ReactHtmlParser from "react-html-parser"
import '../User/css/profile.css'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import Sidebar from '../Sidebar/Sidebar';
import Tags from '../Layout/Tags';
export default function ListUser() {
    const [linkedin, setlinkedin] = useState("");
    const [github, setgithub] = useState("");
    const [date, setdate] = useState(null); // Change the initial state for date to null
    const [category, setcategory] = useState("looking-for-job");
    const [email, setemail] = useState("");
    const [desc, setDesc] = useState("");
    const user = useSelector(selectUser);
    const [open, setOpen] = useState('');
    const dispatch = useDispatch();
    let search = window.location.search;
    const params = new URLSearchParams(search);
    const id = params.get("s");
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
      
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const bodyJSON = {
                linkedin: linkedin,
                github: github,
                birthdate: date, // Use the date state directly
                user: user,
                uuid: user.uid,
                name: user.displayName,
                category: category,
                email: category === 'hiring' ? email : '',
                desc:desc 
            };

            const response = await axios.post("http://localhost:80/api/user/profile", bodyJSON);

            if (response.status === 200) { // Check the response status
                alert('User created successfully!');
                // Reset the form or perform any other necessary actions
                setlinkedin("");
                setgithub("");
                setdate(null);
                setcategory("looking-for-job");
                setemail("");
                setDesc("")
            } else {
                alert('Failed to create user.');
            }
        } catch (error) {
            console.error('Error creating user:', error);
        }
    };
    const [userProfile, setUserProfile] = useState(null);
  
  
    useEffect(() => {
      // Fetch user profile by user UID
      axios
        .get(`http://localhost:80/api/user/getuserpofile/${id}`)
        .then((response) => {
          setUserProfile(response.data);
        })
        .catch((error) => {
          console.error('Error fetching user profile:', error);
        });
    }, [
      id
    ]); 
    
    useEffect(() => {
      // Fetch user profile by user UID
      axios
        .get(`http://localhost:80/api/layouts/getlayoutsbyId/${id}`)
        .then((response) => {
          setLayouts(response.data.reverse(0));
        })
        .catch((error) => {
          console.error('Error fetching user profile:', error);
        });
    }, [
      id
    ]); 

    useEffect(() => {
        
        // Fetch posts by user UID
        axios.get(`http://localhost:80/api/user/postbyid/${id}`)
          .then((response) => {
            setUserPosts(response.data.reverse(0));
          })
          .catch((error) => {
            console.error('Error fetching user posts:', error);
          });
      
    }, []); 
  

  return (
    <>
        <div class="  overflow-y-auto ">
        <div class=" p-4">
        <div class="bg-gradient-to-r from-slate-100  to-slate-200 p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer">
            {userProfile ? (
              <div>
                <div class="mb-4">
                  <h2 class="text-black uppercase  text-2xl font-bold font-serif">
                    {" "}
                    <span>
                      {" "}
                      {userProfile && userProfile.image ? (
  <img className="rounded-full w-10 h-10 ml-2" src={`http://localhost:80/images/${userProfile.image}`} alt='profile-image' />
) : (
  <i className="bi bi-person-lines-fill"></i>
)}

                    </span>
                    {userProfile.name}
                  </h2>
                  <div className="pl-3">
                    <Link
                      to={userProfile.linkedin}
                      target="_blank"
                      class="text-black hover:text-blue-600 hover:underline mr-4"
                    >
                      LinkedIn
                    </Link>
                    <Link
                      to={userProfile.github}
                      target="_blank"
                      class="text-black hover:text-blue-600 hover:underline"
                    >
                      GitHub
                    </Link>
                    <p class="text-gray-500 mb-4">{userProfile.desc}</p>
                    <p class="text-gray-500 mb-4 font-medium">Goals : {userProfile.goals}</p>
                    <p class="text-gray-500 mb-4">{userProfile.category}</p>
                  <a href={`mailto:${userProfile.email}`} className="text-gray-500 mb-4">Contact Email: {userProfile.email}</a>
                  </div>
                </div>
              </div>
            ) : (
              <p>User hasnt created a Profile</p>
            )}
          </div>

          <div class="bg-gradient-to-r from-slate-100  to-slate-200 p-4 h-screen">
            <div class="flex flex-col items-center justify-center">
              <div class="max-w-screen-lg w-full p-4">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-9 justify-center">
                  <button
                    id="One"
                    onClick={(e) => {
                      hideShow(e);
                    }}
                    class="bg-blue-200 text-2xl text-center shadow-lg rounded-lg p-4 hover:shadow-xl transition duration-300 transform hover:-translate-y-1 hover:scale-105"
                  >
                    Questions
                  </button>
                  <button
                    id="Two"
                    onClick={(e) => {
                      hideShow(e);
                    }}
                    class="bg-blue-200 text-2xl text-center shadow-lg rounded-lg p-4 hover:shadow-xl transition duration-300 transform hover:-translate-y-1 hover:scale-105"
                  >
                    Layouts
                  </button>
                </div>
              </div>
            </div>

            <div className="">
              {hide && (
                <div className={Active.id === "One" ? `One` : "One hide "}>
                  <div className="overflow-y-auto ">
                    {userPosts.map((post) => (
                      <div class="px-9 pt-9 ">
                        <div class="py-2  gap-3  mt-4 text-gray-900">
                          <span class="relative inline-block w-full text-gray-900 text-xl rounded-lg">
                            <Link
                              to={`/question?q=${post._id}`}
                              class="block bg-white p-3 shadow-md hover:shadow-lg transition duration-300 rounded-lg text-gray-500 font-bold text-l"
                            >
                              {post.title}
                            </Link>
                          </span>
                        </div>
                        <div class="mb-4 w-full  rounded-lg">
                          <div class="py-2 px-4 bg-white rounded-t-lg">
                            <label for="answers" class="sr-only"></label>
                            <p class="w-full text-lg text-gray-900 bg-white border-0 border-b border-dashed focus:border-transparent focus:outline-none py-1">
                              {ReactHtmlParser(truncate(post.body, 200))}
                            </p>
                          </div>
                          <div
                            class="flex justify-between items-center py-2
           px-3 border-t dark:border-gray-600"
                          >
                            <div class="flex justify-around gap-3">
                              <button
                                type="submit"
                                class="inline-flex gap-5 items-center py-1 px-4 my-2 text-xs font-bold text-center text-gray-700 uppercase border-gray-700 border-b-2 rounded-md bg-slate-300"
                              >
                                {post?.answerDetails?.length}
                                <span className="mx-2">ans</span>
                              </button>
                              <button
                                type="submit"
                                class="inline-flex gap-5 items-center py-1 px-4 my-2 text-xs font-bold text-center text-gray-700 uppercase border-gray-700 border-b-2 rounded-md bg-slate-300"
                              >
                                {new Date(post?.created_at).toLocaleString()}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {hide && (
                <div className={Active.id === "Two" ? `Two` : "Two hide "}>
                  {Layouts.map((layout) => (
                    <div
                      class="px-6 pt-9 pb-9 mt-5 shadow-xl border border-gray-200 
               rounded-lg bg-gradient-to-b from-slate-100  to-slate-200"
                    >
                      {/* <p class="inline-flex items-center py-2.5 px-4 
                      text-xs font-medium text-center text-white
                       bg-purple-400 hover:bg-purple-500 rounded-lg
                        focus:border-transparent focus:outline-none"
                      
                        
                        >
                          {layout.length}
                      </p> */}
                      <div class="flex justify-end items-center py-2 px-3 gap-3 mt-4 text-gray-900">
                        <button
                          class="inline-flex items-center py-2.5 px-4 text-xs
                          font-medium text-center border-blue-400 border-b-4 bg-slate-300 hover:bg-blue-400 text-gray-800 hover:text-white rounded-lg focus:border-transparent
                            focus:outline-none"
                          id="divOne"
                          onClick={(e) => {
                            hideShowDiv(e);
                          }}
                        >
                          Html
                        </button>
                        <button
                          class="inline-flex items-center py-2.5 px-4 text-xs
                          font-medium text-center border-blue-400 border-b-4 bg-slate-300 hover:bg-blue-400 text-gray-800 hover:text-white rounded-lg focus:border-transparent
                            focus:outline-none"
                          id="divTwo"
                          onClick={(e) => {
                            hideShowDiv(e);
                          }}
                        >
                          CSS
                        </button>
                        <button
                          type="submit"
                          class="inline-flex items-center py-2.5 px-4 text-xs
                          font-medium text-center border-blue-400 border-b-4 bg-slate-300 hover:bg-blue-400 text-gray-800 hover:text-white rounded-lg focus:border-transparent
                            focus:outline-none"
                          id="divThree"
                          onClick={(e) => {
                            hideShowDiv(e);
                          }}
                          title="output"
                        >
                          Js
                        </button>
                      </div>
                      {visible && (
                        <div
                          className={
                            isActive.id === "divOne"
                              ? `divOne`
                              : "divOne  css js"
                          }
                        >
                                    {layout.html ? (
  <SyntaxHighlighter
    language="html"
    className="scroll border-4 border-purple-300 rounded-lg"
    showLineNumbers={true}
    wrapLines={true}
  >
    {layout.html}
  </SyntaxHighlighter>
) : (
  <p>No code avaiable for this section</p>
)}
                        </div>
                      )}
                      {visible && (
                        <div
                          className={
                            isActive.id === "divTwo"
                              ? `divTwo`
                              : "divTwo d-none js css"
                          }
                        >
                                     {layout.css ? (
  <SyntaxHighlighter
    language="html"
    className="scroll border-4 border-purple-300 rounded-lg"
    showLineNumbers={true}
    wrapLines={true}
  >
    {layout.css}
  </SyntaxHighlighter>
) : (
  <p>No code avaiable for this section</p>
)}
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
                                     {layout.js ? (
  <SyntaxHighlighter
    language="html"
    className="scroll border-4 border-purple-300 rounded-lg"
    showLineNumbers={true}
    wrapLines={true}
  >
    {layout.js}
  </SyntaxHighlighter>
) : (
  <p>No code avaiable for this section</p>
)}
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

                      <Tags tags={JSON.parse(layout.tags[0])} />

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

                      {open && <Comment layoutId={layout._id} />}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
