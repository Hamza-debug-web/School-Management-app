"use client";  // This ensures that the component is rendered on the client-side

import React, { useEffect, useState } from 'react';
import { easeInOut, motion, useAnimationControls } from "framer-motion";
import NavigationLink from './NavigationLink';
import { ChartBarIcon, ChartPieIcon, DocumentCheckIcon } from '@heroicons/react/16/solid';
import { Square2StackIcon, UsersIcon } from '@heroicons/react/20/solid';

const containerVariants = {
  close: {
    width: "5rem",
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
  },
  open: {
    width: "16rem",
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
  },
};

const svgVariants = {
  close: {
    rotate: 360,
  },
  open: {
    rotate: 180,
  },
};

function SideNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const containerControls = useAnimationControls();
  const svgControls = useAnimationControls();

  useEffect(() => {
    if (isOpen) {
      containerControls.start("open");
      svgControls.start("open");
    } else {
      containerControls.start("close");
      svgControls.start("close");
    }
  }, [isOpen, containerControls, svgControls]);

  const handleOpenClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <motion.nav
        variants={containerVariants}
        animate={containerControls}
        initial="close"
        className='bg-neutral-900 flex flex-col z-10 gap-5 p-5 absolute h-screen shadow shadow-neutral-600'
      >

        <div className="flex flex-row w-full justify-between place-items-center">
          {/* Logo is always visible */}
          <div className='w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-700 rounded-full'/>
          <button className='p-1 rounded-full flex' onClick={handleOpenClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-8 h-8 stroke-neutral-200"
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={svgVariants}
                animate={svgControls}
                d="M13.5 4.5L21 12m0 0-7.5 7.5M21 12H3"
                transition={{
                  duration: 0.5,
                  ease: easeInOut,
                }}
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div className='flex flex-col gap-3'>
          <NavigationLink name='Dashboard' isOpen={isOpen}>
            <ChartBarIcon className='stroke-inherit stroke-[0.75] min-w-8' />
          </NavigationLink>
          <NavigationLink name='Reports' isOpen={isOpen}>
            <ChartPieIcon className='stroke-inherit stroke-[0.75] min-w-8' />
          </NavigationLink>
          <NavigationLink name='Tasks' isOpen={isOpen}>
            <DocumentCheckIcon className='stroke-inherit stroke-[0.75] min-w-8' />
          </NavigationLink>
          <NavigationLink name='Stack' isOpen={isOpen}>
            <Square2StackIcon className='stroke-inherit stroke-[0.75] min-w-8' />
          </NavigationLink>
          <NavigationLink name='Users' isOpen={isOpen}>
            <UsersIcon className='stroke-inherit stroke-[0.75] min-w-8' />
          </NavigationLink>
        </div>
      </motion.nav>
    </>
  );
}

export default SideNavbar;
