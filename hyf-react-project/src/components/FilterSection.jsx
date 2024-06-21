import React, { useState } from "react";
import { useDataSet } from "../context/DataContext";
import { useNavigate } from "react-router-dom";
import Book from "./pages/Books/Book";

function FilterSection() {
  const [selectedYear, setSelectedYear] = useState("");

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

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const booksData = await fetchData("books");

    const filtered = booksData.filter(
      (book) => book.Year.toString() === selectedYear
    );

    navigate("/filterResults", { state: { filteredBooks: filtered } });
    setSelectedYear("Select a year");
  };

  return (
    <form className="filter-section" onSubmit={handleSubmit}>
      <select value={selectedYear} onChange={handleYearChange}>
        <option value="">Select a year</option>
        {[...Array(51).keys()].map((i) => (
          <option key={i} value={1974 + i}>
            {1974 + i}
          </option>
        ))}
      </select>
      <button type="submit">Filter</button>
    </form>
  );
}

export default FilterSection;
