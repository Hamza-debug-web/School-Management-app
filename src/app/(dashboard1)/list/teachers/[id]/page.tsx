import React from 'react'
import Image from 'next/image'


function SingleTeacherpage() {
  return (
    <div className='mt-16 flex-1 p-4 flex flex-col gap-4 xl:flex-row'>
     {/* LEFT SIDE */}
     <div className='w-full xl:w-1/2'>
    
        {/* TOP */}
    
    <div className='flex flex-col lg:flex-row gap-4'>
    {/* USER INFO CARD */}
       <div className='bg-lamaSky py-6 px-4 rounded-md flex-1 flex gap-4'>
        <div className='w-1/3'>
        <Image src="/images/boy1.png" 
        alt='Teacher Pic' 
        width={100} 
        height={100} 
        className='w-30 h-30 rounded-full object-cover'/>
        </div>

        <div className='w-2/3 flex flex-col justify-between gap-4'>
          <h1 className='text-xl font-semibold'>Sir Bilal</h1>
          <p className='text-sm text-gray-500'>
           Welcome, everyone! I’m excited to guide you through our journey of discovery
           and growth.
          </p>
        <div className='flex items-center justify-between gap-2 flex-wrap text-xs font-medium'>

           <div className='w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2'>
            <Image
             src="/images/blood.webp"
             alt = ""
             width={14}
             height={14}
            />
            <span>A+</span>
           </div>

           <div className='w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2'>
           <Image
             src="/images/calender.png"
             alt = ""
             width={14}
             height={14}
            />
            <span>January</span>
           </div>

           <div className='w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2'>
           <Image
             src="/images/email.webp"
             alt = ""
             width={14}
             height={14}
            />
            <span>hk1557657@gmail.com</span>
           </div>

           <div className='w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2'>
           <Image
             src="/images/phone.jpeg"
             alt = ""
             width={14}
             height={14}
            />
            <span>078768986</span>
           </div>

        </div>
        </div>

       </div>
    {/* SMALL CARDS */}
    <div className='flex-1 gap-4 justify-between flex-wrap'>
     {/* CARD */}

     <div className=''>
       <Image
       src = ""
       alt = ""
       width={24}
       height={24}
       className=''
       />
     </div>

    </div>
    
 
    </div>

        {/* BOTTOM  */}
        <div className=''>
         Schedule
     </div>
     
   
     </div>
       {/* RIGHT SIDE */}
       <div className='w-full xl:w-1/3'>
       R
       </div>
     
    </div>
  )
}

export default SingleTeacherpage
