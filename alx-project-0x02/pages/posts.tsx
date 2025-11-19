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
    <div>
        <Header />
        <h1>Posts Page</h1>
        <p>This is the posts page.</p>
        <div>
            {
                posts.map((post) => (
                    <PostCard key={post.id} title={post.title} content={post.content} userId={post.userId} />
                ))
            }
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