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
  const [portrait, setPortrait] = useState([]);

  const getPortraitPictures = () => {
    axios.get('http://localhost:5530/api/photos')
    .then(res => {
      setPortrait(res.data);
    })
    .catch(err => {
      console.log(err)
    });
  };

  useEffect(() => {
    getPortraitPictures()
  }, []);

  return (
    <div className="Faune">
      <h2>Portraits</h2>
      
      <div className="containerSlide">
        <Fade {...fadeProperties}>
          {portrait.filter(portrait => portrait.theme === 'Portrait').map((portrait, key) => {
            return(
              <div key={key}>
                <h2>{portrait.name}</h2>
                <img src={portrait.url} alt="Portrait Picture" />
                <h5>{portrait.theme}</h5>
              </div>
            )
          })}
        </Fade>
      </div>
    </div>
  )
}
