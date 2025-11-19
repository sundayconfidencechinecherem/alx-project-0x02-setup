import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header>
        <nav>
          <ul>
            <li><Link href='/'>LOGO</Link></li>
            <li><Link href='/home'>HOME</Link></li>
            <li><Link href='/about'>ABOUT</Link></li>
            <li><Link href='/posts'>POSTS</Link></li>
          </ul>
        </nav>
    </header>
  );
};

export default Header;