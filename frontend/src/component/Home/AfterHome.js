import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Image from '../static/Images/afterlogin.jpg'
export default function AfterHome() {
  return (
  <>
    <div class="">

<section class="h-screen pt-40 ">
    <div class="container mx-auto flex flex-col md:flex-row items-center gap-8">
        <div class="md:w-1/2 px-6">
            <p class="text-xl md:text-4xl font-semibold">Welcome to</p>
            <p className='text-5xl font-bold my-4'>Developers Platform</p>
            <p class="text-lg md:text-xl mb-8 text-slate-700 text-justify w-[500px]">We offer knowledge,resouce,encourgement.Share your knowledge with us to.get help from fellow developers.We offer you oppurtunity to expand your knowledge
            </p>
            
            <div class="flex flex-row gap-4">
                <Link to='/allquestion' class="bg-blue-400 hover:bg-slate-300 hover:border-blue-400 hover:border-b-4 text-gray-800 py-2 px-6 rounded-lg text-lg font-semibold transition duration-300">Discussion</Link>
                <Link to='/getcategory' class="border-blue-400 border-b-4 bg-slate-300 hover:bg-blue-400 text-gray-800 py-2 px-6 rounded-lg text-lg font-semibold transition duration-300">Layout Designs</Link>
                <Link to='/searchjob' class="bg-blue-400 hover:bg-slate-300 hover:border-blue-400 hover:border-b-4 text-gray-800 py-2 px-6 rounded-lg text-lg font-semibold transition duration-300">Job Hunting</Link>
              </div>
              
        </div>
        <div class="md:w-1/2 mt-8 md:mt-0">
            <img src={Image} alt="Image" 
            class="w-full rounded-2xl shadow-lg opacity-6"/>
        </div>
    </div>
</section>

</div>
    </> 
  )
}
