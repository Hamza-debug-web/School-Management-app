"use client"

import React,{useState} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { FaEllipsisH } from 'react-icons/fa'; // Import icons for More



type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];


// this Data is creacted For temporary use case 

const events = [
    {
        id: 1,
        title: "The Girls Cricket Match Tournament",
        time: "12:00 PM - 2:00 PM",
        description: "Every student Should be were his Own Team Kit"
        
    },
    {
      id: 2,
      title: "The Boys Cricket Match Tournament",
      time: "12:00 PM - 2:00 PM",
      description: "Every student Should be were his Own Team Kit"
      
  },
  {
    id: 3,
    title: "The Boys Racing Match Tournament",
    time: "12:00 PM - 2:00 PM",
    description: "Every student Should be were his Own Team Kit"
    
},

]



function EventCalendar() {

    const [value, onChange] = useState<Value>(new Date());


  return (
    <div className='bg-white p-4 rounded-md'>
      <Calendar onChange={onChange} value={value} />
       <div className='flex items-center justify-between'>
        <h1 className='text-xl font-semibold my-4'>Events</h1>
         <FaEllipsisH className='cursor-pointer'/>
       </div>

      <div className='flex flex-col gap-4'>
      {events.map(event => (
        <div className='p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple' key={event.id}>
          <div className='flex items-center justify-between'>
            <h1 className='font-semibold text-gray-600'>{event.title}</h1>
             <span className='text-gray-300 text-xs'>{event.time}</span>
          </div>
          <p className='mt-2 text-gray-400 text-sm'>{event.description}</p>
        </div>
      )) }
      </div>

    </div>
  )
}

export default EventCalendar
