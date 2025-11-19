import React, { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import { PostProps } from '@/interfaces';
import PostCard from '@/components/common/PostCard';
import { Post } from '../interfaces/index';
const Posts: React.FC = () => {
    const [posts, setPosts] = useState<PostProps[]>([])

    useEffect (() => {
        const fetchPosts = async () => {
            try{
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await response.json();
                console.log('api data', data)

                const transformedposts: PostProps[] = data.map((post: any) => ({
                    title: post.title,
                    content: post.body,
                    userId: post.userId
                }));

                setPosts(transformedposts);
            }catch(error){
                console.log('api data fetch error: ' ,error)
            }
        }
        fetchPosts();
    }, []);
  return (
    <div>
        <Header />
        <h1>Posts Page</h1>
        <p>This is the posts page.</p>
        <div>
            {
                posts.map((post,index) => (
                    <PostCard key={index} title={post.title} content={post.content} userId={post.userId} />
                ))
            }
        </div>
    </div>
  );
};

export default Posts;