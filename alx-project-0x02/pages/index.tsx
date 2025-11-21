
import Button from '@/components/common/Button';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import React from 'react';


const Homepage: React.FC = () => {
  return (
    <div>
      <Header />

        <section>
          <h1 className='text-center font-bold text-2xl py-4'>Welcome to Homepage</h1>
          <div className='mx-10  '>
            <div className='mb-6'>
            <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ea, repellat perferendis deleniti veniam recusandae! Rerum, sed? Ad quidem nemo exercitationem vel voluptas? Nemo consectetur doloremque ea labore quidem! Mollitia. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, at. Esse eius consequuntur possimus sequi explicabo, expedita totam labore! Aut illo libero at minus pariatur eum modi rerum, quod ipsum?</p>
            <Button size='medium' shape='rounded-md' text='Learn More' />
          </div>
          
         <div className='flex md:justify-center '>
           <iframe width="560" height="315" src="https://www.youtube.com/embed/bvMgyKp4Y6A?si=cPDFC2SRdGoeTisf&amp;start=7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
         </div>
          </div>

          <div className='mx-10 mt-4 mb-6'>
            <p className='mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ea, repellat perferendis deleniti veniam recusandae! Rerum, sed? Ad quidem nemo exercitationem vel voluptas? Nemo consectetur doloremque ea labore quidem! Mollitia. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, at. Esse eius consequuntur possimus sequi explicabo, expedita totam labore! Aut illo libero at minus pariatur eum modi rerum, quod ipsumLorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ea, repellat perferendis deleniti veniam recusandae! Rerum, sed? Ad quidem nemo exercitationem vel voluptas? Nemo consectetur doloremque ea labore quidem! Mollitia. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, at. Esse eius consequuntur possimus sequi explicabo, expedita totam labore! Aut illo libero at minus pariatur eum modi rerum, quod ipsum?</p>
            <Button size='medium' shape='rounded-md' text='Learn More' />
          </div>
        </section>
        <Footer />
    </div>
  );
};

export default Homepage;
