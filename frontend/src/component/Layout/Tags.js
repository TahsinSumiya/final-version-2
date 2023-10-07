import React from 'react'

export default function Tags({tags}) {
  return (
    <>
               <div class="flex gap-3 items-center py-2 px-3 border-t dark:border-gray-600">
                       <div className='flex justify-around gap-3'>
                  {tags.map((_tag) => (
                    <p class=" inline-flex gap-5 items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-purple-500 rounded-lg focus:ring-4 focus:ring-purple-200">
                     {_tag}
                    </p>
                     ))}

                  </div>
                            </div>
    </>
  )
}
