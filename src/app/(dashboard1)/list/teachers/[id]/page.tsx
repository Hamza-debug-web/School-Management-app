import React from "react";
import Image from "next/image";
import { FaPhoneAlt, FaRegCalendarAlt, FaBook  } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { BiSolidDonateBlood } from "react-icons/bi";
import { SiGoogleclassroom } from "react-icons/si";
import { AiOutlineBranches } from "react-icons/ai";
import BigCalendar from "@/app/components/BigCalendar";
import Announcement from "@/app/components/Announcement";
import Link from "next/link";
import Performance from "@/app/components/Performance";
 
function SingleTeacherpage() {
  return (
    <div className="mt-16 flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* LEFT SIDE */}
      <div className="w-full xl:w-2/3">
        {/* TOP */}

        <div className="flex flex-col lg:flex-row gap-4">
          {/* USER INFO CARD */}
          <div className="bg-lamaSky py-6 px-4 rounded-md flex-1 flex gap-4">
            <div className="w-1/3">
              <Image
                src="/images/boy1.png"
                alt="Teacher Pic"
                width={140}
                height={140}
                className="w-30 h-30 rounded-full object-cover"
              />
            </div>

            <div className="w-2/3 flex flex-col justify-between gap-4">
              <h1 className="text-xl font-semibold">Sir Bilal</h1>
              <p className="text-sm text-gray-500">
                Welcome, everyone! I’m excited to guide you through our journey
                of discovery and growth.
              </p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <BiSolidDonateBlood />
                  <span>A+</span>
                </div>

                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <FaRegCalendarAlt />
                  <span>January</span>
                </div>

                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <IoMdMail />
                  <span>hk1557657@gmail.com</span>
                </div>

                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <FaPhoneAlt />
                  <span>078768986</span>
                </div>
              </div>
            </div>
          </div>

            {/* SMALL CARDS */}
        <div className="flex-1 gap-4 justify-between flex flex-wrap">
          {/* Attendance Card */}
          <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:[45%] ">
            <FaRegCalendarAlt className="text-2xl text-blue-500" />
            <div>
              <h1 className="text-xl font-semibold">90%</h1>
              <span className="text-sm text-gray-400">Attendance</span>
            </div>
          </div>

          {/* Branches Card */}
          <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:[45%] ">
            <AiOutlineBranches className="text-2xl text-green-500" />
            <div>
              <h1 className="text-xl font-semibold">2</h1>
              <span className="text-sm text-gray-400">Branches</span>
            </div>
          </div>

          {/* Lessons Card */}
          <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:[45%] ">
            <FaBook className="text-2xl text-yellow-500" />
            <div>
              <h1 className="text-xl font-semibold">6</h1>
              <span className="text-sm text-gray-400">Lessons</span>
            </div>
          </div>

          {/* Classes Card */}
          <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:[45%] ">
            <SiGoogleclassroom className="text-2xl text-red-500" />
            <div>
              <h1 className="text-xl font-semibold">6</h1>
              <span className="text-sm text-gray-400">Classes</span>
            </div>
          </div>
        </div>
          
        </div>

        {/* BOTTOM  */}
        <div className="mt-4 bg-white rounded-md p-4 h-auto">
           <h1 className = "font-semibold text-lg">Teacher&apos;s Schedual</h1>
        <BigCalendar/>
        </div>


      </div>
      {/* RIGHT SIDE */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
      <div className="bg-white p-4 rounded-md">
        <h1 className="text-xl font-semibold"> Shortcuts</h1>
        <div className="mt-4 flex gap-2 flex-wrap text-xs text-gray-500 ">
          <Link className="p-2 rounded-md bg-lamaSkylight" href = "/">Teacher&apos;s Classes</Link>
          <Link className="p-2 rounded-md bg-lamaPurplelight" href = "/">Teacher&apos;s Students</Link>
          <Link className="p-2 rounded-md bg-lamaYellowLight" href = "/">Teacher&apos;s Lessons</Link>
          <Link  className="p-2 rounded-md bg-pink-50" href = "/">Teacher&apos;s Exams</Link>
          <Link className="p-2 rounded-md bg-yellow-50" href = "/">Teacher&apos;s Assignments</Link>

        </div>
      </div>
      <Performance/>
      <Announcement/>
      </div>


    </div>
  );
}

export default SingleTeacherpage;


