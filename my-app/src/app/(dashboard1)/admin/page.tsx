import React from 'react'
import UserCard from '@/app/components/UserCard'
import CountChart from '@/app/components/CountChart'
import AttendanceChart from '@/app/components/AttendanceChart'
import FinanceChart from '@/app/components/FinanceChart'
import EventCalendar from '@/app/components/EventCalendar'
import Announcement from '@/app/components/Announcement'
function Adminpage() {
  return (
    <div className='p-4 gap-4 flex flex-col lg:flex-row'>
      {/* Left Side */}

      <div className='w-full lg:w-2/3 flex flex-col gap-8 mt-16'>
        {/* User cards */}
        <div className='flex gap-4 justify-between flex-wrap'>
          <UserCard type = "student"/>
          <UserCard type = "teacher"/>
          <UserCard type = "parent"/>
          <UserCard type = "staff"/>
        </div>

        {/* Middle Charts */}

        <div className='flex flex-col gap-4 lg:flex-row'>
          {/* Count Chart */}
          <div className='w-full lg:w-1/3 h-[450px]'>
          <CountChart/>
          </div>
          {/* Attendance Chart */}
          <div className='w-full lg:w-2/3 h-[450px]'>
          <AttendanceChart/>
          </div>
        </div>
   
        {/* Bottom Charts */}

        <div className='w-full h-[500px]'>
          <FinanceChart/>
        </div>

      </div>

      {/* Right Side */}

      <div className='w-full lg:w-1/3 flex flex-col gap-8'>
       <EventCalendar/>
       <Announcement/>

      </div>

    </div>
  )
}

export default Adminpage
