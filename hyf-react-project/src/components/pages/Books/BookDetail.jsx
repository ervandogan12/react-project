import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import heartSolid from "../../../assets/heart-solid.svg";
import heartRegular from "../../../assets/heart-regular.svg";
import "../../../../src/App.css";
import { useFavorites } from "../../../context/FavoritesContext";
import { useAuth } from "../../../context/AuthContext";

function BookDetail() {
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const { isAuthenticated } = useAuth();

  const { favoriteBooks, toggleBookFavorite } = useFavorites();

  const isFavorited = favoriteBooks.some(
    (favoriteBook) => favoriteBook.id === book?.id
  );

  const fetchBookDetails = async () => {
    try {
      const response = await fetch(
        `https://stephen-king-api.onrender.com/api/book/${id}`
      );
      if (!response.ok) {
        setError(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setBook(data["data"]);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchBookDetails(id);
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleFavoriteClick = (e) => {
    e.preventDefault();

    if (!isAuthenticated) {
      navigate("/login");
      alert("Please log in to add favorites.");
      return;
    }
    toggleBookFavorite(book);
  };
  return book ? (
    <div className="book-details-container">
      <div className="book-text-details">
        <h2>Book Title: {book.Title}</h2>
        <ul>
          <li>Year: {book.Year}</li>
          <li>Pages: {book.Pages}</li>
          <li>Series: {book.Publisher}</li>
          <li>ISBN: {book.ISBN}</li>
          <li>Notes: {book.Notes.join(", ")}</li>
        </ul>
      </div>

      {book.villains && Array.isArray(book.villains) && (
        <div className="flex-container">
          <div className="villains-list-container">
            <h2>Villains</h2>
            <ul>
              {book.villains.map((villain, index) => (
                <li key={index}>
                  Name: {villain.name}, Power: {villain.power}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <div
        className="book-details-image-favorite-container"
        onClick={(e) => {
          e.preventDefault();
          handleFavoriteClick(e);
        }}
      >
        {isFavorited ? (
          <img
            className="icon-details-favourite"
            src={heartSolid}
            alt="Favorited"
          />
        ) : (
          <img
            className="icon-details-favourite"
            src={heartRegular}
            alt="Not Favorited"
          />
        )}
      </div>
    </div>
  ) : (
    <p style={{ marginTop: "50px" }}>Loading...</p>
  );
}

export default BookDetail;
