import React from 'react'
import AuthIndex from '../Auth/AuthIndex'
import './Beforehome.css'
import Footer from './Footer'
export default function BeforeHome() {
  return (
    <>

    <div className='flex bg-purple-100 h-screen w-screen '>

     <div className='body  w-screen'>
      <div class="container absolute my-24 mx-5">
        <div class="box"></div>
        <div class="box"></div>
        </div>
        <div className=' flex my-24 mx-28 absolute justify-end end flex-end right-96'>
      <div className='w-80 h-60 relative left-96 '>
        <p>A formalized developer community offers a comprehensive solution, fostering collaboration for problem-solving, assisting backend developers with design resources, promoting UI designers' work, aiding professionals in job searches, and simplifying hiring for businesses. This initiative significantly propels the technology sector's growth,
           creating a dynamic and innovative environment for all stakeholders involved.</p>
           <div className='relative my-9'>
<AuthIndex/>
</div>
        </div>


</div>
      </div> 
   



    </div>
    <Footer/>
    </>
  )
}