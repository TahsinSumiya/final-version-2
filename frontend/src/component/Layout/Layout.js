import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'; 
import { useState,useEffect } from 'react';
import { login, logout, selectUser } from "../../features/Slice";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import './Layout.css'
export default function Layout({html,css,js,layoutId,userId}) {
    const user = useSelector(selectUser);
    const [comments, setComments] = useState([]);
    const [visible, setVisible] = useState(false) 
    let [visibility, setVisibility] = useState("block"); 
    const [text, setText] = useState('');
    const [open, setOpen] = useState('');
  const toggleVisible = () => setVisible(!visible) 
    const [isActive, setIsActive] = useState({
      id: 'divOne',
      })
 
        const hideShowDiv = (e) => {
        setIsActive({
        id: e.target.id,
        })
        toggleVisible()
        }
   
      

      const handleCommentSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:80/api/comment/comments/${layoutId}`, { 
          text,user:user, layoutId})
          .then(response => {
            setText('');
            handlegetCommentSubmit ()
            // Update comment list
          })
          .catch(error => console.error('Error submitting comment:', error));
      };
      const handlegetCommentSubmit = async (e) => {
     
        const response = await axios.get(`http://localhost:80/api/comment/getcomments/${layoutId}`)
     setComments(response.data)

          console.log(response)
      };
     // onMount
useEffect(() => {
	handlegetCommentSubmit ()
}, [layoutId]);
  return (
    <>
  <div className='container'>
            <div class=" rounded-xl shadow-lg shadow-purple-500/40 bg-purple-100">
      <div class="p-8 border border-purple-500 rounded-b-xl mx-3 mt-3 relative">
        <button class="shadow-lg shadow-purple-500 hover:shadow-purple-800  rounded-2xl absolute top-0 right-0 mr-2 mt-2">&times;</button>
        <div class="text-center text-md uppercase text-xl font-semibold "> 
        <div className='container'>
        {/* <div className='flex'>
            <ul className='flex cursor-pointer md:flex 
            md:flex-grow flex-row justify-end space-x-20'>
                 
                   <li className='mr-2 '
                   id="divOne"
                   onClick={(e) => {
                   hideShowDiv(e)
                   }}
           
                 >html</li>
                   <li className='mr-2'
                  //  onClick={() => setHidecss(css => !css)}
                  id="divTwo"
                  onClick={(e) => {
                  hideShowDiv(e)
                  }}
                   >css</li>
                   <li className='mr-2'
                  //  onClick={() => setHidejs(js => !js)}
                  id="divThree"
                   onClick={(e) => {
                hideShowDiv(e)
                  }}
                   >js</li>
                   </ul>
  
        </div> */}
        </div>
<div>
<div className=' 
        absolute left-2/4 mt-2 px-18 box-content 
        w-3/6 h-80 border-none'>
          
{/* 
     {visible &&  <div className={isActive.id === 'divOne' ? `divOne` : 'divOne  css js'}>
      
      <SyntaxHighlighter language="html" 
      className="scroll border-4 border-purple-300 rounded-lg"  showLineNumbers={true} wrapLines={true} >
{html}
     
   </SyntaxHighlighter>
  </div>}
     {visible &&  <div className={isActive.id === 'divTwo' ? `divTwo` : 'divTwo d-none js css'}>
      
         <SyntaxHighlighter language="css" className="scroll border-4 border-purple-300 rounded-lg"  showLineNumbers={true} wrapLines={true} >
  {css}
        
      </SyntaxHighlighter>
     </div>}
     {visible &&  <div className={isActive.id === 'divThree' ? `divThree` : 'divTwo d-none css html'}>
       
         <SyntaxHighlighter language="js" className="scroll border-4 border-purple-300 rounded-lg"  showLineNumbers={true} wrapLines={true} >
  {js}
        
      </SyntaxHighlighter>
     </div>} */}
    {/* <div 
  className={isActive.id === 'divOne'  ? `divOne ${visible} ? 'html'`   : 
   'divOne  d-none' 
    
    }>
        
            <Editor  
               
          language="xml"
          displayName="Html"
          value={layout.html}
        
        />
       
     </div>  */}
  

    </div> 
   
        

        {/* <div className='scrollbox h-72 '> */}

        
        <iframe  className=' h-80 '
        width="100%"
        scrolling="yes"
          srcDoc={`
          <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
          </html>
        `}
          title="output"
          
       
       
        />
    
        </div>
        </div>

        <div class="flex space-x-9 justify-end">
         
          <button onClick={() => setOpen(hide => !hide)}
            class="py-2 mt-5 px-6 rounded-xl border-2 border-purple-500 
            font-semibold text-l hover:bg-purple-400 duration-200 no-underline text-black">Comment</button>
        </div>
      </div>
      {open && <div className=' box-content h-80 border-1 pane relative  bg-purple-400' >
      <form onSubmit={handleCommentSubmit}>
        <textarea value={text} onChange={e => setText(e.target.value)} />
        <button type="submit">Comment</button>
        <div>
       
        {comments.map(comment => (
          <p key={comment._id}>

            {comment.text}
          </p>
        ))}
   
        </div>
        <div className='flex'>
            <ul className='flex cursor-pointer md:flex 
            md:flex-grow flex-row justify-end space-x-20'>
                 
                   <li className='mr-2 '
                   id="divOne"
                   onClick={(e) => {
                   hideShowDiv(e)
                   }}
           
                 >html</li>
                   <li className='mr-2'
                  //  onClick={() => setHidecss(css => !css)}
                  id="divTwo"
                  onClick={(e) => {
                  hideShowDiv(e)
                  }}
                   >css</li>
                   <li className='mr-2'
                  //  onClick={() => setHidejs(js => !js)}
                  id="divThree"
                   onClick={(e) => {
                hideShowDiv(e)
                  }}
                   >js</li>
                   </ul>
  
        </div>

        {visible &&  <div className={isActive.id === 'divOne' ? `divOne` : 'divOne  css js'}>
      
      <SyntaxHighlighter language="html" 
      className="scroll border-4 border-purple-300 rounded-lg"  showLineNumbers={true} wrapLines={true} >
{html}
     
   </SyntaxHighlighter>
  </div>}
     {visible &&  <div className={isActive.id === 'divTwo' ? `divTwo` : 'divTwo d-none js css'}>
      
         <SyntaxHighlighter language="css" className="scroll border-4 border-purple-300 rounded-lg"  showLineNumbers={true} wrapLines={true} >
  {css}
        
      </SyntaxHighlighter>
     </div>}
     {visible &&  <div className={isActive.id === 'divThree' ? `divThree` : 'divTwo d-none css html'}>
       
         <SyntaxHighlighter language="js" className="scroll border-4 border-purple-300 rounded-lg"  showLineNumbers={true} wrapLines={true} >
  {js}
        
      </SyntaxHighlighter>
     </div>}
      </form>

      </div>}
      <div class="border border-purple-500 rounded-b-xl mx-3 mb-3 mt-3 pb-5">
        <div class="flex flex-col mx-8">
          <h5 class="text-l text-gray-800 mt-3">Compatible browswers: Chrome, Firefox, Microsoft Edge</h5>
          <h5 class="text-l text-gray-800 mt-3">Responsive: Yes</h5>
          <h5 class="text-l text-gray-800 mt-3">Dependencies:</h5>
          </div>
        </div>

    

    </div>
      </div>
     
    </>
  )
}
