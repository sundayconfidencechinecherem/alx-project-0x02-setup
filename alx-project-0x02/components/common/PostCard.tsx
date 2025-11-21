import { PostProps } from '@/interfaces';
import React from 'react';



const PostCard: React.FC <PostProps> = ({title, content, userId }) => {
  return (
    
      <div className='bg-gray-200 hover:bg-blue-200 p-4 rounded-2xl space-y-4 hover:cursor-pointer'>
       <div>
         <h2 className='font-bold '>{title}</h2>
        <p className='text-sm'>{content}</p>
       </div>
        <span className='text-blue-200 bg-gray-700 px-2 py-1 rounded-lg'>USER ID: {userId}</span>
      </div>
  );
};

export default PostCard;