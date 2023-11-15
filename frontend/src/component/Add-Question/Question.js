import React from 'react'
import ReactQuill from 'react-quill'
import "react-quill/dist/quill.snow.css";
import { NavLink, useNavigate } from "react-router-dom";
import Editor from "react-quill/lib/toolbar";
import { useState } from "react";
import axios from "axios";
import './TagsInput.css'
import TagsInput from 'react-tagsinput'
import bgimg from '../static/Images/wp7213373.webp'
import 'react-tagsinput/react-tagsinput.css'
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "../../features/Slice";
import Sidebar from '../Sidebar/Sidebar';
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
           navigate('/allquestion')
            alert("Question added successfully");
     
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
    <div className='h-screen overflow-y-auto'>
     <Sidebar/>
      <div class=" px-24 overflow-y-auto ml-16 h-screen shadow-lg">
   
      
        <div class="relative h-full bg-opacity-60 backdrop-blur-lg">
            
          
          <div class="absolute inset-0">
           
           
             <form class="px-6 pt-9 mt-5 shadow-gray-300 shadow-xl border border-gray-200 rounded-lg bg-slate-200">
                <div class=" items-center py-2 px-3 gap-3 mt-4 text-gray-900 ">
                    <input  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                     type="text" placeholder="Question Title" class="w-full text-gray-900 p-3 border-0 text-2xl focus:border-transparent focus:outline-none rounded-lg"/>
                </div>
                <div class="mb-4 w-full rounded-lg border border-purple-200">
                    <div class="py-2 px-4 bg-white rounded-t-lg h-96">
                        <label for="Question" class="sr-only"></label>
                        <ReactQuill  className='h-80 quill px-0 w-full text-sm text-gray-900 bg-white border-0 focus:border-transparent focus:outline-none'   
             value={body}
             onChange={handleQuill}
             modules={Editor.modules}
             
                  theme="snow"
             
                 />
                    </div>
                    <div class=" items-center py-2 px-3 gap-3 mt-4 text-gray-900">
                    {/* <p 
                      class="w-full bg-slate-50 text-gray-900 p-8 border-0 text-2xl
                       focus:border-transparent focus:outline-none rounded-lg"/> */}
                        <TagsInput  value={tag}
                            class="w-full bg-slate-500 text-gray-900 p-8 border-0 text-2xl
                            focus:border-transparent focus:outline-none rounded-lg"
                  onChange={setTag}
                  name="fruits"
                 />
                </div>
                    <div class="flex justify-between items-center py-2 px-3 border-t dark:border-gray-600">
                        <button onClick={handleSubmit}
                         type="submit" class="inline-flex items-center py-2.5 px-4 text-xs 
                         font-medium text-center text-white hover:text-gray-700 bg-blue-400 hover:bg-slate-300 hover:border-blue-400 hover:border-b-4 border-blue-400 border-b-4 rounded-lg">
                            Add Question
                        </button>
                    </div>
                </div>
            </form>
            
         
            </div>
    </div>

             
</div>

</div>

  
 
   
    </>
  )
}
