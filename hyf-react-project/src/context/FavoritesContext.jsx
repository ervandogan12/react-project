import React, { createContext, useContext, useState, useEffect } from 'react';

export const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
  const [favoriteBookIds, setBookFavoriteIds] = useState(() => {
    const storedBookFavorites = localStorage.getItem('favoriteBookIds');
    return storedBookFavorites ? JSON.parse(storedBookFavorites) : [];
  });

  const [favoriteShortIds, setShortFavoriteIds] = useState(() => {
    const storedShortFavorites = localStorage.getItem('favoriteShortIds');
    return storedShortFavorites ? JSON.parse(storedShortFavorites) : [];
  });
  useEffect(() => {
    localStorage.setItem('favoriteShortIds', JSON.stringify(favoriteShortIds));
  }, [favoriteShortIds]);
  useEffect(() => {
    localStorage.setItem('favoriteBookIds', JSON.stringify(favoriteBookIds));
  }, [favoriteBookIds]);

  const toggleBookFavorite = (dataId) => {
    setBookFavoriteIds((currentFavorites) => {
      return currentFavorites.includes(dataId) ? currentFavorites.filter(id => id !== dataId) : [...currentFavorites, dataId];
    });

  };

  const toggleShortFavorite = (dataId) => {
    setShortFavoriteIds((currentFavorites) => {
      return currentFavorites.includes(dataId) ? currentFavorites.filter(id => id !== dataId) : [...currentFavorites, dataId];
    });

  };



  return (
    <FavoritesContext.Provider value={{favoriteBookIds,favoriteShortIds, toggleBookFavorite, toggleShortFavorite}}>
      {children}
    </FavoritesContext.Provider>
  );
};