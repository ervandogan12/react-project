import React, {useState} from "react";
import { Short } from "./Short";
import { useDataSet } from "../../../context/DataContext";

export const Shorts = () => {
  const { shortsData } = useDataSet();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(15);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = shortsData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(shortsData.length / itemsPerPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <ul className="books">
        {currentItems.map((data) => (
          <Short key={data.id} data={data} />
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

export default Shorts;
