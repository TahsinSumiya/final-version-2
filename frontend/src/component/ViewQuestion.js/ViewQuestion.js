
import React, { useEffect, useState } from "react";
import ReactQuill from 'react-quill'
import ReactHtmlParser from "react-html-parser";
import '../Add-Question/TagsInput.css'
import "react-quill/dist/quill.snow.css";
import { Link } from 'react-router-dom';
import '../Add-Question/TagsInput.css'
import TagsInput from 'react-tagsinput'
import Editor from "react-quill/lib/toolbar";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/Slice";
import axios from "axios";
import bgimg from '../static/Images/bg.jpg'
import SideBar from '../Sidebar/Sidebar';
import Sidebar from "../Sidebar/Sidebar";

export default function ViewQuestion() {
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
    <div className="bg-purple-200 h-screen overflow-y-auto">
    <Sidebar/>
      <div class=" p-32  ml-16 ">
      <div class="bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 h-screen">
        <div class="relative h-full bg-opacity-60 backdrop-blur-lg">
            <img 
            src={bgimg}
                alt="Background Image" class="object-cover w-full h-full"/>
            <div class="absolute inset-0 bg-gray-100 bg-opacity-80">
             
 
                <div class="bg-gradient-to-r from-purple-100 via-yellow-100 to-gray-100 p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer mt-4">
                    <div class="flex justify-end items-center py-2 px-3 gap-3 mt-4 text-gray-900">

                        <button type="submit"
                            class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-purple-400 hover:bg-purple-500 rounded-lg">
                            <i class="bi bi-calendar-date-fill mr-2"></i>
                            {new Date(questionData?.created_at).toLocaleString()}
                        </button>
                        <Link to={`/specificuser?s=${questionData?.user.uid}`}
                            class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-purple-400 hover:bg-purple-500 rounded-lg">
                            <i class="bi bi-person-lines-fill mr-2"></i>
                            {questionData?.user?.displayName
                      ? questionData?.user?.displayName
                      : "coco"}
                        </Link>
                    </div>

                  
                    <h1 class="text-2xl font-semibold mb-4 text-gray-500">
                    {questionData?.title}
                    </h1>
             
                    <p class="text-gray-500 mb-4">{ReactHtmlParser(questionData?.body)}</p>
                </div>



                <div class="my-3">
                    <p class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-purple-400 hover:bg-purple-500 rounded-lg focus:border-transparent focus:outline-none">
                    {questionData && questionData?.answerDetails.length} ans
                    </p>
                </div>

                {questionData?.answerDetails.map((_q) => (
                <div class="mb-4 w-full rounded-lg border border-purple-200">
                    <div class="py-2 px-4 bg-white rounded-t-lg">
                        <label for="Question" class="sr-only"></label>
                        <p id="Question" rows="3" class="px-0 w-full text-sm text-gray-900 bg-white border-0 focus:border-transparent focus:outline-none">
                        {ReactHtmlParser(_q.answer)}
                        </p>
                    </div>

                    <div class="flex justify-end items-center py-2 px-3 border-t dark:border-gray-600 gap-3">

                         <Link to={`/specificuser?s=${_q.user.uid}`} type="submit" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-purple-500 rounded-lg focus:ring-4 focus:ring-purple-200 hover:bg-purple-600">
                         {_q?.user?.displayName
                          ? _q?.user?.displayName
                          : "Natalia lee"}
                        </Link>
                        <p class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-purple-500 rounded-lg focus:ring-4 focus:ring-purple-200 hover:bg-purple-600">
                        {new Date(_q.created_at).toLocaleString()}
                        </p>

                    </div>
                </div>
      ))}
             

               

               
                <form
class="px-6 pt-9 mt-5 shadow-xl border border-gray-200 rounded-lg bg-gradient-to-b
 from-white via-purple-100 to-purple-200"/>
                    {/* <div class=" items-center py-2 px-3 gap-3 mt-4 text-gray-900">
                        <input type="text" placeholder="Question Title"
                            class="w-full text-gray-900 p-3 border-0 text-xl 
                            focus:border-transparent focus:outline-none rounded-lg"/>
                    </div> */}
                    <div class="mb-4 w-full rounded-lg border border-purple-200 ">
                        <div class="py-2 px-4 bg-white rounded-t-lg h-96 ">
                            <label for="Question" class="sr-only"></label>
                            <ReactQuill theme='snow'modules={Editor.modules}   value={answer}
          onChange={handleQuill}
             
              className='h-80 w-full overscroll-contain'/>

                        </div>
                        <div class="flex justify-between items-center py-2 px-3 border-t dark:border-gray-600">
                            <button type="submit" onClick={handleSubmit}
                                class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-purple-500 rounded-lg focus:ring-4 focus:ring-purple-200 hover:bg-purple-600">
                                Add answer
                            </button>
                        </div>
                    </div>
                

            </div>
        </div>
    </div>
           
</div>
</div>
    </>
  )
}