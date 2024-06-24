import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom'; 
import Book from '../Books/Book';

function FilterResults() {
  const location = useLocation();
  const filteredBooks = location.state?.filteredBooks || [];

  return (
    <div>
      <h2 className='search-filter-title'>Filter Results</h2>
      {filteredBooks.length > 0 ? (
        <ul className="books">
          {filteredBooks.map((filteredBook) => (
            <Book key={filteredBook.id} data={filteredBook} />
          ))}
        </ul>
      ) : (
        <p>No results found. Please try a different year.</p>
      )}
    </div>
  );
}

export default FilterResults;