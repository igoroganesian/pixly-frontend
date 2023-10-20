import { Routes, Route, Navigate } from 'react-router-dom';
import Gallery from "./Gallery";
import ImageDetail from "./ImageDetail";
import UploadForm from "./UploadForm";

/** RoutesList: routes to all site paths.
 *
 *
 * Props:
 *  - images: array of objects [{image_data:.., url:..}, ...]
 *  - handleUpload: parent function for upload image form
 *  - handleSearch: parent function to update search term
 *  - showSearch: parent function to toggle search form
 *  - currSearchTerm
 *
 * State: none
 *
 * App -> RoutesList -> { Gallery, ImageDetail, UploadForm}
 *
 * Routes:
 *  - Gallery (/gallery)
 *  - ImageDetail (/gallery/:id)
 *  - UploadForm (/images/upload)
 *  - Path not found -> redirects to /gallery
 * */

function RoutesList({ handleUpload, images, handleSearch, showSearch, currSearchTerm }) {
    return (
        <Routes>
            <Route
                path="/gallery"
                element={<Gallery
                            images={images}
                            handleSearch={handleSearch}
                            showSearch={showSearch}
                            currSearchTerm={currSearchTerm}
                        />}
            />
            <Route
                path="/gallery/:id"
                element={<ImageDetail images={images} />}
            />
            <Route
                path="/images/upload"
                element={<UploadForm handleUpload={handleUpload} />}
            />
            <Route path="*" element={<Navigate to="/gallery" />} />
        </Routes>
    );
}

export default RoutesList;