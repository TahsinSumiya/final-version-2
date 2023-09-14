import React from 'react'
import { Link } from 'react-router-dom'
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Editor from "react-quill/lib/toolbar";
import ReactHtmlParser from "react-html-parser";
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
    <div className='container '>
     
    <div class=" rounded-xl shadow-lg shadow-purple-500/40 bg-purple-100 ">
      <div class="p-8 border border-purple-500 rounded-b-xl mx-3 mt-3 relative">
        <button class="shadow-lg shadow-purple-500 hover:shadow-purple-800  
        rounded-2xl absolute top-0 right-0 mr-2 mt-2">&times;</button>
        <div class=" text-md  text-xl font-semibold "> 
         <div  >
 <Link to={`/question?q=${data?._id}`} className='text-purple-500'>{data.title}</Link>
<p>
{ReactHtmlParser(truncate(data.body, 200))}

</p>
         </div>
        </div>
     
         <div class="flex space-x-9">
         {/* {tags.map((tag) => (
                <p
            class="py-2 mt-5 px-6 rounded-xl border-2 border-purple-500 font-semibold text-l
             hover:bg-purple-400 duration-200"> {tag}</p>
             ))}   */}
             {tags.map((_tag) => (
              <p
                style={{
                  margin: "10px 5px",
                  padding: "5px 10px",
                  backgroundColor: "#007cd446",
                  borderRadius: "3px",
                }}
              >
                {_tag}
              </p>
            ))}
        </div>
        
    
          {/* <div
        
          >
           
              <p
                style={{
                  margin: "10px 5px",
                  padding: "5px 10px",
                  backgroundColor: "#007cd446",
                  borderRadius: "3px",
                }}
              >
                
              </p>
        
          </div> */}
        <div class="flex space-x-9">
        <button
            class="py-2 mt-5 px-6 rounded-xl border-2 border-purple-500 font-semibold text-l hover:bg-purple-400 duration-200"><i
              class="fa-regular fa-thumbs-up "></i><span class="pl-3">vote</span></button>
          <button
            class="py-2 mt-5 px-6 rounded-xl border-2 border-purple-500 font-semibold text-l hover:bg-purple-400 duration-200"><i
              class="fa-regular fa-thumbs-up "></i><span class="pl-3">{data?.answerDetails?.length}ans</span></button>
          <button
            class="py-2 mt-5 px-6 rounded-xl border-2 border-purple-500 font-semibold text-l
             hover:bg-purple-400 duration-200">
             {new Date(data?.created_at).toLocaleString()}
             
             </button>
                {/* <p
            class="py-2 mt-5 px-6 rounded-xl border-2 border-purple-500 font-semibold text-l
             hover:bg-purple-400 duration-200">{data?.user?.photo}</p> */}
              <p
            class="py-2 mt-5 px-6 rounded-xl border-2 border-purple-500 font-semibold text-l
             hover:bg-purple-400 duration-200">{data?.user?.displayName ? data?.user?.displayName :
               String(data?.user?.email).split('@')[0]}</p>
        </div>
      </div>

    
    </div>
    </div>
    </>
  )
}
