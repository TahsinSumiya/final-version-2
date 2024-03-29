import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import { login, logout, selectUser } from "../../features/Slice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
export default function Comment({layoutId}) {
    const [comments, setComments] = useState([]);
    const user = useSelector(selectUser);
    const [text, setText] = useState('');
    const [name, setName] = useState('');
    
    const handleCommentSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:80/api/comment/comments/${layoutId}`, { 
          text,id:user.uid, layoutId,name:user.displayName})
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
                                <button type="submit" class="inline-flex end
                                items-center py-2.5 px-4 text-xs font-medium 
                                text-center text-white hover:text-gray-700 bg-blue-400 hover:bg-slate-300 hover:border-blue-400 hover:border-b-4 border-blue-400 border-b-4 rounded-lg">
                                    Comment
                                </button>
                            </div>
                            </form>
                            <div  className="overflow-y-auto h-72"
      >
                            {comments.map(comment => (
                            
                            <div class="mb-4 w-full rounded-lg border
                             border-purple-200 overflow-y-auto">
                                <div class="py-2 px-4 bg-white rounded-t-lg overflow-y-auto">
                                  
                                    <p key={comment._id} id="Question"  class="px-0 w-full 
                                    text-sm text-gray-900 bg-white border-0 
                                    focus:border-transparent focus:outline-none">
                                    {comment.text}
                                    </p>
                                </div>
         
                                <div class="flex justify-end items-center py-2 px-3 
                                border-t dark:border-gray-600 gap-3">
            
                                     <Link to={comment.id ? `/specificuser?s=${comment.id}` : ''}  class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white hover:text-gray-700 bg-blue-400 hover:bg-slate-300 hover:border-blue-400 hover:border-b-4 border-blue-400 border-b-4 rounded-lg">
                                    {comment.name}
                                    </Link>
                                    <p class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white hover:text-gray-700 bg-blue-400 hover:bg-slate-300 hover:border-blue-400 hover:border-b-4 border-blue-400 border-b-4 rounded-lg">
                                    {new Date(comment.created_at).toLocaleString()}
                                    </p>
            
                                </div>
                            </div>
                          
              ))}
          </div>
                    
        
        
                       
        
        
        
                        
                  
                        </div>
    </>
  )
}
