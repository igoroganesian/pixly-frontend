import React from "react";
import ImageList from "./ImageList";
import SearchForm from "./SearchForm";
import "./Gallery.css";

/**
 * Gallery Component
 *
 * Displays an image gallery with a search functionality.
 *
 * Props:
 *  - images: array of image objects [ { image_data:..., url:... }, ... ]
 *  - handleSearch: parent function to set the search term state.
 *  - showSearch: parent function to toggle search form.
 *  - currSearchTerm: current search term from input.
 *
 * RoutesList -> Gallery -> { SearchForm, ImageList }
 */

function Gallery({ images, handleSearch, showSearch, currSearchTerm }) {
    return (
        <div className="Gallery">
            <div className="Gallery-header">
                {showSearch && (
                    <SearchForm
                        handleSearch={handleSearch}
                        currSearchTerm={currSearchTerm}
                    />
                )}
            </div>
            <ImageList images={images} />
        </div>
    );
}

export default Gallery;
