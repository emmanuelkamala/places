import React from 'react'
import UsersList from '../components/UsersList';

function Users() {
  const USERS = [
    { id: 'u1', name: 'Emmanuel Joatham', image: 'https://ejoka.com/e.png', places: 3 }
]
  return <UsersList items={USERS} />
}

export default Users;
