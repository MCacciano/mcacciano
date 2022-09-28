import Link from 'next/link';
import { useState } from 'react';

const MobileNav = ({ links = [] }) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(prev => !prev);

  return (
    <div className='flex flex-col lg:hidden'>
      <div
        className='flex items-center h-full relative p-2 sm:max-w-xl mx-auto'
        style={{ zIndex: '9999' }}
      >
        <button
          onClick={toggleMenu}
          className='text-gray-100 w-10 h-10 relative focus:outline-none bg-primary'
        >
          <span className='sr-only'>Open main menu</span>
          <div className='block w-5 absolute left-1/2 top-1/2 transform  -translate-x-1/2 -translate-y-1/2'>
            <span
              aria-hidden='true'
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                open ? 'rotate-45' : '-translate-y-1.5'
              }`}
            />
            <span
              aria-hidden='true'
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              aria-hidden='true'
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                open ? '-rotate-45' : 'translate-y-1.5'
              }`}
            />
          </div>
        </button>
      </div>
      <div
        className={`absolute w-full bg-zinc-800 border-l border-black min-h-full z-50 transform transition-all duration-500 ease-in-out top-0 ${
          open ? 'right-0' : '-right-full'
        }`}
      >
        <div className='h-20'></div>
        <div className='flex flex-col gap-y-6 text-gray-100 font-lato font-light'>
          {links.map(({ isActive, href, label }, i) => (
            <Link key={label} href={href}>
              <a
                className={`flex justify-center text-2xl p-4 border-black ${
                  isActive ? 'text-gray-300 font-bold border border-gray-300' : ''
                }`}
                onClick={toggleMenu}
              >
                {label}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
