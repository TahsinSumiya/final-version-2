import React from 'react'
import { Link } from 'react-router-dom'
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Editor from "react-quill/lib/toolbar";
import ReactHtmlParser from "react-html-parser";
import SideBar from '../Sidebar/Sidebar'
import Sidebar from '../Sidebar/Sidebar';
export default function Allquestions({ data }) {
  // let tags = JSON.parse(data?.tags[0]);
  
  let tags = JSON.parse(data?.tags[0]);
  // const TagList = () => {
  //   const tags = data.map(tagString => JSON.parse(tagString));
  // }
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  
  return (
    <>
    {/* <Sidebar/> */}





 
        
     
        <div class="px-9 pt-9">
     
        <div class="overflow-y-auto bg-gradient-to-r from-purple-100 via-yellow-200 to-purple-200 p-4 backdrop-blur-md">
            <div class="flex justify-between items-center py-2 px-3 gap-3  mt-4 text-gray-900">
                
                <span class="relative inline-block w-full text-gray-900 text-xl rounded-lg">
                    
                    <Link to={`/question?q=${data?._id}`} class="block
                     bg-white p-3 shadow-md hover:shadow-lg transition
                      duration-300 rounded-lg text-gray-500 font-bold text-l">
                    {data.title}
                    </Link>
                  </span>
                  
                <Link to={`/specificuser?s=${data.user.uid}`}  class="inline-flex items-center py-2.5 px-4 
                text-xs font-medium text-center text-white bg-purple-400
                
                hover:bg-purple-500 rounded-lg">
                    {/* <i class="bi bi-person-lines-fill mr-2"></i>  */}
                    {data?.user?.displayName ? data?.user?.displayName :
               String(data?.user?.email).split('@')[0]}              
                </Link>
            </div>
            <div class="mb-4 w-full bg-purple-200 rounded-lg border border-purple-200">
                <div class="py-2 px-4 bg-white rounded-t-lg">
                    <label for="answers" class="sr-only"></label>
                    <p class="w-full text-lg text-gray-900 bg-white border-0 border-b border-dashed focus:border-transparent focus:outline-none py-1">
                    {ReactHtmlParser(truncate(data.body, 200))}
                      </p>
                      
                   
                </div>
                <div class="flex justify-between items-center py-2
                 px-3 border-t dark:border-gray-600">
                  <div className='flex justify-around gap-3'>
                  {tags.map((_tag) => (
                    <p class=" inline-flex gap-5 items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-purple-500 rounded-lg focus:ring-4 focus:ring-purple-200">
                     {_tag}
                    </p>
                     ))}

                  </div>
                  
                   
                  <div class="flex justify-around gap-3">
                    <button type="submit" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-purple-500 rounded-lg focus:ring-4 focus:ring-purple-200">
                    {data?.answerDetails?.length}<span className='mx-2'>ans</span>
                    </button>
                    <button type="submit" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-purple-500 rounded-lg focus:ring-4 focus:ring-purple-200">
                    {new Date(data?.created_at).toLocaleString()}
                    </button>
                  </div>
                </div>
            </div>
         </div>
         </div>

         

       

  
   





  
    </>
  )
}
