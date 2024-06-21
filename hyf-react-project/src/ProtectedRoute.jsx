import React from 'react';
import { Navigate } from 'react-router-dom';

const isAuthenticated = () => {

  return localStorage.getItem('token') ? true : false;
};

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {

    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;