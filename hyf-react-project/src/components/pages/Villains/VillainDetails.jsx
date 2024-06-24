import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "../../../../src/App.css";

function VillainDetail() {
  const [villain, setVillain] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const numericId = Number(id);

  const fetchVillainDetails = async () => {
    try {
      const response = await fetch(
        `https://stephen-king-api.onrender.com/api/villain/${id}`
      );
      if (!response.ok) {
        setError(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setVillain(data["data"]);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchVillainDetails(id);
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return villain ? (
    <div className="book-details-container">
      <div className="book-text-details">
        <h2>Name: {villain.name}</h2>
        <ul className="villain-details">
          <li>Gender: {villain.gender || "N/A"}</li>
          <li>Status: {villain.status}</li>
          <li>Type ID: {villain.types_id}</li>
          <li>
            Created At: {new Date(villain.created_at).toLocaleDateString()}
          </li>
          <li>Notes: {villain.notes}</li>
          {villain.books.map((book, index) => (
            <li key={index}>
              Book:{" "}
              <a href={book.url} target="_blank" rel="noopener noreferrer">
                {book.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  ) : (
    <p style={{ marginTop: "50px" }}>Loading...</p>
  );
}

export default VillainDetail;
