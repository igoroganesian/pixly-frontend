import { Navigate, useParams } from "react-router";
import ImageCard from "./ImageCard";
import ExifData from "./ExifData";
import "./ImageDetail.css";

/**
 * ImageDetail Component
 *
 * Displays a specific image and its EXIF data.
 *
 * Props:
 *  - images: array of image objects [ { image_data:..., url:... }, ... ]
 */

function ImageDetail({ images }) {
    const { id } = useParams();

    const image = images.find(img => +img.image_data.id === +id);

    if (!image) {
        return <Navigate to="/gallery" />;
    }

    return (
        <div className="ImageDetail">
            <ImageCard image={image} />
            <div className="ImageDetail-exifdata">
                <ExifData image={image} />
            </div>
        </div>
    );
}

export default ImageDetail;
