import React from 'react'
import './css/index.css'
import SideBar from './SideBar'
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
    <div className='flex h-screen w-screen bg-purple-300'>
      <SideBar/>
      <Main questions={questions}/>
    </div>
  )
}
