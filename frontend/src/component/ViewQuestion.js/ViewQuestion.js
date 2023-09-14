import React from 'react'
import MainQuestion from './MainQuestion'
import SideBar from '../StackOverFlow/SideBar'
import "react-quill/dist/quill.snow.css";
export default function ViewQuestion() {
  return (
    <>
       <div className='flex h-screen w-screen bg-purple-300'>
      <SideBar/>
      <MainQuestion/>
    </div>
    </>
  )
}