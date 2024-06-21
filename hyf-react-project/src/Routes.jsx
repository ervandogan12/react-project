// src/routes/Routes.jsx or a similar path
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ShortDetail from './components/pages/Shorts/ShortDetail';
import LandingPage from './components/pages/LandingPage';
import Favourites from './components/pages/Favourites';
import Books from './components/pages/Books/Books';
import Shorts from './components/pages/Shorts/Shorts';
import Villains from './components/pages/Villains/Villains';
import BookDetail from './components/pages/Books/BookDetail';
import VillainDetail from './components/pages/Villains/VillainDetails';
import SearchResults from './components/SearchResults';
import FilterResults from './components/FilterResults';
import Login from './Login';
import Registration from './Registration';
import AuthPage from './AuthPage';
import ProtectedRoute from './ProtectedRoute';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<AuthPage />} />
      <Route path="/" element={<ProtectedRoute><LandingPage /></ProtectedRoute>} />
      <Route path="/registration" element={<Registration />} />
      <Route path="api/books/:id" element={<ProtectedRoute><BookDetail /></ProtectedRoute>} />
      <Route path="api/shorts/:id" element={<ProtectedRoute><ShortDetail /></ProtectedRoute>} />
      <Route path="api/villains/:id" element={<ProtectedRoute><VillainDetail /></ProtectedRoute>} />
      <Route path="/favourites" element={<ProtectedRoute><Favourites /></ProtectedRoute>} />
      <Route path="/browse/books" element={<ProtectedRoute><Books /></ProtectedRoute>} />
      <Route path="/browse/shorts" element={<ProtectedRoute><Shorts /></ProtectedRoute>} />
      <Route path="/browse/villains" element={<ProtectedRoute><Villains /></ProtectedRoute>} />
      <Route path="/searchResults" element={<ProtectedRoute><SearchResults /></ProtectedRoute>} />
      <Route path="/filterResults" element={<ProtectedRoute><FilterResults /></ProtectedRoute>} />
    </Routes>
  );
};

export default AppRoutes;