import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import heartSolid from "../../../assets/heart-solid.svg";
import heartRegular from "../../../assets/heart-regular.svg";
import "../../../../src/App.css";
import { useFavorites } from "../../../context/FavoritesContext";

function ShortDetail() {
  const [short, setShort] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();


  const { favoriteShorts, toggleShortFavorite } = useFavorites();

  const isFavorited = favoriteShorts.some((favoriteShort) => favoriteShort.id === short?.id);

  const fetchShortDetails = async () => {
    try {
      const response = await fetch(
        `https://stephen-king-api.onrender.com/api/short/${id}`
      );
      if (!response.ok) {
        setError(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setShort(data["data"]);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchShortDetails(id);
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return short ? (
    <div className="book-details-container">
      <div className="book-text-details">
      <h2>Short Title: {short.title}</h2>
        <ul>
          <li>Year: {short.year}</li>
          <li>Type: {short.type}</li>
          <li>Collected In: {short.collectedIn}</li>
          <li>Originally Published In: {short.originallyPublishedIn}</li>
          <li>Type: {short.type}</li>
          <li>Notes: {short.notes}</li>
        </ul>
      </div>
      {/* <img className="book-details-img" src={bookImg} alt={book.Title} /> */}

      {short.villains && Array.isArray(short.villains) && (
        <div className="flex-container">
          <div className="villains-list-container">
            <h2>Villains</h2>
            <ul>
              {short.villains.map((villain, index) => (
                <li key={index}>
                  Name: {villain.name}, Power: {villain.power}
                  {/* Add more attributes as needed */}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <div
        className="book-image-favorite-container" 
        onClick={(e) => {
          e.preventDefault(); // Prevent link navigation
          toggleShortFavorite(short);
        }}

        style={{
          backgroundColor: '#fff',
          cursor: 'pointer',
          height: '40px',
          padding: '8px',
          position: 'absolute',
          top: '14vh',
          right: '10px',
          width: '40px',
        }}
      >
        {isFavorited ? (
          <img className="icon-favourite" src={heartSolid} alt="Favorited" />
        ) : (
          <img
            className="icon-favourite"
            src={heartRegular}
            alt="Not Favorited"
          />
        )}
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
}

export default ShortDetail;
