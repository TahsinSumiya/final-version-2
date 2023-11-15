import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import { login, logout, selectUser } from "../../features/Slice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
export default function Admincomment({layoutId}) {
    const [comments, setComments] = useState([]);
    const user = useSelector(selectUser);
    const [text, setText] = useState('');
    const [name, setName] = useState('');
    const handleCommentSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:80/api/comment/comments/${layoutId}`, { 
          text,id:"", layoutId,name:'admin'})
          .then(response => {
            setText('');
            handlegetCommentSubmit ()
            // Update comment list
          })
          .catch(error => console.error('Error submitting comment:', error));
      };
      const handlegetCommentSubmit = async (e) => {
     
        const response = await axios.get(`http://localhost:80/api/comment/getcomments/${layoutId}`)
     setComments(response.data.reverse(0))

          console.log(response)
      };
     // onMount
useEffect(() => {
	handlegetCommentSubmit ()
}, [layoutId]);
  return (
    <>
        <div class="my-4 w-full rounded-lg border border-purple-200 ">
                          <form onSubmit={handleCommentSubmit}>
                            <div class="py-2 px-4 bg-white rounded-t-lg">
                                <label for="Question" class="sr-only"></label>
                                <textarea value={text} onChange={e => setText(e.target.value)}
                                id="Question" rows="4" class="px-0 w-full text-sm text-gray-900 bg-white border-0 focus:border-transparent focus:outline-none" placeholder="Comment..."></textarea>
                            </div>
        
                            <div class="flex justify-end items-center py-2 px-3 border-t dark:border-gray-600">
                                <button type="submit" class="inline-flex items-center py-2.5 px-4 text-xs 
                             font-medium text-center text-white hover:text-gray-700 bg-blue-400 hover:bg-slate-300 hover:border-blue-400 hover:border-b-4 border-blue-400 border-b-4 rounded-lg">
                                    Comment
                                </button>
                            </div>
                            </form>
                            {comments.map(comment => (
                            <div class="mb-4 w-full rounded-lg border border-purple-200 overflow-y-auto">
                                <div class="py-2 px-4 bg-white rounded-t-lg">
                                    <label for="Question" class="sr-only"></label>
                                    <p key={comment._id} id="Question" rows="3" class="px-0 w-full 
                                    text-sm text-gray-900 bg-white border-0 
                                    focus:border-transparent focus:outline-none">
                                    {comment.text}
                                    </p>
                                </div>
         
                                <div class="flex justify-end items-center py-2 px-3 
                                border-t dark:border-gray-600 gap-3">
            
                                     <Link to={comment.id ? `/specificuser?s=${comment.id}` : '/'} type="submit" class="inline-flex gap-5 items-center py-1 px-4 my-2 text-xs font-bold text-center text-gray-700 uppercase border-gray-700 border-b-2 rounded-md bg-slate-300 hover:bg-purple-600">
                                    {comment.name}
                                    </Link>
                                    <p class="inline-flex gap-5 items-center py-1 px-4 my-2 text-xs font-bold text-center text-gray-700 uppercase border-gray-700 border-b-2 rounded-md bg-slate-300 hover:bg-purple-600">
                                        23/07/2023
                                    </p>
            
                                </div>
                            </div>
                           
              ))}
        
                    
        
        
                       
        
        
        
                        </div>
    </>
  )
}
