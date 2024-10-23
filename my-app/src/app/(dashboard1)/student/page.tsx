"use client";
import Announcement from '@/app/components/Announcement';
import BigCalendar from '@/app/components/BigCalendar';
import EventCalendar from '@/app/components/EventCalendar';
import React from 'react';
import "react-big-calendar/lib/css/react-big-calendar.css";

function Studentpage() {
  return (
    <div className="p-4 flex flex-col xl:flex-row">
      {/* Left side */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-2xl font-semibold">Schedule (4A)</h1>
          <BigCalendar />
        </div>
      </div>

      {/* Right side */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <Announcement />
      </div>
    </div>
  );
}

export default Studentpage;

