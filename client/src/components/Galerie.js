import React, { useState, useEffect } from 'react';
import './Galerie.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';

// HOOKS FOR MAPPING THROUGH IMAGES
// PAGINATION (TRAVERSY MEDIA)

export default function Galerie() {
  const [images, setImages] = useState(
    [
    {
      name: '',
      src: './pictures/picture2.jpg',
      color: 'green',
      theme: ''
    },
    {
      name: '',
      src: './pictures/picture3.jpg',
      color: '',
      theme: ''
    },
    {
      name: '',
      src: './pictures/picture4.jpg',
      color: '',
      theme: ''
    },
    {
      name: '',
      src: './pictures/picture5.jpg',
      color: 'green',
      theme: ''
    },
    {
      name: '',
      src: './pictures/picture6.jpg',
      color: 'green',
      theme: ''
    },
    {
      name: '',
      src: './pictures/picture7.jpg',
      color: '',
      theme: ''
    },
    {
      name: '',
      src: './pictures/picture8.jpg',
      color: 'green',
      theme: ''
    },
    {
      name: '',
      src: './pictures/picture9.jpg',
      color: '',
      theme: ''
    },
    {
      name: '',
      src: './pictures/picture10.jpg',
      color: '',
      theme: ''
    },
    {
      name: '',
      src: './pictures/picture11.jpg',
      color: '',
      theme: ''
    },
    {
      name: '',
      src: './pictures/picture12.jpg',
      color: '',
      theme: ''
    },
    {
      name: '',
      src: './pictures/picture13.jpg',
      color: '',
      theme: ''
    },
    {
      name: '',
      src: './pictures/picture14.jpg',
      color: '',
      theme: ''
    },
    {
      name: '',
      src: './pictures/picture15.jpg',
      color: '',
      theme: ''
    },
    {
      name: '',
      src: './pictures/picture16.jpg',
      color: 'green',
      theme: ''
    },
    {
      name: '',
      src: './pictures/picture17.jpg',
      color: '',
      theme: ''
    },
    {
      name: '',
      src: './pictures/picture18.jpg',
      color: 'green',
      theme: ''
    },
    {
      name: '',
      src: './pictures/picture19.jpg',
      color: '',
      theme: ''
    },
    {
      name: '',
      src: './pictures/picture20.jpg',
      color: '',
      theme: ''
    },
    {
      name: '',
      src: './pictures/picture21.jpg',
      color: 'green',
      theme: ''
    },
    {
      name: '',
      src: './pictures/picture22.jpg',
      color: 'green',
      theme: ''
    },
    ]
  )
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage] = useState(9);

  // Get current images
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  // Pagination
  const pageNumbers = [];
  const totalImages = images.length;

  for (let i = 1; i <= Math.ceil(totalImages / imagesPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = pageNumbers => setCurrentPage(pageNumbers);

  const getAllPhotos = () => {
    axios.get('http://localhost:5530/api/photos')
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
            <img className="Galerie-Theme-One-Image" src={images[1].src} />
            <h4 className="Galerie-Theme-One-Text">Faune</h4>
          </div>
        </Link>
        <Link to="/flore">
          <div className="Galerie-Theme-One">
            <img className="Galerie-Theme-One-Image" src={images[7].src} />
            <h4 className="Galerie-Theme-One-Text">Flore</h4>
          </div>
        </Link>
        <Link to="/terre">
          <div className="Galerie-Theme-One">
            <img className="Galerie-Theme-One-Image" src={images[6].src} />
            <h4 className="Galerie-Theme-One-Text">Terre</h4>
          </div>
        </Link>
        <Link to="/mer">
          <div className="Galerie-Theme-One">
            <img className="Galerie-Theme-One-Image" src={images[12].src} />
            <h4 className="Galerie-Theme-One-Text">Mer</h4>
          </div>
        </Link>
        <Link to="/ville">
          <div className="Galerie-Theme-One">
            <img className="Galerie-Theme-One-Image" src={images[2].src} />
            <h4 className="Galerie-Theme-One-Text">Ville</h4>
          </div>
        </Link>
        <Link to="/portrait">
          <div className="Galerie-Theme-One">
            <img className="Galerie-Theme-One-Image" src={images[2].src} />
            <h4 className="Galerie-Theme-One-Text">Portrait</h4>
          </div>
        </Link>
      </div>

      {/* <ul>
        {currentImages.map((image, key) => (
          <li key={key}>
            <img alt="galerie-img" className='Galerie-Pic' src={image.src} />
          </li>
        ))}
      </ul> */}

      {/* <nav className="Galerie-pageCont">
        <ul>
          {pageNumbers.map(number => (
            <li key={number}>
              <a onClick={() => {paginate(number)}} href="#">
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav> */}

      {/* <div>
        <h4>Green images</h4>
        <ul>
          {images.map((image, key) => (
            image.color === 'green' && <li key={key}>
              <img alt="galerie-img" className='Galerie-Pic' src={image.src} />
            </li>
          ))}
        </ul>
      </div> */}

    </div>
  )
}
