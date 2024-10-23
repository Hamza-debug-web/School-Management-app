import React from 'react'

function Announcement() {
  return (
    <div className='bg-white g-4 rounded-md'>
      <div className='flex  items-center justify-between'>
           <h1 className = "text-xl font-semibold">Announcements</h1>
           <span className='text-sm text-gray-400'> All</span>
      </div>

      <div className='flex flex-col gap-4 mt-4'>

           <div className='bg-lamaSkylight round-md p-4 '>
              <div className='flex  items-center justify-between'>
                 <h2 className = " font-medium">Lorem ispm dor ksal</h2>
                 <span className='text-xs text-gray-400 bg-white rounded-md px-1 py-1'>2024-01-2</span>
                </div>
                <p className='text-sm text-gray-400 mt-1'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aut optio ea error libero mollitia,
                </p>
           </div>

           <div className='bg-lamaPurplelight round-md p-4 '>
              <div className='flex  items-center justify-between'>
                 <h2 className = " font-medium">Lorem ispm dor ksal</h2>
                 <span className='text-xs text-gray-400 bg-white rounded-md px-1 py-1'>2024-01-2</span>
                </div>
                <p className='text-sm text-gray-400 mt-1'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aut optio ea error libero mollitia,
                </p>
           </div>

           <div className='bg-lamaYellowLight round-md p-4 '>
              <div className='flex  items-center justify-between'>
                 <h2 className = " font-medium">Lorem ispm dor ksal</h2>
                 <span className='text-xs text-gray-400 bg-white rounded-md px-1 py-1'>2024-01-2</span>
                </div>
                <p className='text-sm text-gray-400 mt-1'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aut optio ea error libero mollitia,
                </p>
           </div>


      </div>
      
    </div>
  )
}

export default Announcement
