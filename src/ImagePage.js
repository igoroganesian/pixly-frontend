import { Navigate, useParams } from "react-router";
import ImageCard from "./ImageCard";
import ExifData from "./ExifData";

/**
 * ImagePage Component
 *
 * Displays a specific image and its EXIF data.
 *
 * Props:
 *  - images: array of image objects [ { image_data:..., url:... }, ... ]
 */

function ImagePage({ images }) {
    const { id } = useParams();

    const image = images.find(img => +img.image_data.id === +id);

    if (!image){
        return <Navigate to="/gallery" />;
    }

    return (
        <div className="ImagePage">
            <ImageCard image={image} />
            <ExifData image={image} />
        </div>
    );
}

export default ImagePage;
