import { Routes, Route, Navigate } from 'react-router-dom';
import Gallery from "./Gallery";
import ImagePage from "./ImagePage";
import UploadImageForm from "./UploadImageForm";

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
 * State:none
 *
 * App -> RoutesList -> { Gallery, ImagePage, UploadImageForm}
 *
 * Routes:
 *  - Gallery (/gallery)
 *  - ImagePage (/gallery/:id)
 *  - UploadImageForm (/images/upload)
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
                element={<ImagePage images={images} />}
            />
            <Route
                path="/images/upload"
                element={<UploadImageForm handleUpload={handleUpload} />}
            />
            <Route path="*" element={<Navigate to="/gallery" />} />
        </Routes>
    );
}

export default RoutesList;