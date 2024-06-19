import React, { useState } from 'react';
import { useDataSet } from '../context/DataContext'; // Adjust the path as necessary
import Book from '../components/pages/Books/Book';
import { useNavigate } from 'react-router-dom'; // Ensure this path is correct

function SearchSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]); // Add this line to define searchResults
  const { booksData } = useDataSet();
  const navigate = useNavigate(); 

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const results = booksData.filter(item =>
      item.Title && item.Title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    navigate('/searchResults', { state: { searchResults: results } });
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
      <ul className="books">
        {searchResults.map((searchResult) => (
          <Book key={searchResult.id} data={searchResult} />
        ))}
      </ul>
    </form>
  );
}

export default SearchSection;