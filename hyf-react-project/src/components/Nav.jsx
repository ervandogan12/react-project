import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchSection from "./SearchSection";
import { useDataSet } from "../context/DataContext";

function Nav() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const { handleCategoryClick } = useDataSet();
  const navigate = useNavigate();

  const toggleDropdown = () => setIsDropdownVisible(!isDropdownVisible);
  return (
    <nav>
      <ul className="nav-items">
        <li>
          <button onClick={() => navigate("/")}>Back to Home</button>
        </li>
        <li onClick={toggleDropdown}>
          Browse
          {isDropdownVisible && (
            <ul className="dropdown">
              <li>
                <Link
                  to="/browse/books"
                  onClick={() => handleCategoryClick("books")}
                >
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
            </ul>
          )}
        </li>
        <li>
          <Link to="/favourites">Favourites</Link>
        </li>
        <li>
          <SearchSection />
        </li>{" "}
        {/* Include the search section here */}
      </ul>
    </nav>
  );
}

export default Nav;
