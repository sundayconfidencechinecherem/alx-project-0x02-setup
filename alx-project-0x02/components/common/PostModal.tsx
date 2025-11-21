import React, {useState} from 'react';
import { PostModalProps } from '@/interfaces';
import Button from './Button';

const PostModal: React.FC <PostModalProps> = ({isOpen, onSubmit, onClose}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e: React.FormEvent)=> {
        e.preventDefault();
        onSubmit(title,content);
        setTitle('');
        setContent('');
    }
    if (!isOpen){return null};
  return (
    <div className='fixed inset-0 bg-blue-500 flex items-center justify-center'>
      <div className='bg-white space-y-6 p-8 border-2 border-blue-200 rounded-2xl max-w-md w-full mx-4'>
      
              <h1 className='text-center font-bold text-2xl '>Create a post</h1>
              <form onSubmit={handleSubmit}> 
                <div>
                  <label className='block font-bold' htmlFor="title">Title:</label>
                  <input className=' w-full py-2 border-2 border-blue-200 rounded-md my-2' maxLength={20} placeholder='Post Title' type="text" id='title'  value={title} onChange={(e) => setTitle(e.target.value)} required/>
                </div>
                <div>
                  <label className='block font-bold' htmlFor="content">Content:</label>
                  <textarea className='w-full py-2 border-2 border-blue-200 rounded-md my-2' rows={4} maxLength={500} placeholder='Post Content'  id='content' value={content} onChange={(e) => setContent(e.target.value)} required>

                  </textarea>
                </div>
                <div className='flex justify-around mt-2'>
                <Button size='large' shape='rounded-md'  onClick={onClose} text='Cancel' />
                <Button  size='medium'  shape='rounded-md' onClick={() => handleSubmit} text='Post' />
              </div>
              </form>
          </div>
    </div>
  );
};

export default PostModal;