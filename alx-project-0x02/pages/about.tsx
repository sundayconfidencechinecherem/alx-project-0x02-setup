import Button from '@/components/common/Button';
import Header from '@/components/layout/Header';
import Image from 'next/image';
import React from 'react';

const About: React.FC = () => {
  const handleAboutButton = () => {
    console.log('about button clicked')
  }
  return (
    <div >
      <Header />
      <div className='mx-10 space-y-4 '>
        <section >
        <h1 className='font-bold text-2xl py-4'>About Anna</h1>
          <p className='mb-4'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, molestias, quaerat voluptatem quia distinctio corrupti doloribus, nostrum explicabo id sapiente delectus. Possimus blanditiis eligendi architecto dignissimos alias magni modi adipisci  quibusdam nostrum Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ipsa quam eaque minima delectus. Id dolor illo explicabo porro adipisci nobis, atque accusantium in veniam vero, pariatur enim cumque reiciendis
          </p>
        <Button onClick={handleAboutButton}  size='medium' shape='rounded-sm' text='Read More' />
        </section>
        
        <section className='grid grid-cols-1 lg:grid-cols-12 gap-3'>
          <div className='lg:col-span-6'>
            <h2 className='font-bold  text-lg inline-block border-b-4 border-blue-300 mb-4'>My Journey</h2>
            <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, commodi? Ipsum adipisci quas vero illum praesentium qui eum veniam nemo quis, quod consectetur blanditiis possimus, explicabo eos sunt quibusdam nostrum  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ipsa quam eaque minima delectus. Id dolor illo explicabo porro adipisci nobis, atque accusantium in veniam vero, pariatur enim cumque reiciendis!</p>
            <Button onClick={handleAboutButton}  size='small' shape='rounded-full' text='Share Your Story' />
          </div>
          <div className='lg:col-span-4'>
            <figure>
              <Image src={'/assets/images/my-journey.png'} width={400}  height={400} alt='myjourney-image' className='rounded-2xl'/>
              <figcaption className='text-center text-blue-400 font-bold py-2'>My Journey</figcaption>
            </figure>
          </div>
          <aside className='lg:col-span-2   rounded-2xl'>
            <ul className='space-y-2'>
              <li className='bg-gray-200 block text-center p-2'>
                <a href="#">Latest</a>
              </li>
              <li className='bg-gray-200 block text-center p-2'>
                <a href="#">Trending</a>
              </li>
              <li className='bg-gray-200 block text-center p-2'>
                <a href="#">My story</a>
              </li>
              <Button onClick={handleAboutButton}  size='large' shape='rounded-md' text='Check More Links' />
            </ul>
          </aside>
        </section>
    
      
        
        </div>
    </div>
  );
};

export default About;