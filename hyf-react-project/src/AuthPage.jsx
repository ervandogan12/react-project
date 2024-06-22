import React from 'react';
import Login from './Login';
import Registration from './Registration';
import AuthForm from './Login';

function AuthPage() {
  return (
    <div>
      <h1>Welcome</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <AuthForm />
      </div>
    </div>
  );
}

export default AuthPage;