import React from 'react'

export default function Tags({tags}) {
  return (
    <>
    <div class="flex gap-3 items-center py-2 px-3 border-t dark:border-gray-600">
                       <div className='flex justify-around gap-3'>
                  {tags.map((_tag) => (
                    <p class=" inline-flex gap-5 items-center py-1 px-4 my-2 text-xs font-bold text-center text-gray-700 uppercase border-gray-700 border-b-2 rounded-md">
                     {_tag}
                    </p>
                     ))}

                  </div>
                            </div>
    </>
  )
}
