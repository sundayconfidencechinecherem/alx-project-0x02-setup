import { type ButtonProps } from '@/interfaces';
import React from 'react';

const Button: React.FC <ButtonProps> = ({shape,size,text ,onClick}) => {
    const buttonSizeClasses = {
        small: 'px-2 py-2 text-sm',
        medium: 'px-3 py-3 text-base',
        large: 'px-4 py-4 text-lg'
    }
  return (
    <div>
        <button className={`${buttonSizeClasses[size]} ${shape} bg-blue-500 text-white hover:bg-black `} onClick={onClick}>
            {text}
        </button>
    </div>
  );
};

export default Button;