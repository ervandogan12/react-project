
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
import SearchResults from './components/pages/Search/SearchResults';
import FilterResults from './components/pages/Filter/FilterResults';
import AuthForm from './components/Login/AuthForm';



const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<AuthForm />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="api/books/:id" element={<BookDetail />} />
      <Route path="api/shorts/:id" element={<ShortDetail />} />
      <Route path="api/villains/:id" element={<VillainDetail />} />
      <Route path="/favourites" element={<Favourites />} />
      <Route path="/browse/books" element={<Books />} />
      <Route path="/browse/shorts" element={<Shorts />} />
      <Route path="/browse/villains" element={<Villains />} />
      <Route path="/searchResults" element={<SearchResults />} />
      <Route path="/filterResults" element={<FilterResults />} />
    </Routes>
  );
};

export default AppRoutes;