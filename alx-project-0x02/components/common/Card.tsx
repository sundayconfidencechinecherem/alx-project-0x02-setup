import { CardProps } from '@/interfaces';
import React from 'react';

const Card: React.FC<CardProps> = ({title,content}) => {
  return (
    <div>
        <p>{title}</p>
        <p>{content}</p>
    </div>
  );
};

export default Card;