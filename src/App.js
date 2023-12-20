import React, { useState } from "react";
import Gallery from "./Gallery.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

import "./App.css";

function App() {
  // handle the search
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <div className="container">
        <div className="header">
          <h1>
            <span>
              <FontAwesomeIcon className="cameraIcon" icon={faCamera} />
            </span>
            Welcome to the photo gallery
          </h1>

          <div className="input_container">
            <FontAwesomeIcon className="searchIcon" icon={faSearch} />
            <input
              type="text"
              id="searchInput"
              placeholder="Search Your Favorite Images"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>
        <div className="gallery_container">
          <div className="gallery">
            <Gallery searchQuery={searchQuery} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
