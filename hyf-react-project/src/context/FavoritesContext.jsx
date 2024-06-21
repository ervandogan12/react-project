import React, { createContext, useContext, useState, useEffect } from 'react';

export const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
  const [favoriteBooks, setFavoriteBooks] = useState(() => {
    const storedBookFavorites = localStorage.getItem('favoriteBooks');
    return storedBookFavorites ? JSON.parse(storedBookFavorites) : [];
  });

  const [favoriteShorts, setFavoriteShorts] = useState(() => {
    const storedShortFavorites = localStorage.getItem('favoriteShorts');
    return storedShortFavorites ? JSON.parse(storedShortFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem('favoriteBooks', JSON.stringify(favoriteBooks));
  }, [favoriteBooks]);

  useEffect(() => {
    localStorage.setItem('favoriteShorts', JSON.stringify(favoriteShorts));
  }, [favoriteShorts]);

  const toggleBookFavorite = (book) => {
    setFavoriteBooks((currentFavorites) => {
      const index = currentFavorites.findIndex(fav => fav.id === book.id);
      if (index > -1) {
        return currentFavorites.filter((_, i) => i !== index);
      } else {
        return [...currentFavorites, book];
      }
    });
  };

  const toggleShortFavorite = (short) => {
    setFavoriteShorts((currentFavorites) => {
      const index = currentFavorites.findIndex(fav => fav.id === short.id);
      if (index > -1) {
        return currentFavorites.filter((_, i) => i !== index);
      } else {
        return [...currentFavorites, short];
      }
    });
  };

  return (
    <FavoritesContext.Provider value={{ favoriteBooks, favoriteShorts, toggleBookFavorite, toggleShortFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};