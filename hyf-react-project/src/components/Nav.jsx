import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchSection from "./pages/Search/SearchSection";
import { useDataSet } from "../context/DataContext";
import FilterSection from "./pages/Filter/FilterSection";
import { useAuth } from "../context/AuthContext";
import ThemeSwitch from "./ThemeSwitch";

function Nav() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const { handleCategoryClick } = useDataSet();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { logout } = useAuth();

  const toggleDropdown = () => setIsDropdownVisible(!isDropdownVisible);

  const handleBooksClick = () => {
    handleCategoryClick("books");
  };

  const handleLogout = () => {
    logout();
    setMessage("Logout successful");
    navigate("/login");
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
        <li>
          <ThemeSwitch />
        </li>
        <li onClick={handleLogout}>
          <i style={{marginTop:"8px", marginRight:"1.2rem"}} className="fas fa-sign-out-alt"></i>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
