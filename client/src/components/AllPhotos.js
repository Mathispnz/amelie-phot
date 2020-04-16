import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './AllPhotos.scss';

export default function AllPhotos() {
  const [photos, setPhotos] = useState([]);

  const getAllPhotos = () => {
    axios.get(`${process.env.REACT_APP_API_URL}photos`)
    .then(res => {
      setPhotos(res.data);
    })
    .catch(err => (
      console.log(err)
    ));
  };
  
  useEffect(() => {
    getAllPhotos();
  }, []);

  return (
    <div className="allphotos">
      <h2>Éditeur</h2>

      {photos.map((photo, key) => {
        return(
          <div key={key} className="allphotos_photo">
            <Link to={`/photos/${photo._id}`}>
              <img className="allphotos_photo_img" alt="photographie" src={photo.url} />
            </Link>
          </div>
        )
      })}
    </div> 
  )
}
