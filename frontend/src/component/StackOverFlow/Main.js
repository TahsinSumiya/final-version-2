import React from 'react'
import Allquestion from "./Allquestion"
import { Link } from 'react-router-dom'
import { useState ,useEffect} from 'react';
import axios from 'axios';
export default function Main({questions}) {

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
                  <li className='mr-2'>{questions.length} questions</li> 
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
        {questions?.map((_q) => (
          <Allquestion key={_q.index} data={_q} />
          ))}
          </div>
          
          </div></div></div>
     
     
      </div>
        
  

     
   
     
   
    {/* </div> */}



 
    </>
  )
}
