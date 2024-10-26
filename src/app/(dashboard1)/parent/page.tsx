"use client";
import Announcement from '@/app/components/Announcement';
import BigCalendar from '@/app/components/BigCalendar';
import React from 'react';
import "react-big-calendar/lib/css/react-big-calendar.css";

function Parentpage() {
  return (
    <div className="p-4 mt-16 flex flex-col xl:flex-row">
      {/* Left side */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-2xl font-semibold">Schedule (Hamza Javed)</h1>
          <BigCalendar />
        </div>
      </div>

      {/* Right side */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <Announcement />
      </div>
    </div>
  );
}

export default Parentpage;

