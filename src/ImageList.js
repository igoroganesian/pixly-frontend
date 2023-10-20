import React from "react";
import ImageCard from "./ImageCard";
import { Link } from "react-router-dom";
import "./ImageList.css";

/**
 * ImageList Component
 *
 * Renders a list of ImageCards.
 *
 * Props:
 *  - images: array of image objects [ { image_data:..., url:... }, ... ]
 */

function ImageList({ images }) {
    return (
        <div className="ImageList">
            {images.map(image => (
                <Link key={image.image_data.id}
                    to={`/gallery/${image.image_data.id}`
                    }>
                    <ImageCard image={image} />
                </Link>
            ))}
        </div>
    );
}

export default ImageList;
