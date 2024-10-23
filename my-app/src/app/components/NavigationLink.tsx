import React from 'react';

interface Props {
  children: React.ReactNode;
  name: string;
  isOpen: boolean; // Prop to control the visibility of text and icon size
}

function NavigationLink({ children, name, isOpen }: Props) {
  return (
    <a
      href="#"
      className='flex p-1 rounded cursor-pointer stroke-[0.75] hover:stroke-neutral-100 stroke-neutral-400 text-neutral-400 hover:text-neutral-100 place-items-center gap-3 hover:bg-neutral-700/30 transition-colors duration-100'
    >
      {/* Conditional class to change icon size */}
      <div className={`transition-all duration-200 ${isOpen ? 'w-8 h-8' : 'w-6 h-6'}`}>
        {children}
      </div>
      {/* Conditionally show/hide text based on `isOpen` state */}
      <p className={`text-inherit font-poppins overflow-clip whitespace-nowrap tracking-wide transition-opacity duration-200 ${!isOpen ? 'opacity-0' : 'opacity-100'}`}>
        {name}
      </p>
    </a>
  );
}

export default NavigationLink;
