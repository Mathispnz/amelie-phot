import React, { useState, useEffect } from 'react';
import './Galerie.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';

// HOOKS FOR MAPPING THROUGH IMAGES
// PAGINATION (TRAVERSY MEDIA)

export default function Galerie() {
  const [images] = useState(
    [
      {
        src: 'pictures/faune.jpg',
      },
      {
        src: 'pictures/flore.jpg',
      },
      {
        src: 'pictures/terre.jpg',
      },
      {
        src: 'pictures/mer.jpg',
      }
    ]
  )

  const getAllPhotos = () => {
    axios.get(`${process.env.REACT_APP_API_URL}photos`)
    .then(res => {
      // setImages(res.data);
    })
    .catch(err => (
      console.log(err)
    ));
  }

  useEffect(() => {
    getAllPhotos();
  }, [])

  return (
    <div className='Galerie'>
      <h2>Ma galerie</h2>

      <div className="Galerie-Theme">
        <Link to="/faune">
          <div className="Galerie-Theme-One">
            <img className="Galerie-Theme-One-Image" src={images[0].src} alt="Faune" />
            <h4 className="Galerie-Theme-One-Text">Faune</h4>
          </div>
        </Link>
        <Link to="/flore">
          <div className="Galerie-Theme-One">
            <img className="Galerie-Theme-One-Image" src={images[1].src} alt="Flore" />
            <h4 className="Galerie-Theme-One-Text">Flore</h4>
          </div>
        </Link>
        <Link to="/terre">
          <div className="Galerie-Theme-One">
            <img className="Galerie-Theme-One-Image" src={images[2].src} alt="Terre" />
            <h4 className="Galerie-Theme-One-Text">Terre</h4>
          </div>
        </Link>
        <Link to="/mer">
          <div className="Galerie-Theme-One">
            <img className="Galerie-Theme-One-Image" src={images[3].src} alt="Mer" />
            <h4 className="Galerie-Theme-One-Text">Mer</h4>
          </div>
        </Link>
      </div>
    </div>
  )
}
