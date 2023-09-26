import React from 'react'
import Allquestion from "./Allquestion"
import { Link } from 'react-router-dom'
import { useState ,useEffect} from 'react';
import axios from 'axios';
export default function Main({questions}) {

  return (
    <>
   

  


     
        <div> 
        <p type="submit" class="mx-12 inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-purple-400 hover:bg-purple-500 rounded-lg">
                    
        {questions.length} questions             
                </p>  
        {questions?.map((_q) => (
          <Allquestion key={_q.index} data={_q} />
          ))}
          </div>
          
   
        
  

     
   
     
   




 
    </>
  )
}