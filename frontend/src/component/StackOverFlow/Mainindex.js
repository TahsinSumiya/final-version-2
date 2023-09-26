import React from 'react'
import './css/index.css'
import SideBar from '../Sidebar/Sidebar'
import Main from './Main'
import { useState ,useEffect} from 'react';
import axios from 'axios';
export default function Mainindex() {
  const [questions, setQuestions] = useState([]);
  //  useEffect(()=>{
  //   const getQuestion = async (e) => {
  //     await axios.get('http://localhost:80/api/question/').then((res)=>{
  //         console.log(res.data)
  //   }).catch((err)=>{
  //     console.log(err)
  //   })
  //   }

  //  },[])
  useEffect(() => {
    async function getQuestion() {
      await axios.get("http://localhost:80/api/question/").then((res) => {
        setQuestions(res.data.reverse());
        // console.log(res.data)
      });
    }
    getQuestion();
  }, []);
  return (
    <div className='bg-gradient-to-r from-purple-100 via-yellow-200 to-purple-200 p-12 backdrop-blur-md'>
       <div class="container mx-auto text-center">
            <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-400">All Questions</h1>
        </div>
      <Main questions={questions}/>
    </div>
  )
}