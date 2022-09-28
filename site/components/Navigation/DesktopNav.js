import Link from 'next/link';

const DesktopNav = ({ links = [] }) => {
  return (
    <div className='hidden flex-1 lg:flex gap-5 text-gray-100'>
      {links.map(({ href, isActive, label }) => (
        <Link href={href} key={href}>
          <a
            className={`flex items-center p-2 font-rubik font-extralight ${
              isActive ? 'text-secondary font-bold' : ''
            }`}
          >
            {label}
          </a>
        </Link>
      ))}
      <div className='flex-1 text-gray-100'></div>
    </div>
  );
};

export default DesktopNav;
