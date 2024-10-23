 import Image from 'next/image';
import React from 'react';
import { FaSearch, FaComments, FaBullhorn } from 'react-icons/fa'; // Font Awesome icon

function Navbar() {
  return (
    <div className='fixed top-0 w-[89%] md:w-[94%] lg:w-[86%] z-50 bg-white shadow-md'>
      <div className='flex items-center justify-between p-4'>
        {/* Search Bar */}
        <div className='hidden md:flex items-center gap-3 relative rounded-full ring-[1.5px] ring-gray-300 px-2'>
          <FaSearch className='absolute top-1/2 transform -translate-y-1/2 ml-1 text-blue-800' />
          <input type="text" placeholder='Search...' className='pl-6 outline-none rounded-lg' />
        </div>

        {/* Icons And User */}
        <div className='flex items-center gap-6 ml-auto'>
          <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer'>
            <FaComments />
          </div>

          <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative'>
            <FaBullhorn />
            <div className='absolute -top-3 -right-2 w-4 h-4 flex items-center justify-center bg-purple-500 text-white rounded-full text-[0.75rem] text-center'>1</div>
          </div>

          <div className='flex flex-col'>
            <span className='text-xs leading-3 font-medium'>John Doe</span>
            <span className='text-[10px] text-gray-500 text-right'>Admin</span>
          </div>

          <Image src="/images/profile.webp" alt='LoginProfile' width={32} height={36} className='mr-4' />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
