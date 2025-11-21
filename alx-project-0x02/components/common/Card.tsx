import { type CardProps } from '@/interfaces';
import React from 'react';

const Card: React.FC<CardProps> = ({title,content}) => {
  return (
    <div className='bg-blue-50 border-2 border-blue-200 rounded-lg p-4 w-full hover:bg-blue-100 cursor-pointer'>
        <h2 className='text-black font-bold text-lg text-center'>{title}</h2>
        <p className='text-gray-700 text-left'>{content}</p>
    </div>
  );
};

export default Card;