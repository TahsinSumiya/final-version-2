import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'; 
import { useState,useEffect } from 'react';
import { login, logout, selectUser } from "../../features/Slice";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import './Layout.css'
import Comment from './Comment';
import Sidebar from '../Sidebar/Sidebar';
import Tags from './Tags';
import { Link } from 'react-router-dom';
export default function Layout({html,css,js,layoutId,userId,author,tags,id}) {
    const user = useSelector(selectUser);
console.log(user)
    const [comments, setComments] = useState([]);
    const [visible, setVisible] = useState(false) 
    const [text, setText] = useState('');
    const [open, setOpen] = useState('');
    const [isCopied, setIsCopied] = useState(false);
    const copyCodeToClipboard = (code) => {
      navigator.clipboard.writeText(code).then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
        console.log('Code copied to clipboard');
      }).catch((err) => {
        console.error('Failed to copy code: ', err);
      });
    };
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
   
      

      
  return (
    <>

  <div class=" p-4 overflow-y-auto ml-16 ">
  <div class="px-6 pt-9 pb-9 mt-5 shadow-xl border border-gray-200 
                     rounded-lg bg-gradient-to-b from-purple-100 via-purple-200 to-purple-300">
                        
                        <div class="flex justify-end items-center py-2 px-3 gap-3 mt-4 text-gray-900">
                      
                        <Link to={id ? `/specificuser?s=${id}` : ''} class="inline-flex items-center py-2.5 px-4 text-xs
                             font-medium text-center text-white bg-purple-400
                              hover:bg-purple-500 rounded-lg focus:border-transparent
                               focus:outline-none"
                           
                               >
                                {author}
                            </Link>
                            <button class="inline-flex items-center py-2.5 px-4 text-xs
                             font-medium text-center text-white bg-purple-400
                              hover:bg-purple-500 rounded-lg focus:border-transparent
                               focus:outline-none"
                               id="divOne"
                               onClick={(e) => {
                               hideShowDiv(e)
                               }}
                               >
                                Html
                            </button>
                            <button class="inline-flex items-center 
                            py-2.5 px-4 text-xs font-medium text-center text-white
                             bg-purple-400 hover:bg-purple-500 rounded-lg"
                             id="divTwo"
                  onClick={(e) => {
                  hideShowDiv(e)
                  }}
                             
                             >
                                CSS
                            </button>
                            <button type="submit" class="inline-flex items-center py-2.5 
                            px-4 text-xs font-medium text-center text-white bg-purple-400
                             hover:bg-purple-500 rounded-lg"
                             id="divThree"
                             onClick={(e) => {
                          hideShowDiv(e)
                            }}
                            title='output'
                             >
                                Js
                            </button>
                        </div>
                        
                        
                        {visible &&  <div className={isActive.id === 'divOne' ? `divOne` : 'divOne  css js'}>
                        <button  className=' flex  justify-end end
                            py-2.5 px-4 text-xs font-medium text-center text-white
                             bg-purple-400 hover:bg-purple-500 rounded-lg'
                             onClick={() => copyCodeToClipboard(html)}
 >
   {isCopied ? <p className="text-white">Copied!</p> :
   <p className="text-blue">Copy</p>}
</button>
      <SyntaxHighlighter language="html" 

      
      className="scroll border-4 border-purple-300 rounded-lg" 
       showLineNumbers={true} wrapLines={true} >
        
{html}

   </SyntaxHighlighter>
  </div>}
     {visible &&  <div className={isActive.id === 'divTwo' ? `divTwo` : 'divTwo d-none js css'}>
     <button  className=' flex  justify-end end
                            py-2.5 px-4 text-xs font-medium text-center text-white
                             bg-purple-400 hover:bg-purple-500 rounded-lg'
                             onClick={() => copyCodeToClipboard(css)}
 >

{isCopied ? <p className="text-white">Copied!</p> :
   <p className="text-blue">Copy</p>}
</button>
         <SyntaxHighlighter language="css" className="scroll border-4 border-purple-300 rounded-lg"  showLineNumbers={true} wrapLines={true} >
  {css}
        
      </SyntaxHighlighter>
     </div>}
     {visible &&  <div className={isActive.id === 'divThree' ? `divThree` : 'divTwo d-none css html'}>
     <button  className=' flex  justify-end end
                            py-2.5 px-4 text-xs font-medium text-center text-white
                             bg-purple-400 hover:bg-purple-500 rounded-lg'
                             onClick={() => copyCodeToClipboard(js)}
 >

{isCopied ? <p className="text-white">Copied!</p> :
   <p className="text-blue">Copy</p>}
</button>
         <SyntaxHighlighter language="js" className="scroll border-4 border-purple-300 rounded-lg"  showLineNumbers={true} wrapLines={true} >
  {js}
        
      </SyntaxHighlighter>
     </div>}
    
       
  
                     
                        <div class="py-2 px-4 bg-white rounded-t-lg">
                            <label for="codepan" class="sr-only"></label>
                       
                            <div class="relative h-96">
                                <iframe id="codepan" class="w-full 
                                h-96 bg-white border-0 focus:border-transparent 
                                focus:outline-none" 
                                srcDoc={`
          <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
          </html>
        `}
        height="100%"
        width="100%"
                                
                                ></iframe>
                               
                            </div>
                        </div>
        
                      
                        <Tags tags={tags}/>
                        <div class="flex justify-end items-center py-2 px-3 border-t dark:border-gray-600">
                                <button type="submit" class="inline-flex end
                                items-center py-2.5 px-4 text-xs font-medium 
                                text-center text-white bg-purple-500 rounded-lg focus:ring-4
                                 focus:ring-purple-200 hover:bg-purple-600"
                                 onClick={() => setOpen(hide => !hide)}
                                 >
                                    Comment
                                </button>
                            </div>

                            {open &&    <Comment layoutId={layoutId}/>}
      
              
                        
                       
                        </div>
                      
                    </div>
           

                 
                
                   
    </>
  )
}
