import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import PixlyApi from './api';
import RoutesList from "./RoutesList";
import NavBar from "./NavBar";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [imagesData, setImagesData] = useState(null);
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
    return <p>Loading...</p>;
  }

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar resetAppState={() => setCurrSearchTerm("")} />
        {imagesData &&
          <RoutesList
            handleUpload={handleUpload}
            images={imagesData}
            handleSearch={setCurrSearchTerm}
            currSearchTerm={currSearchTerm}
            setCurrSearchTerm={setCurrSearchTerm}
          />
        }
      </div>
    </BrowserRouter>
  );
}

export default App;
