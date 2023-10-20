import "./ImageCard.css";

/**
 * ImageCard Component
 *
 * A visual component that displays an image.
 *
 * Props:
 *  - image: object { img_data: { caption: string, ... }, url: string }
 *
 * Used in:
 *  - ImageList
 *  - ImagePage
 */

function ImageCard({ image }) {
    const { caption } = image.image_data;

    return (
        <div className="ImageCard">
            <img src={image.url} alt={caption} />
        </div>
    );
}

export default ImageCard;
