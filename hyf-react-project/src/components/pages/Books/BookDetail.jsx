import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import heartSolid from "../../../assets/heart-solid.svg";
import heartRegular from "../../../assets/heart-regular.svg";
import "../../../../src/App.css";
import { useFavorites } from "../../../context/FavoritesContext";
import bookImg from "../../../assets/stepking.png";

function BookDetail() {
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const numericId = Number(id);

  const { favoriteBooks, toggleBookFavorite } = useFavorites();

  const isFavorited = favoriteBooks.some((favoriteBook) => favoriteBook.id === book?.id);

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
      {/* <img className="book-details-img" src={bookImg} alt={book.Title} /> */}

      {book.villains && Array.isArray(book.villains) && (
        <div className="flex-container">
          <div className="villains-list-container">
            <h2>Villains</h2>
            <ul>
              {book.villains.map((villain, index) => (
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
          toggleBookFavorite(book);
        }}
        style={{
          backgroundColor: "#fff",
          cursor: "pointer",
          height: "40px",
          padding: "8px",
          position: "absolute",
          top: "14vh",
          right: "10px",
          width: "40px",
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

export default BookDetail;
