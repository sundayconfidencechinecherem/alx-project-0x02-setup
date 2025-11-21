import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className='bg-blue-200 md:flex justify-between items-center py-6 px-10'>
        <div>
            <ul className='flex justify-center space-x-6 py-2'>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about" >About</Link></li>
                <li><Link href="/post" >Post</Link></li>
                <li><Link href="/user" >User</Link></li>
            </ul>
        </div>
        <footer className='text-center py-2'>
            &copy; 2025 Anna`s Story. All Rights Reserved.
        </footer>
    </div>
  );
};

export default Footer;