import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <header>
        <nav className='h-20 bg-zinc-800 flex justify-center'>
          <div className='flex justify-between w-full mx-10'>
            <div className='flex-1 h-full flex items-center text-gray-100'>
              <Link href='/'>
                <a className='font-rubik font-medium'>Michael Cacciano</a>
              </Link>
            </div>
            <div className='flex-1 flex gap-5 text-gray-100'>
              <Link href='/blog'>
                <a className='flex items-center p-2 font-rubik font-extralight'>Blog</a>
              </Link>
              <Link href='/about'>
                <a className='flex items-center p-2 font-rubik font-extralight'>About</a>
              </Link>
              <Link href='/uses'>
                <a className='flex items-center p-2 font-rubik font-extralight'>Uses</a>
              </Link>
            </div>
            <div className='flex-1 text-gray-100'></div>
          </div>
        </nav>
      </header>
    </div>
  );
}
