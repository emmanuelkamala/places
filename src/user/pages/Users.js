import React from 'react'
import UsersList from '../components/UsersList';

function Users() {
  const USERS = [
    { id: 'u1', name: 'Emmanuel Joatham', image: '../../../public/images/banner.jpg', places: 3 }
]
  return <UsersList items={USERS} />
}

export default Users;
