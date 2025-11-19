import React, {useState} from 'react';
import { PostModalProps } from '@/interfaces';

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
    <div>
        <h1>Create a post</h1>
        <input type="text" id='title'  value={title} onChange={(e) => setTitle(e.target.value)}/>
        <input type="text" id='content' value={content} onChange={(e) => setContent(e.target.value)} />
        <button onClick={onClose}>Cancel</button>
        <button onClick={handleSubmit}>Post</button>
    </div>
  );
};

export default PostModal;