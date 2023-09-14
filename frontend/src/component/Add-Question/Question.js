import React from 'react'
import ReactQuill from 'react-quill'
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import Editor from "react-quill/lib/toolbar";
import { useState } from "react";
import axios from "axios";
import './TagsInput.css'
import TagsInput from 'react-tagsinput'

import 'react-tagsinput/react-tagsinput.css'
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "../../features/Slice";
export default function Question() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
const [title,setTitle]= useState("")
const [body,setBody]= useState("")
const [tag, setTag] = useState([]);
const navigate = useNavigate()
    const [tags, setTags] = useState([]);
    const addTag = (e) => {
      if (e.key === "Enter") {
        if (e.target.value.length > 0) {
          setTags([...tags, e.target.value]);
          e.target.value = "";
        }
      }
    };
    const removeTag = (removedTag) => {
      const newTags = tags.filter((tag) => tag !== removedTag);
      setTags(newTags);
    };
    const handleQuill = (value) => {
      setBody(value);
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
  
        const bodyJSON = {
          title: title,
          body: body,
          tag: JSON.stringify(tag),
          user: user,
          uuid:user.uid,
        };
        await axios
          .post("http://localhost:80/api/question/", bodyJSON)
          .then((res) => {
            // console.log(res.data);
            alert("Question added successfully");
           navigate("/");
          })
          .catch((err) => {
            console.log(err);
          });
      
    };
    var toolbarOptions = [
      ["bold", "italic", "underline", "strike"], // toggled buttons
      ["blockquote", "code-block"],
  
      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      [{ direction: "rtl" }], // text direction
  
      [{ size: ["small", false, "large", "huge"] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
  
      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],
  
      ["clean"], // remove formatting button
    ];
    Editor.modules = {
      syntax: false,
      toolbar: toolbarOptions,
      clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
      },
    };
    /*
     * Quill editor formats
     * See https://quilljs.com/docs/formats/
     */
    Editor.formats = [
      "header",
      "font",
      "size",
      "bold",
      "italic",
      "underline",
      "strike",
      "blockquote",
      "list",
      "bullet",
      "indent",
      "link",
      "image",
      "video",
    ];
  return (
    <>
   <div className="container  mx-auto px-4 md:px-12 w-screen h-screen ">
        {/* <div class="flex min-h-screen 
   flex-col justify-center
  items-center md:flex-col  md:space-y-14 sm:flex-col sm:space-y-14 sm:justify-content"> */}


  
        <div className='container'>
     
     <div class=" rounded-xl shadow-lg shadow-purple-500/40 bg-purple-100">
       <div class="p-8 border  rounded-b-xl mx-3 mt-3 relative">
       <div className='flex'>
       <h1>ask a question</h1>
  
        </div>
        <div>  
            
            
              <div className='container  '>
     
     <div class=" rounded-xl shadow-lg shadow-purple-500/40 bg-purple-100 ">
       <div class="p-8 border border-purple-500 rounded-b-xl mx-3 mt-3 relative">
         <button class="shadow-lg shadow-purple-500 hover:shadow-purple-800  
         rounded-2xl absolute top-0 right-0 mr-2 mt-2">&times;</button>
         <div class=" text-md  text-xl font-semibold my-10 "> 
          <div className='flex m-3' >
  <h3>Title</h3>
 
<textarea className='px-2 mx-2 w-screen' cols={10} rows={1} value={title}
                  onChange={(e) => setTitle(e.target.value)}/>
          </div>
         </div>
         <div class=" text-md  text-xl font-semibold "> 
          <div className='flex m-3' >
  <h3>Body</h3>
  <ReactQuill  className='h-80 w-screen overscroll-contain quill'   
             value={body}
             onChange={handleQuill}
             modules={Editor.modules}
             
                  theme="snow"
             
                 />
          </div>
         </div>
         <div class=" text-md  text-xl font-semibold "> 
          <div className='flex relative my-10 mt-16' >
  <h3 className='mt-2'>Tags</h3>
 
  <div className="tag-container">
        {/* {tags.map((tag, index) => {
          return (
            <div key={index} className="tag"    >
              {tag} <span onClick={() => removeTag(tag)} >x</span>
            </div>
          );
        })}

        <input onKeyDown={addTag} value={tag}
            onChange={setTag} /> */}
            <TagsInput  value={tag}
                  onChange={setTag}
                  name="fruits"
                  placeHolder="press enter to add new tag" />
      </div>
    

       
      
          </div>
          <button type='submit' className=''onClick={handleSubmit} >add</button>
         </div>


       </div>
 
     
     </div>
     </div>
     </div></div></div></div>
     
     
      </div>
        


  
 
   
    </>
  )
}
