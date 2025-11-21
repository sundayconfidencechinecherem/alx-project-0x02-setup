import { type ButtonProps } from '@/interfaces';
import React from 'react';

const Button: React.FC <ButtonProps> = ({shape,size,text ,onClick}) => {
    const buttonSizeClasses = {
        small: 'px-3 py-2  text-sm bg-blue-200 hover:bg-black hover:text-blue-200 border-blue-400 hover:cursor-pointer',
        medium: 'px-5 py-3 text-base bg-black text-blue-200 font-bold  hover:bg-blue-200 hover:text-black border-blue-400 hover:cursor-pointer',
        large: 'px-6 py-2 text-lg bg-blue-200 text-black font-bold  hover:bg-black hover:text-blue-200 border-blue-400 hover:cursor-pointer'


        
    }
  return (
    <div>
        <button className={`${buttonSizeClasses[size]} ${shape} `} onClick={onClick}>
            {text}
        </button>
    </div>
  );
};

export default Button;