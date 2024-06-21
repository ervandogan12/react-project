import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchSection from "./SearchSection";
import { useDataSet } from "../context/DataContext";
import FilterSection from "./FilterSection";

function Nav() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const { handleCategoryClick } = useDataSet();
  const navigate = useNavigate();

  const toggleDropdown = () => setIsDropdownVisible(!isDropdownVisible);

  const handleBooksClick = () => {
    handleCategoryClick("books");
  };

  return (
    <nav>
      <ul className="nav-items">
        <li onClick={() => navigate("/")}>
          <i className="fas fa-home"></i>
        </li>
        <li onClick={toggleDropdown}>
          Browse
          {isDropdownVisible && (
            <ul className="dropdown">
              <li>
                <Link to="/browse/books" onClick={handleBooksClick}>
                  Books
                </Link>
              </li>
              <li>
                <Link
                  to="/browse/shorts"
                  onClick={() => handleCategoryClick("shorts")}
                >
                  Shorts
                </Link>
              </li>
              <li>
                <Link
                  to="/browse/villains"
                  onClick={() => handleCategoryClick("villains")}
                >
                  Villians
                </Link>
              </li>
              <li>
                <Link to="/favourites">Favourites</Link>
              </li>
            </ul>
          )}
        </li>

        <li>
          <SearchSection />
        </li>

        <li>
          <FilterSection />
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
