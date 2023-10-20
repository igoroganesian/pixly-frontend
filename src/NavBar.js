import React from "react";
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

  const handleSearchClick = (event) => {
    event.preventDefault();
    setShowSearch(prevState => !prevState);
  };

  return (
    <nav className="NavBar">
      <div className="NavBar-left">
        <a className="NavBar-brand" href="/gallery" onClick={resetAppState}>Pix.ly</a>
      </div>
      <div className="NavBar-right">
        <a className="NavBar-upload" href="/images/upload">Upload</a>
        <a className="NavBar-search" href="/#" onClick={handleSearchClick}>Search</a>
      </div>
    </nav>
  );
}

export default NavBar;
