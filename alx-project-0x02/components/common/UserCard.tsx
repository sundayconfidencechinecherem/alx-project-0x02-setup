import { UserProps } from '@/interfaces';
import React from 'react';

const UserCard: React.FC <UserProps> = ({name,email,address,}) => {


  return (
    <div>
        <h1>user Card</h1>
        <p>{name}</p>
        <p>{email}</p>
        <p>{address.city}</p>
        <p>{address.street}</p>
        <p>{address.zipcode}</p>
        <p>{address.street}</p>
        <p>{address.geo.lat}</p>
        <p>{address.geo.lng}</p>
    </div>
  );
};

export default UserCard;