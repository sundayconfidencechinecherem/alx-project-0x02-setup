import Button from '@/components/common/Button';
import React from 'react';

const About: React.FC = () => {
  const handleAboutButton = () => {
    console.log('about button clicked')
  }
  return (
    <div>
        <h1>Welcome to About Page</h1>
        <Button onClick={handleAboutButton}  size='small' shape='rounded-full' text='About button1' />
        <Button onClick={handleAboutButton}  size='medium' shape='rounded-sm' text='About button2' />
        <Button onClick={handleAboutButton}  size='large' shape='rounded-md' text='About button3' />
    </div>
  );
};

export default About;