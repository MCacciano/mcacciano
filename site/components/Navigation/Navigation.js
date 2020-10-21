import Link from 'next/link';
import { useRouter } from 'next/router';

const Navigation = () => {
  const router = useRouter();

  const links = [
    {
      label: 'Work',
      href: '/work'
    },
    {
      label: 'Contact',
      href: '/contact'
    }
  ];

  return (
    <nav className='h-16 sticky top-0 w-full flex justify-center text-primary border-b border-primary'>
      <div className='flex justify-between w-full h-full max-w-screen-lg px-2'>
        <div className='flex items-center'>
          <h2 className='text-3xl font-dancing font-bold relative'>
            <div
              className={`bg-secondary w-full h-3 absolute opacity-50 ${
                router.pathname === '/' ? '' : 'hidden'
              }`}
              style={{ top: '65%', zIndex: '-1' }}
            />
            <Link href='/'>
              <a
                className={`block h-full ${router.pathname === '/' ? '' : 'hover:text-secondary'}`}
              >
                Michael Cacciano
              </a>
            </Link>
          </h2>
        </div>
        <div className='flex-1 flex justify-end'>
          <ul className='flex font-rubik text-lg'>
            {links.map(({ href, label }) => (
              <li className='h-full relative'>
                <div
                  className={`bg-secondary w-full h-3 absolute opacity-50 ${
                    router.pathname === href ? '' : 'hidden'
                  }`}
                  style={{ top: '50%', zIndex: '-1' }}
                />
                <Link href={href}>
                  <a
                    className={`flex h-full items-center px-2 ${
                      router.pathname === href ? '' : 'font-thin hover:text-secondary'
                    }`}
                  >
                    {label}
                  </a>
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
