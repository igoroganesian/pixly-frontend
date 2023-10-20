import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

/**
 * NavBar Component: renders navigation bar for every page on site.
 *
 * Props:
 * - resetAppState: parent function to reset application state
 *   when navigating back to home.
 * - setShowSearch: parent function to toggle search form.
 *
 * Routes:
 * - "/gallery"
 * - "/images/upload"
 */

function NavBar({ resetAppState, setShowSearch }) {

  const navigate = useNavigate();

  const handleSearchClick = (event) => {
    event.preventDefault();
    navigate('/gallery');
    setShowSearch(prevState => !prevState);
  };

  return (
    <nav className="NavBar">
      <div className="NavBar-left">
        <Link
          className="NavBar-brand"
          to="/gallery"
          onClick={resetAppState}>
          <i class="bi bi-columns-gap"></i> Pix.ly
        </Link>
      </div>
      <div className="NavBar-right">
        <Link
          className="NavBar-upload"
          to="/images/upload">Upload
        </Link>
        <Link
          className="NavBar-search"
          to="/gallery"
          onClick={handleSearchClick}>Search
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
