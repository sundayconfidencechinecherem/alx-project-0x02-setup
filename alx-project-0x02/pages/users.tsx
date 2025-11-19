import React from 'react';
import { GetStaticProps } from 'next';
import { UserProps } from '@/interfaces';
import UserCard from '@/components/common/UserCard';
import Header from '@/components/layout/Header';



interface UserpageProps{
    users: UserProps[];
}
const Users: React.FC<UserpageProps> = ({users}) => {
  return (
    <div>
        <Header />
        <h1>Users</h1>
        <div>
            {
                users.map((user) => (
                    <UserCard key={user.id} name={user.name} email={user.email}  
                    address={user.address} 

                    />
                ))
            }
        </div>
    </div>
  );
};


export const getStaticProps:  GetStaticProps = async () => {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();
        //console.log('data: ', data)

        const users: UserProps[] = data.map((user:any) => ({
            id:user.id,
            name: user.name,
            email: user.email,
            address: {
                city: user.address.city,
                street: user.address.street,
                zipcode: user.address.zipcode,
                suite: user.address.suite,
                geo: {
                    lat: user.address.geo.lat,
                    lng: user.address.geo.lng,
                }
            }
        }))
        return{
            props: {
                users,
            }
        }
    }catch(error){
        console.log('error mesage: ', error)
        return{
            props:{
                users: []
            }
        }
    }
}
export default Users;