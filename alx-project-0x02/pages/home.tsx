import Card from '@/components/common/Card';
import React, { useState } from 'react';
import PostModal from '@/components/common/PostModal';
import { Post } from '@/interfaces';
import Header from '@/components/layout/Header';
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
      <h1>Home</h1>
      <button onClick={() => setIsModalOpen(true)}>CREATE POST</button>

      <Card  title='cardname1' content='card description1'/>
      <Card  title='cardname2' content='card description2'/>
      <Card  title='cardname3' content='card description3'/>

      {
        posts.map((post) => (
            <Card key={post.id}  title={post.title} content={post.content}/>
        ))
      }

      <PostModal isOpen={isModalOpen} onSubmit={handleCreatePost}  onClose={() => setIsModalOpen(false)}/>
    </div>
  );
};

export default Home;