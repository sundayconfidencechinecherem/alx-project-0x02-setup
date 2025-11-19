import { PostProps } from '@/interfaces';
import React from 'react';



const PostCard: React.FC <PostProps> = ({title, content, userId }) => {
  return (
    <div>
        <h1>{title}</h1>
        <p>{content}</p>
        <p>USER ID: {userId}</p>
    </div>
  );
};

export default PostCard;