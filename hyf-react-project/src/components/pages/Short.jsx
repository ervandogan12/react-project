import React from "react";
import { Link } from "react-router-dom";
import heartSolid from "../../assets/heart-solid.svg";
import heartRegular from "../../assets/heart-regular.svg";
import { useFavorites } from "../../context/FavoritesContext";

export const Short = ({ data }) => {
  const { favoriteIds, toggleFavorite } = useFavorites();

  const isFavorited = favoriteIds.includes(data.id);

  return (
    <li className="product-list">
      <Link to={`/api/books/${data.id}`}>
        <div className="product">
          <div className="product-image-container">
            <img className="product-img" src={data.image} alt={data.Title} />
            <div
              className="product-image-favorite-container"
              onClick={(e) => {
                e.preventDefault(); // Prevent link navigation
                toggleFavorite(data.id);
              }}
            >
              {isFavorited ? (
                <img
                  className="icon-favourite"
                  src={heartSolid}
                  alt="Favorited"
                />
              ) : (
                <img
                  className="icon-favourite"
                  src={heartRegular}
                  alt="Not Favorited"
                />
              )}
            </div>
          </div>
          <span className="product-title">{data.title}</span>
        </div>
      </Link>
    </li>
  );
};

export default Short;
