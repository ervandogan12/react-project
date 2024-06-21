import React from "react";
import { Link } from "react-router-dom";
import heartSolid from "../../../assets/heart-solid.svg";
import heartRegular from "../../../assets/heart-regular.svg";
import { useFavorites } from "../../../context/FavoritesContext";
import bookImg from '../../../assets/stepking.png';

export const Book = ({ data }) => {
  const { favoriteBooks, toggleBookFavorite } = useFavorites();

  const isFavorited = favoriteBooks.some(book => book.id === data.id);

  return (
    <li className="book-list">
      <Link to={`/api/books/${data.id}`}>
        <div className="book">
          <div className="book-image-container">
            <img className="book-img" src={bookImg} alt={data.Title} />
            <div
              className="book-image-favorite-container"
              onClick={(e) => {
                e.preventDefault(); // Prevent link navigation
                toggleBookFavorite(data);
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
          <span className="book-year">{data.Year}</span>
        </div>
      </Link>
    </li>
  );
};

export default Book;
