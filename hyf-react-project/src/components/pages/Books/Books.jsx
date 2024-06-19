import React, { useState } from "react";
import { Book } from "./Book";
import { useDataSet } from "../../../context/DataContext";

export const Books = () => {
  const { booksData } = useDataSet();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = booksData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(booksData.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <ul className="books">
        {currentItems.map((data) => (
          <Book key={data.id} data={data} />
        ))}
      </ul>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default Books;
