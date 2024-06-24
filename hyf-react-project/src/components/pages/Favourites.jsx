import React from "react";
import { useDataSet } from "../../context/DataContext";
import { useFavorites } from "../../context/FavoritesContext";
import Book from "./Books/Book";
import Short from "./Shorts/Short";

function Favourites() {

  const { favoriteBooks, favoriteShorts } = useFavorites();

 


  return (
    <div>
      <h1 className='search-filter-title'>Favourites</h1>
      {favoriteBooks.length === 0 && favoriteShorts.length === 0 ? (
        <p>No favorites added yet.</p>
      ) : (
        <ul className="books">
          {favoriteBooks.map((favoriteBook) => (
            <Book key={favoriteBook.id} data={favoriteBook} />
          ))}
          {favoriteShorts.map((favoriteShort) => (
            <Short key={favoriteShort.id} data={favoriteShort} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Favourites;