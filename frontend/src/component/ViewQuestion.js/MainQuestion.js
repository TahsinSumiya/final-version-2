import React, { useEffect, useState } from "react";
import ReactQuill from 'react-quill'
import ReactHtmlParser from "react-html-parser";
import '../Add-Question/TagsInput.css'
import "react-quill/dist/quill.snow.css";
import { Link } from 'react-router-dom';
import '../Add-Question/TagsInput.css'
import TagsInput from 'react-tagsinput'
import Editor from "react-quill/lib/toolbar";
import "react-quill/dist/quill.snow.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/Slice";
import axios from "axios";
export default function MainQuestion() {


  const user = useSelector(selectUser);

  // const [comments, setComments] = useState([]);
  const [questionData, setQuestionData] = useState();
  const [answer, setAnswer] = useState("");
    const [show, setShow] = useState(false);
    let search = window.location.search;
    const params = new URLSearchParams(search);
    const id = params.get("q");
    useEffect(() => {
      async function getFunctionDetails() {
        await axios
          .get(`http://localhost:80/api/question/${id}`)
          .then((res) => setQuestionData(res.data[0]))
          .catch((err) => console.log(err));
      }
      getFunctionDetails();
    }, [id]);
  
    const handleQuill = (value) => {
      setAnswer(value);
    };
    async function getUpdatedAnswer() {
      await axios
        .get(`http://localhost:80/api/question/${id}`)
        .then((res) => setQuestionData(res.data[0]))
        .catch((err) => console.log(err));
    }
    const handleSubmit = async () => {
      const body = {
        question_id: id,
        answer: answer,
        user: user,
      };
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      await axios
        .post("http://localhost:80/api/answer", body, config)
        .then(() => {
          alert("Answer added successfully");
          setAnswer("");
          getUpdatedAnswer();
        })
        .catch((err) => console.log(err));
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
   <div className="container  mx-auto px-4 md:px-12 w-screen h-screen  overflow-auto">
        {/* <div class="flex min-h-screen 
   flex-col justify-center
  items-center md:flex-col  md:space-y-14 sm:flex-col sm:space-y-14 sm:justify-content"> */}


  
        <div className='container'>
     
     <div class=" rounded-xl shadow-lg shadow-purple-500/40 bg-purple-100">
       <div class="p-8 border  rounded-b-xl mx-3 mt-3 relative">
       <div className='flex'>
            <ul className='flex cursor-pointer md:flex 
            md:flex-grow flex-row justify-end space-x-20'>
                  <li className='mr-2'>filter</li> 
                  <li className='mr-2'><Link to='add-question'>ask question</Link></li> 
                   <li className='mr-2 '
             
           
                 >active</li>
                   <li className='mr-2'
                  //  onClick={() => setHidecss(css => !css)}
             
                   >newest</li>
                   <li className='mr-2'
                  //  onClick={() => setHidejs(js => !js)}
             
                   >more</li>
                   </ul>
  
        </div>
  
        <div>   
            
        <div className='container '>
     
     <div class=" rounded-xl shadow-lg shadow-purple-500/40 bg-purple-100 ">
       <div class="p-8 border border-purple-500 rounded-b-xl mx-3 mt-3 relative">
         <button class="shadow-lg shadow-purple-500 hover:shadow-purple-800  
         rounded-2xl absolute top-0 right-0 mr-2 mt-2">&times;</button>
         <div class=" text-md  text-xl font-semibold "> 
          <div  >
  <Link to="/question" className='text-purple-500'>{questionData?.title}</Link>

 <div> {ReactHtmlParser(questionData?.body)}</div>

 <p>{new Date(questionData?.created_at).toLocaleString()}</p>
 <div>  <p>  {questionData?.user?.displayName
                      ? questionData?.user?.displayName
                      : "coco"}</p></div>

 <p></p>
          </div>
         </div>
 
 
       
      
       </div>
       <div>
       <div>  {questionData && questionData?.answerDetails.length} </div>
       <div class=" rounded-xl shadow-lg shadow-purple-500/40 bg-purple-100 ">
      <div class="p-8 border border-purple-500 rounded-b-xl mx-3 mt-3 relative">
        <button class="shadow-lg shadow-purple-500 hover:shadow-purple-800  
        rounded-2xl absolute top-0 right-0 mr-2 mt-2">&times;</button>
        <div class=" text-md  text-xl font-semibold "> 
        {questionData?.answerDetails.map((_q) => (
         <div  >
 {/* <Link to="/question" className='text-purple-500'>Answers</Link> */}
<p>{ReactHtmlParser(_q.answer)}</p>
<p>{new Date(_q.created_at).toLocaleString()}</p>
<p> {_q?.user?.displayName
                          ? _q?.user?.displayName
                          : "Natalia lee"}</p>

         </div>
         ))}
        </div>
        

      
        </div>
      </div>

      <div class=" rounded-xl shadow-lg shadow-purple-500/40 bg-purple-100 ">
      <div class="p-8 border border-purple-500 rounded-b-xl mx-3 mt-3 relative">
        <button class="shadow-lg shadow-purple-500 hover:shadow-purple-800  
        rounded-2xl absolute top-0 right-0 mr-2 mt-2">&times;</button>
        <div class=" text-md  text-xl font-semibold "> 
         <div  >

<p>add ans</p>

     
    
       
         <div class=" text-md  text-xl font-semibold my-10 "> 
          <div className='flex m-3' >
  <h3>Title</h3>
 
<textarea className='px-2 mx-2 w-screen' cols={10} rows={1}/>
          </div>
         </div>
         <div class=" text-md  text-xl font-semibold "> 
          <div className='flex m-3' >
  <h3>Body</h3>

  <ReactQuill theme='snow'modules={Editor.modules}   value={answer}
          onChange={handleQuill}
             
              className='h-80 w-screen overscroll-contain'/>
          </div>
         </div>
         <div class=" text-md  text-xl font-semibold "> 
          <div className='flex relative my-10 mt-16' >
  <h3 className='mt-2'>Tags</h3>
 
  <div className="tag-container">
{/* 
  <TagsInput  
                  
                  name="fruits"
                  placeHolder="press enter to add new tag" /> */}
   
  
      </div>
    

       
      
          </div>
          <button className='' type="submit"  onClick={handleSubmit}>add</button>
         </div>
         </div>

    
 
     
    
    
         </div>
        </div>


      
        </div>
      </div>
    </div>
     
     </div>
     </div>
            
            
            
            </div></div></div></div>
     
     
    
        



        
    </>
  )
}
