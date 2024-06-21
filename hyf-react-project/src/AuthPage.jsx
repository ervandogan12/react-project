import React from 'react';
import Login from './Login';
import Registration from './Registration';

function AuthPage() {
  return (
    <div>
      <h1>Welcome</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Login />
      </div>
    </div>
  );
}

export default AuthPage;