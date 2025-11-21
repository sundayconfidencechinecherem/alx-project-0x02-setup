import React from 'react';
import Header from '@/components/layout/Header';
import { PostProps } from '@/interfaces';
import PostCard from '@/components/common/PostCard';
import { Post } from '../interfaces/index';
import { GetStaticProps } from 'next';



interface postsPageProps {
    posts: PostProps[];
}
const Posts: React.FC<postsPageProps> = ({posts}) => {
  return (
    <div >
        <Header />

        <div className='space-y-4 mx-10'>
        <h2 className='text-center font-bold text-2xl my-2'>Anna`s API Posts Page</h2>
        <p className=''>Anna has randomly import all her other posts from different channels using api and now render it in her home application, making all anna`s post easily accessible. What a genuius and empathetic leader she is, now her students and people who look up to her to learn won`t find it hard getting all her resources because everything is now in one place.</p>
        

         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
            {
                posts.map((post) => (
                    <PostCard key={post.id} title={post.title} content={post.content} userId={post.userId} />
                ))
            }
        </div>
        </div>
    </div>
  );
};


export const getStaticProps:  GetStaticProps = async () => {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json();
        //console.log('data json', data)

        const posts: PostProps[] = data.map((post:any) => ({
            title: post.title,
            id: post.id,
            content: post.body,
            userId: post.userId
        }))
        return {
            props: {
                posts,
            }
        };
    }catch (error){
        console.log('api data fetch error: ', error)
        return{
            props:{
                posts: []
            }
        }
    }
}
export default Posts;