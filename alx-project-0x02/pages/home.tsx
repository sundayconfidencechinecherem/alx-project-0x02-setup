import Card from '@/components/common/Card';
import React, { useState } from 'react';
import PostModal from '@/components/common/PostModal';
import { Post } from '@/interfaces';
import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';
const Home: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [posts, setPosts] = useState<Post[]>([]);

    const handleCreatePost = (title: string, content: string) =>{
        const newPost: Post = {
            id: Date.now(),
            title,
            content
        };
        setPosts([...posts, newPost])
        setIsModalOpen(false);
    }
  return (
    <div>
        <Header />
      <h1 className='text-center p-4 font-bold text-3xl'>Anna`s Blog Post</h1>
      <p className='mx-10'>Anna is a software developer that is passionate about teaching and sharing her knowldge for free. She has published lot`s of articles that will help novice in the field to get started and today she design to gather all her articles in one place. Take a look at some of her post.</p>

     <div className='flex justify-center  my-4'>
       <Button onClick={() => setIsModalOpen(true)}  shape='rounded-full'  size='medium' text='CREATE POST' />
     </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mx-10'>

        <Card  title='How to create lasting brand' content='occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut'/>

        <Card  title='Python Basics' content='occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut'/>
        <Card  title='Learn in Public' content='occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut'/>
        <Card  title='Why Soft Skills Matters in Tech' content='occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut'/>
        <Card  title='Benefit of Worklogs' content='occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut'/>
     </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mx-10 my-6'>
        {
        posts.map((post) => (
            <Card key={post.id}  title={post.title} content={post.content}/>
        ))
      }
      </div>

      <PostModal isOpen={isModalOpen} onSubmit={handleCreatePost}  onClose={() => setIsModalOpen(false)}/>
    </div>
  );
};

export default Home;