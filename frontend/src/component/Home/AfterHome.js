import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
export default function AfterHome() {
  return (
  <>
    <div className='bg-purple-100 h-screen w-screen'>
    <div className='relative justify-center align-middle '>
{/* <Link to='allquestion'>questions</Link>
<Link to='
getcategory'>Layouts</Link> */}
<div className='mx-28 my-20 bg-purple-200 absolute rounded-3xl px-10'>
  <p className='my-10'>A formalized developer community functions as a multifaceted solution. It provides a collaborative space for problem-solving, supports backend developers with design resources, promotes the work of UI designers, aids professionals in finding employment, and simplifies the hiring process for businesses. By facilitating these essential aspects, the developer community significantly contributes to the growth and advancement of the technology sector, fostering a dynamic and innovative environment for all stakeholders involved.
  A formalized developer community offers a comprehensive solution, fostering collaboration for problem-solving, assisting backend developers with design resources, promoting UI designers' work, aiding professionals in job searches, and simplifying hiring for businesses. This initiative significantly propels the technology sector's growth, creating a dynamic and innovative environment for all stakeholders involved.
  </p>

  <div class="relative flex flex-col items-center justify-center my-20">
  
  <div class="max-w-screen-lg w-full p-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-9 justify-center">
      <Link  to='allquestion'
       class="bg-yellow-100 text-2xl text-center shadow-lg rounded-lg p-4 hover:shadow-xl transition duration-300 transform hover:-translate-y-1 hover:scale-105">
     
       Questions
      </Link>
      <Link to='
getcategory'
       class="bg-yellow-100 text-2xl text-center shadow-lg rounded-lg p-4 hover:shadow-xl transition duration-300 transform hover:-translate-y-1 hover:scale-105">
       
        Layouts
      </Link>
    </div>
  </div>
</div>
</div>

    </div>
   
    </div>
    <Footer/>
    </> 
  )
}
