import React from 'react';
import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Tanzania Ports Authority Tower',
    description: 'One of the tallest buildings in Tanzania',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Tanzania_Port_Authority_Headquarters_%28cropped%29.jpg/800px-Tanzania_Port_Authority_Headquarters_%28cropped%29.jpg',
    address: 'Dar es Salaam',
    location: {
      lat: -6.822004,
      lng: 39.2841322
    },
    creator: 'u1'
  },

  {
    id: 'p2',
    title: 'Tanzania Ports Authority Tower',
    description: 'One of the tallest buildings in Tanzania',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Tanzania_Port_Authority_Headquarters_%28cropped%29.jpg/800px-Tanzania_Port_Authority_Headquarters_%28cropped%29.jpg',
    address: 'Dar es Salaam',
    location: {
      lat: -6.822004,
      lng: 39.2841322
    },
    creator: 'u2'
  }
]

const UserPlaces = () => {
  return 
    <PlaceList items={DUMMY_PLACES} /> 
}

export default UserPlaces;
