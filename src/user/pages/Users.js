import React from 'react'
import UsersList from '../components/UsersList';

function Users() {
  const USERS = [
    { id: 'u1', 
      name: 'Emmanuel Joatham', 
      image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 
      places: 3 
    }
]
  return <UsersList items={USERS} />
}

export default Users;
