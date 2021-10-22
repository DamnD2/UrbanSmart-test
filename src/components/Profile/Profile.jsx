import React from 'react';
import { useSelector } from 'react-redux';

import './Profile.scss';

const Profile = () => {
  const userName = useSelector((state) => state.user.userName);

  return (
    <h1 className='profile__title'>{userName}</h1>
  );
};

export default Profile;
