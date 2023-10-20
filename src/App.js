import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import PixlyApi from './api';
import RoutesList from "./RoutesList";
import NavBar from "./NavBar";
import "./App.css";

/**
 * App Component
 *
 * The main component of the Pix.ly application. Initializes and manages the state
 * for image data, loading state, search visibility, and current search term. Also
 * provides an interface for fetching images from the API, uploading images,
 * and resetting the app state. Navigation is handled by the BrowserRouter.
 *
 * State:
 *  - isLoading: tracks if the application is in a loading state.
 *  - imagesData: array of images fetched from the PixlyApi.
 *  - showSearch: toggles visibility of the search form.
 *  - currSearchTerm: current search term to filter images.
 *
 * Props:
 *  - None
 *
 * App -> NavBar
 * App -> RoutesList
 */


function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [imagesData, setImagesData] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [currSearchTerm, setCurrSearchTerm] = useState("");

  useEffect(function loadImageUrls() {
    async function fetchUrls() {
      setIsLoading(true);
      try {
        const urls = await PixlyApi.getImagesWithUrlsOptionalSearch(
          currSearchTerm || null
          );
        setImagesData(urls);
      } catch (err) {
        console.error("Problem fetching", err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchUrls();
  }, [currSearchTerm]);

  async function handleUpload({ file, caption }) {
    const data = new FormData();
    data.append('file', file);
    data.append('caption', caption);

    try {
      const [newImage] = await PixlyApi.addNewImage(data);
      setImagesData(images => ([newImage, ...images]));
    } catch (err) {
      console.error(err);
    }
  }

  if (isLoading) {
    return <p style={{margin: '1em'}}>Loading...</p>;
  }

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar resetAppState={() => setCurrSearchTerm("")}
                setShowSearch={setShowSearch} />
        {imagesData &&
          <RoutesList
            handleUpload={handleUpload}
            images={imagesData}
            handleSearch={setCurrSearchTerm}
            currSearchTerm={currSearchTerm}
            setCurrSearchTerm={setCurrSearchTerm}
            showSearch={showSearch}
            setShowSearch={setShowSearch}
          />
        }
      </div>
    </BrowserRouter>
  );
}

export default App;
