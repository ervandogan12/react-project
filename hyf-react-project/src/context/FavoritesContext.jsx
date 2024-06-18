import React, { createContext, useContext, useState, useEffect } from 'react';

export const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
  const [favoriteIds, setFavoriteIds] = useState(() => {
    const storedFavorites = localStorage.getItem('favoriteIds');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });


  useEffect(() => {
    localStorage.setItem('favoriteIds', JSON.stringify(favoriteIds));
  }, [favoriteIds]);

  const toggleFavorite = (dataId) => {
    setFavoriteIds((currentFavorites) => {
      return currentFavorites.includes(dataId) ? currentFavorites.filter(id => id !== dataId) : [...currentFavorites, dataId];
    });
  };



  return (
    <FavoritesContext.Provider value={{favoriteIds, toggleFavorite}}>
      {children}
    </FavoritesContext.Provider>
  );
};