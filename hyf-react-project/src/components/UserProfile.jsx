import React from 'react';
import { useAuth } from '../context/AuthContext'; // Adjust the import path as necessary

function UserProfile() {
  const { userEmail } = useAuth();


  return (
    <div className='user-profile'>
      {userEmail ? `Welcome ${userEmail}` : 'Not logged in'}
    </div>
  );
}

export default UserProfile;