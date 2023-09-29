import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import { login, logout, selectUser } from "../../features/Slice";
import { useDispatch, useSelector } from "react-redux";
export default function Comment({layoutId}) {
    const [comments, setComments] = useState([]);
    const user = useSelector(selectUser);
    const [text, setText] = useState('');
    const handleCommentSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:80/api/comment/comments/${layoutId}`, { 
          text,user:user, layoutId})
          .then(response => {
            setText('');
            handlegetCommentSubmit ()
            // Update comment list
          })
          .catch(error => console.error('Error submitting comment:', error));
      };
      const handlegetCommentSubmit = async (e) => {
     
        const response = await axios.get(`http://localhost:80/api/comment/getcomments/${layoutId}`)
     setComments(response.data)

          console.log(response)
      };
     // onMount
useEffect(() => {
	handlegetCommentSubmit ()
}, [layoutId]);
  return (
    <>
        <div class="my-4 w-full rounded-lg border border-purple-200">
                          <form onSubmit={handleCommentSubmit}>
                            <div class="py-2 px-4 bg-white rounded-t-lg">
                                <label for="Question" class="sr-only"></label>
                                <textarea value={text} onChange={e => setText(e.target.value)}
                                id="Question" rows="4" class="px-0 w-full text-sm text-gray-900 bg-white border-0 focus:border-transparent focus:outline-none" placeholder="Comment..."></textarea>
                            </div>
        
                            <div class="flex justify-start items-center py-2 px-3 border-t dark:border-gray-600">
                                <button type="submit" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-purple-500 rounded-lg focus:ring-4 focus:ring-purple-200 hover:bg-purple-600">
                                    Comment
                                </button>
                            </div>
                            </form>
                            {comments.map(comment => (
                            <div class="mb-4 w-full rounded-lg border border-purple-200">
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
            
                                     <p type="submit" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-purple-500 rounded-lg focus:ring-4 focus:ring-purple-200 hover:bg-purple-600">
                                    {comment.user.displayName}
                                    </p>
                                    <p class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-purple-500 rounded-lg focus:ring-4 focus:ring-purple-200 hover:bg-purple-600">
                                        23/07/2023
                                    </p>
            
                                </div>
                            </div>
                           
              ))}
        
                    
        
        
                       
        
        
        
                        
                            <div class="flex gap-3 items-center py-2 px-3 border-t dark:border-gray-600">
                                <span class="inline-flex items-center py-2.5 px-4 text-s font-medium text-center text-purple-600">
                                    Tags:
                                </span>
                                <span class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-purple-500 rounded-lg focus:ring-4 focus:ring-purple-200 hover:bg-purple-600">
                                    Html
                                </span>
                                <span class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-purple-500 rounded-lg focus:ring-4 focus:ring-purple-200 hover:bg-purple-600">
                                    CSS
                                </span>
                                <span class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-purple-500 rounded-lg focus:ring-4 focus:ring-purple-200 hover:bg-purple-600">
                                    Responsive
                                </span>
                            </div>
                        </div>
    </>
  )
}
