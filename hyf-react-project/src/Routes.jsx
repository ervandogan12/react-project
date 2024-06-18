// src/routes/Routes.jsx or a similar path
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductDetail from './components/BookDetail';
import LandingPage from './components/pages/LandingPage';
import Favourites from '../src/components/Favourites';
import Books from './components/pages/Books';
import Shorts from './components/pages/Shorts';
import Villains from './components/pages/Villains';
import BookDetail from './components/BookDetail';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="api/books/:id" element={<BookDetail />} />
      <Route path="/favourites" element={<Favourites />} />
      <Route path="/browse/books" element={<Books />} />
      <Route path="/browse/shorts" element={<Shorts />} />
      <Route path="/browse/villains" element={<Villains />} />
    </Routes>
  );
};

export default AppRoutes;