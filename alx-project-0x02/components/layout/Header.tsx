import React, {useState} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Header: React.FC = () => {
  const router = useRouter();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const closeMobileMenu = () => {
    setIsMobileOpen(false);
  }
  const goActive = (path: string) => {
    const isActive = router.pathname === path;
    return `text-black
      ${isActive 
        ?
        'font-bold'
        :
        'hover:text-blue-700'
      }`;
    
  }
  return (
    <header>
        <nav className='bg-blue-200 relative'>

          {/* desktop nav links */}

          <div className='flex justify-between items-center md:px-10 p-4 md:p-0'>
            <Link  href='/' className={goActive('/')}>
            <Image alt='logo' width={40} height={40} src='/assets/images/log.png' /> 
            </Link>
          <ul className='hidden md:flex justify-end py-6 space-x-6'>
            <li><Link href='/home' className={goActive('/home')}>HOME</Link></li>
            <li><Link href='/about' className={goActive('/about')}>ABOUT</Link></li>
            <li><Link href='/posts' className={goActive('/posts')}>POSTS</Link></li>
            <li><Link href='/users' className={goActive('/users')}>USERS</Link></li>
          </ul>

          {/* harmburger for mobile */}
          <button className='md:hidden' onClick={() => setIsMobileOpen(!isMobileOpen)} aria-label={isMobileOpen ? "Close menu" : "Open menu"}>
             <div className='flex flex-col items-center justify-center w-6 h-6 relative'>
              
              <span className={`bg-black w-6 h-0.5 absolute transition-all duration-300 ${
                  isMobileOpen ? 'rotate-45 top-3' : 'top-1' }`}></span>
              <span className={`bg-black w-6 h-0.5 absolute transition-all duration-300 ${
                isMobileOpen ? 'opacity-0' : 'top-3'
              }`}></span>
              <span className={`bg-black w-6 h-0.5 absolute transition-all duration-300 ${
                isMobileOpen ? '-rotate-45 top-3' : 'top-5'
              }`}></span>

            </div>
          </button>
          </div>

            {/* mobile nav links */}
            {
              isMobileOpen && (
                <>
                <div className='absolute right-0 bg-blue-200 px-6 justify-end'>
                  <ul className='flex flex-col py-6  space-y-4 '>
                    <li><Link href='/home' className={goActive('/home')} onClick={closeMobileMenu}>HOME</Link></li>
                    <li><Link href='/about' className={goActive('/about')} onClick={closeMobileMenu}>ABOUT</Link></li>
                    <li><Link href='/posts' className={goActive('/posts')} onClick={closeMobileMenu}>POSTS</Link></li>
                    <li><Link href='/users' className={goActive('/users')} onClick={closeMobileMenu}>USERS</Link></li>
                  </ul>
              </div>
                </>
              )
            }
        </nav>
    </header>
  );
};

export default Header;