/**
 * ExifData Component
 *
 * A visual component that displays image metadata (EXIF data).
 *
 * Props:
 *  - image: object { image_data: { ... }, url: string }
 *
 */

function ExifData({ image }) {
    const { image_data: imageData } = image;

    // Helper function to format keys by removing underscores
    const formatKey = key => key.split("_").join(" ");

    return (
        <div className="ExifData">
            {Object.entries(imageData).map(([key, value]) => (
                value && <p key={key}><b>{formatKey(key)}</b>: {value}</p>
            ))}
        </div>
    );
}

export default ExifData;
