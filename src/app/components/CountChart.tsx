"use client"
import Image from 'next/image';
import React from 'react'
import { FaEllipsisH } from 'react-icons/fa'; // Import icons for More

import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Girls',
    count: 53,
    fill: 'lightpink',
  },

  {
    name: 'Boys',
    count: 55,
    fill: 'lightblue',
  },

  {
    name: 'Total',
    count: 105,
    fill: 'white',
  },


];


function CountChart() {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4'>
        {/* Title */}
      <div className='flex justify-between items-center'>
        <h1 className='text-lg font-semibold'>Student</h1>
         <FaEllipsisH/>
      </div>
      {/* Chart */}
      <div className=' relative w-full h-[70%]'>
       <ResponsiveContainer>
        <RadialBarChart cx="50%" cy="50%" innerRadius="45%" outerRadius="100%" barSize={32} data={data}>
          <RadialBar
            background
            dataKey="count"
          />
        </RadialBarChart>
      </ResponsiveContainer> 
      <Image src="/images/girsl&boys.png" alt='' width={40} height={40} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
      </div>
       
       {/* Bottom  */}

      <div className='flex justify-center gap-16'>

       <div className='flex flex-col gap-1'>
        <div className='w-5 h-5 bg-blue-400 rounded-full'/>
         <h1 className='font-bold'>1,234</h1>
         <h2 className='text-xs text-gray-400'>Boys (55%)</h2>
       </div>

       <div className='flex flex-col gap-1'>
        <div className='w-5 h-5 bg-pink-400 rounded-full'/>
         <h1 className='font-bold'>1,234</h1>
         <h2 className='text-xs text-gray-400'>Girls (45%)</h2>
       </div>

      </div>

    </div>
  )
}

export default CountChart
