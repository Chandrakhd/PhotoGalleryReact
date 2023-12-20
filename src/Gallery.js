import React, { useState, useEffect } from "react";
import axios from "axios";

const Gallery = ({ searchQuery }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        let requestUrl;
        if (searchQuery) {
          requestUrl = `https://api.unsplash.com/search/photos?query=${searchQuery}&per_page=10&client_id=${process.env.REACT_APP_SECRET_UNSPLASH}`;
        } else {
          requestUrl = `https://api.unsplash.com/search/photos?query=office&per_page=10&client_id=${process.env.REACT_APP_SECRET_UNSPLASH}`;
        }

        const response = await axios.get(requestUrl);
        setPhotos(response.data.results || response.data);
      } catch (error) {
        console.error("Error fetching photos from Unsplash:", error);
      }
    };

    fetchPhotos();
  }, [searchQuery]);

  return (
    <div className="gallery">
      {photos.map((photo) => (
        <img
          key={photo.id}
          src={
            photo.tags.includes("large") ? photo.urls.regular : photo.urls.small
          }
          alt={photo.alt_description}
          className="gallery-item"
        />
      ))}
    </div>
  );
};

export default Gallery;
