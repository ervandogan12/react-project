import React, {useState} from "react";
import { Link } from "react-router-dom";
import heartSolid from "../../../assets/heart-solid.svg"
import heartRegular from "../../../assets/heart-regular.svg";
import { useFavorites } from "../../../context/FavoritesContext";
import shortImg from '../../../assets/shortImg.png';


export const Short = ({ data }) => {
  const { favoriteShorts, toggleShortFavorite } = useFavorites();


  const isFavorited = favoriteShorts.some(short => short.id === data.id);

  return (
    <li className="book-list">
      <Link to={`/api/shorts/${data.id}`}>
        <div className="book">
          <div className="book-image-container">
            <img className="book-img" src={shortImg} alt={data.Title} />
            <div
              className="book-image-favorite-container"
              onClick={(e) => {
                e.preventDefault(); // Prevent link navigation
                toggleShortFavorite(data);
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
          <span className="book-title">{data.title}</span>
          <span className="book-title">{data.year}</span>
        </div>
      </Link>
    </li>
  );
};

export default Short;
