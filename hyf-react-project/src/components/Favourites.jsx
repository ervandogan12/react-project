import React from "react";
import { useDataSet } from "../context/DataContext";
import { useFavorites } from "../context/FavoritesContext";
import Book from "./pages/Book";

function Favourites() {
  const { dataSet } = useDataSet() || {};

  const { favoriteIds } = useFavorites();

  const favorites = (dataSet || []).filter((data) =>
    favoriteIds.includes(data.id)
  );

  return (
    <div>
      <h1>Favourites</h1>
      <ul className="books">
        {favorites.map((favorite) => (
          <Book key={favorite.id} data={favorite} />
        ))}
      </ul>
    </div>
  );
}

export default Favourites;
