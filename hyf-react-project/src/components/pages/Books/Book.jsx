import React from "react";
import { Link } from "react-router-dom";
import heartSolid from "../../../assets/heart-solid.svg";
import heartRegular from "../../../assets/heart-regular.svg";
import { useFavorites } from "../../../context/FavoritesContext";
import bookImg from '../../../assets/stepking.png';

export const Book = ({ data }) => {
  const { favoriteBookIds, toggleBookFavorite } = useFavorites();

  const isFavorited = favoriteBookIds.includes(data.id);

  return (
    <li className="book-list">
      <Link to={`/api/books/${data.id}`}>
        <div className="book">
          <div className="product-image-container">
            <img className="book-img" src={bookImg} alt={data.Title} />
            <div
              className="book-image-favorite-container"
              onClick={(e) => {
                e.preventDefault(); // Prevent link navigation
                toggleBookFavorite(data.id);
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
          <span className="book-title">{data.Title}</span>
        </div>
      </Link>
    </li>
  );
};

export default Book;
