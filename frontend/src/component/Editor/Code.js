import React, { useState,useEffect } from 'react'
import Editor from './Editor';
export default function Code() {
    const [visible, setVisible] = useState(false) 
    const [text, setText] = useState('');
    const [open, setOpen] = useState('');
    const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [js, setJs] = useState( '')
  const [srcDoc, setSrcDoc] = useState('')
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
        useEffect(() => {
            const timeout = setTimeout(() => {
              setSrcDoc(`
                <html>
                  <body>${html}</body>
                  <style>${css}</style>
                  <script>${js}</script>
                </html>
              `)
            }, 250)
        
            return () => clearTimeout(timeout)
          }, [html, css, js])
        
  return (
    <>
      
  <div class=" p-4 overflow-y-auto ml-16 ">
  <div class="px-6 pt-9 pb-9 mt-5 shadow-xl border border-gray-200 
                     rounded-lg bg-gradient-to-b from-purple-100 via-purple-200 to-purple-300">
                        
                        <div class="flex justify-center gap-20 items-center py-2 px-3 gap-3 mt-4 text-gray-900">
                      
              
                            <button class="inline-flex items-center py-2.5 px-10 text-xs
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
                            py-2.5 px-10 text-xs font-medium text-center text-white
                             bg-purple-400 hover:bg-purple-500 rounded-lg"
                             id="divTwo"
                  onClick={(e) => {
                  hideShowDiv(e)
                  }}
                             
                             >
                                CSS
                            </button>
                            <button type="submit" class="inline-flex items-center py-2.5 
                            px-10 text-xs font-medium text-center text-white bg-purple-400
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
                       <div className={isActive.id === 'divOne' ? `divOne` : 'divOne  css js'}>
      <label class="my-2 inline-flex items-center py-2.5 px-10 text-xs
                             font-medium text-center text-white bg-purple-400
                              hover:bg-purple-500 rounded-lg focus:border-transparent
                               focus:outline-none">html</label>
      <Editor 
      className="scroll border-4 border-purple-300 rounded-lg my-5 py-2 px-10 bg-white rounded-t-lg"  
      language="xml"
      displayName="HTML"
      value={html}
      onChange={setHtml}
      >

     
   </Editor>
  </div>
<div className={isActive.id === 'divTwo' ? `divTwo` : 'divTwo d-none js css'}>
     <label class="my-2 inline-flex items-center py-2.5 px-10 text-xs
                             font-medium text-center text-white bg-purple-400
                              hover:bg-purple-500 rounded-lg focus:border-transparent
                               focus:outline-none">css</label>
         <Editor  className="scroll border-4 border-purple-300 rounded-lg
         my-5 py-2 px-4 bg-white rounded-t-lg
         "  
            language="css"
            displayName="CSS"
            value={css}
            onChange={setCss}
      >

        
      </Editor>
     </div>
     <div className={isActive.id === 'divThree' ? `divThree` : 'divTwo d-none css html'}>
     <label class=" my-2 inline-flex items-center py-2.5 px-10 text-xs
                             font-medium text-center text-white bg-purple-400
                              hover:bg-purple-500 rounded-lg focus:border-transparent
                               focus:outline-none">js</label>
         <Editor className="scroll border-4 border-purple-300 rounded-lg
         my-5 py-2 px-4 bg-white rounded-t-lg
         " 
         
         language="javascript"
         displayName="JS"
         value={js}
         onChange={setJs}
       >

        
      </Editor>
     </div>
    
       
  
                     
                        <div class=" my-5 py-2 px-4 bg-white rounded-t-lg">
                            <label for="codepan" class="sr-only"></label>
                       
                            <div class="relative h-96">
                                <iframe id="codepan" class="w-full 
                                h-96 bg-white border-0 focus:border-transparent 
                                focus:outline-none" 
                                srcDoc={srcDoc}
        height="100%"
        width="100%"
                                
                                ></iframe>
                               
                            </div>
                        </div>
        
        
          
                  
                    </div>
           
</div>
    </>
  )
}
