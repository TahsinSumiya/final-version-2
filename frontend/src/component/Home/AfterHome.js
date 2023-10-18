import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Image from '../static/Images/young-people-engaged-web-design-website-page-development-flat-d-character-concept-web-design-young-people-engaged.jpg'
export default function AfterHome() {
  return (
  <>
    <div class="bg-gradient-to-r from-purple-100 via-teal-100 to-blue-100 py-16 animate-gradient ">

<section class="h-screen py-28 ">
    <div class="container mx-auto flex flex-col md:flex-row items-center">
        <div class="md:w-1/2">
            <h1 class="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Website</h1>
            <p class="text-lg md:text-xl mb-8 text-slate-700">We offer knowledge,resouce,encourgement.Share your knowledge with us to.get help from fellow developers.We offer you oppurtunity to expand your knowledge
            </p>
            
            <div class="flex flex-row gap-4">
                <Link to='/allquestion' class="bg-purple-300 hover:bg-purple-400 text-teal-200 py-2 px-6 rounded-lg text-lg font-semibold transition duration-300">Discussion</Link>
                <Link to='/getcategory' class="bg-purple-300 hover:bg-purple-400 text-teal-200 py-2 px-6 rounded-lg text-lg font-semibold transition duration-300">Layout Designs</Link>
              </div>
              
        </div>
        <div class="md:w-1/2 mt-8 md:mt-0">
            <img src={Image} alt="Image" 
            class="w-full rounded-lg shadow-lg opacity-6"/>
        </div>
    </div>
</section>

</div>
    </> 
  )
}
