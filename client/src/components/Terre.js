import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Fade } from 'react-slideshow-image';

const fadeProperties = {
  duration: 3000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}

export default function Faune() {
  const [terre, setTerre] = useState([]);

  const getTerrePictures = () => {
    axios.get('http://localhost:5530/api/photos')
    .then(res => {
      setTerre(res.data);
    })
    .catch(err => {
      console.log(err)
    });
  };

  useEffect(() => {
    getTerrePictures()
  }, []);

  return (
    <div className="Faune">
      <h2>Terre</h2>
      
      <div className="containerSlide">
        <Fade {...fadeProperties}>
          {terre.filter(terre => terre.theme === 'Terre').map((terre, key) => {
            return(
              <div key={key}>
                <h2>{terre.name}</h2>
                <img src={terre.url} alt="Terre Picture" />
                <h5>{terre.theme}</h5>
              </div>
            )
          })}
        </Fade>
      </div>
    </div>
  )
}
