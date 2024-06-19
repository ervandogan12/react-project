import React from "react";
import { useDataSet } from "../../context/DataContext";
import { useFavorites } from "../../context/FavoritesContext";
import Book from "./Books/Book";
import Short from "./Shorts/Short";

function Favourites() {
  const { booksData, shortsData } = useDataSet() || {};
  const { favoriteBookIds, favoriteShortIds } = useFavorites();

  // Filter booksData and shortsData based on favorite IDs
  let favoritesBooks = booksData.filter(book => favoriteBookIds.includes(book.id));
  let favoritesShorts = shortsData.filter(short => favoriteShortIds.includes(short.id));

  return (
    <div>
      <h1>Favourites</h1>
      {favoritesBooks.length === 0 && favoritesShorts.length === 0 ? (
        <p>No favorites added yet.</p>
      ) : (
        <ul className="books">
          {favoritesBooks.map((favoritesBook) => (
            <Book key={favoritesBook.id} data={favoritesBook} />
          ))}
          {favoritesShorts.map((favoritesShort) => (
            <Short key={favoritesShort.id} data={favoritesShort} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Favourites;