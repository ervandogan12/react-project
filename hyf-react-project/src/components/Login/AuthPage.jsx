import React from 'react';
import AuthForm from './AuthForm';

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