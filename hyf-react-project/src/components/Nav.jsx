import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchSection from "./SearchSection";
import { useDataSet } from "../context/DataContext";
import FilterSection from "./FilterSection";
import { useAuth } from "../context/AuthContext";
function Nav() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const { handleCategoryClick } = useDataSet();
  const navigate = useNavigate();
  const { logout } = useAuth(); // Assuming useAuth() provides logout method

  const toggleDropdown = () => setIsDropdownVisible(!isDropdownVisible);

  const handleBooksClick = () => {
    handleCategoryClick("books");
  };

  const handleLogout = () => {
    logout(); // Call the logout method from your authProvider
    navigate('/'); // Optionally redirect user to login page
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
                <Link to="/browse/shorts" onClick={() => handleCategoryClick("shorts")}>
                  Shorts
                </Link>
              </li>
              <li>
                <Link to="/browse/villains" onClick={() => handleCategoryClick("villains")}>
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
        <li onClick={handleLogout}>
        <i className="fas fa-sign-out-alt"></i>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
