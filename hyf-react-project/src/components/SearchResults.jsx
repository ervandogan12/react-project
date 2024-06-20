import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation hook
import Book from '../components/pages/Books/Book';

function SearchResults() {
  const location = useLocation();
  const searchResults = location.state?.searchResults || [];

  return (
    <div>
      <h2>Search Results</h2>
      {searchResults.length > 0 ? (
        <ul className="books">
          {searchResults.map((searchResult) => (
            <Book key={searchResult.id} data={searchResult} />
          ))}
        </ul>
      ) : (
        <p>No results found. Please try a different search.</p>
      )}
    </div>
  );
}

export default SearchResults;