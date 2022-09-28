import { useRouter } from 'next/router';
import Link from 'next/link';

import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const Navigation = () => {
  const { asPath } = useRouter();

  const links = [
    { href: '/', isActive: asPath === '/', label: 'Home' },
    {
      href: '/blog',
      isActive: asPath.includes('blog'),
      label: 'Blog',
    },
    {
      href: '/about',
      isActive: asPath.includes('about'),
      label: 'About',
    },
    {
      href: '/uses',
      isActive: asPath.includes('uses'),
      label: 'Uses',
    },
  ];

  return (
    <nav className='h-20 bg-zinc-800 flex justify-center z-50'>
      <div className='flex justify-between w-full mx-10'>
        <div className='flex-1 h-full flex items-center text-gray-100 font-rubik font-medium'>
          <Link href='/'>
            <a className='hidden lg:block'>Michael Cacciano</a>
          </Link>
          <Link href='/'>
            <a className='lg:hidden'>MCacciano</a>
          </Link>
        </div>
        <DesktopNav links={links} />
        <MobileNav links={links} />
      </div>
    </nav>
  );
};

export default Navigation;
