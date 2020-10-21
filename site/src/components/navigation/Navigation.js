import React from 'react';
import { Link } from 'gatsby';

const Navigation = props => {
  const url = typeof window !== 'undefined' ? window.location.href : '';
  const links = [
    {
      label: 'Work',
      href: '/work',
    },
    {
      label: 'Contact',
      href: '/contact',
    },
  ];

  console.log('URL', url);

  return (
    <nav className="h-16 sticky top-0 w-full flex justify-center text-primary border-b border-primary">
      <div className="flex justify-between w-full h-full max-w-screen-lg px-2">
        <div className="flex items-center">
          <h2 className="text-3xl font-dancing font-bold ">
            <Link
              to="/"
              className={`block h-full relative ${
                url === 'http://localhost:8000/' ? '' : 'hover:text-secondary'
              }`}
            >
              Michael Cacciano
              <div
                className={`bg-secondary w-full h-3 absolute opacity-50 ${
                  url === 'http://localhost:8000/' ? '' : 'hidden'
                }`}
                style={{ top: '65%', zIndex: '-1' }}
              />
            </Link>
          </h2>
        </div>
        <div className="flex-1 flex justify-end">
          <ul className="flex font-rubik text-lg">
            {links.map(({ href, label }) => (
              <li className="h-full relative">
                <div
                  className={`bg-secondary w-full h-3 absolute opacity-50 ${
                    url.includes(href) ? '' : 'hidden'
                  }`}
                  style={{ top: '50%', zIndex: '-1' }}
                />
                <Link
                  href={href}
                  className={`flex h-full items-center px-2 font-thin ${
                    url.includes(href) ? '' : 'hover:text-secondary'
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
