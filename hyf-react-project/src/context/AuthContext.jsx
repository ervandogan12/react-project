import React, { createContext, useContext, useState, useEffect } from 'react';
import { jwtDecode } from '/node_modules/.vite/deps/jwt-decode.js?v=6dca41cb';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
      const decodedToken = jwtDecode(token);
      setUserEmail(decodedToken.email); 
    }
  }, []);

  const login = (token) => {
    localStorage.setItem('token', token);
    setIsAuthenticated(true);
    const decodedToken = jwtDecode(token);
    setUserEmail(decodedToken.email); 
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setUserEmail(''); 
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, userEmail }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;