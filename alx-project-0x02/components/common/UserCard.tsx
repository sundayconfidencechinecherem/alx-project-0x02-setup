import { UserProps } from '@/interfaces';
import React from 'react';

const UserCard: React.FC <UserProps> = ({name,email,address,}) => {


  return (
    <div>
      <div className='bg-blue-200 hover:bg-blue-300 p-6 rounded-2xl hover:cursor-pointer '>
        <div className='flex justify-center'>


       <div className=' bg-white p-6 mb-2 inline-block rounded-2xl'>
         <div className='flex justify-center items-center'>
         <p className='font-bold w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center'>
  {name.charAt(0).toUpperCase()}
</p>
        </div>
        <div>
          <h2 className='font-bold'>Name: {name}</h2> 
          <p></p>
          <p className='text-gray-500'>Email: {email}</p> 
        </div>
       </div>
       </div>
       <div className='flex justify-center'>
        <div  className='text-center space-y-1'>
        <h2 className='font-bold text-center'>Address: </h2>
        <p>{address.city},  {address.street}, {address.zipcode}</p>
        <p>{address.geo.lat}, {address.suite}, {address.geo.lng}</p>
       </div>
       </div>
       
       
          
      </div>
    </div>
  );
};

export default UserCard;