import React, { useState } from 'react';
import AuthForm from './AuthForm';

function AuthPage() {
 
  const [isLoading, setIsLoading] = useState(false);

 
  const handleLogin = async (loginDetails) => {
    setIsLoading(true);
   
    await new Promise((resolve) => setTimeout(resolve, 2000)); 
    setIsLoading(false);
  };

  return (
    <div>
      <h1>Welcome</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {isLoading ? (
          <div className="spinner" style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="lds-ring">
              <div></div><div></div><div></div><div></div>
            </div>
          </div>
        ) : (
          <AuthForm onLogin={handleLogin} />
        )}
      </div>
    </div>
  );
}

export default AuthPage;

