import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

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
    <form
      className="filter-section"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "2rem",
      }}
      onSubmit={handleSubmit}
    >
      <select
        value={selectedYear}
        style={{ fontSize: "1.2rem" }}
        onChange={handleYearChange}
      >
        <option value="">Select a year</option>
        {[...Array(51).keys()].map((i) => (
          <option key={i} value={1974 + i}>
            {1974 + i}
          </option>
        ))}
      </select>
      <button type="submit" style={{ fontSize: "1.3rem" }}>
        Filter
      </button>
    </form>
  );
}

export default FilterSection;
