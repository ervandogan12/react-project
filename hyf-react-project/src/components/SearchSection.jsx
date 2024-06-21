import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Book from "./pages/Books/Book";

function SearchSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://stephen-king-api.onrender.com/api/books`
      );
      const data = await response.json();

      return data["data"];
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const booksData = await fetchData("books");
    const results = booksData.filter(
      (item) =>
        item.Title &&
        item.Title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    navigate("/searchResults", { state: { searchResults: results } });
    setSearchQuery("");
  };

  return (
    <form className="search-section" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchSection;
