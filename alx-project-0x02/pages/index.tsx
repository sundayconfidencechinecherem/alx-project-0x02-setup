

import Card from '@/components/common/Card';
import React from 'react';

const Homepage: React.FC = () => {
  return (
    <div>
      <h1>Homepage</h1>
      <Card  title='cardname1' content='card description1'/>
      <Card  title='cardname2' content='card description2'/>
      <Card  title='cardname3' content='card description3'/>
    </div>
  );
};

export default Homepage;