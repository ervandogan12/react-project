import React from 'react';
import { useAuth } from '../context/AuthContext'; 

function UserProfile() {
  const { userEmail } = useAuth();


  return (
    <div className='user-profile'>
      {userEmail ? `Welcome ${userEmail}` : 'Not logged in'}
    </div>
  );
}

export default UserProfile;