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
  const [mer, setMer] = useState([]);

  const getMerPictures = () => {
    axios.get('http://localhost:5530/api/photos')
    .then(res => {
      setMer(res.data);
    })
    .catch(err => {
      console.log(err)
    });
  };

  useEffect(() => {
    getMerPictures()
  }, []);

  return (
    <div className="Faune">
      <h2>Mer</h2>
      
      <div className="containerSlide">
        <Fade {...fadeProperties}>
          {mer.filter(mer => mer.theme === 'Mer').map((mer, key) => {
            return(
              <div key={key}>
                <h2>{mer.name}</h2>
                <img src={mer.url} alt="Mer Picture" />
                <h5>{mer.theme}</h5>
              </div>
            )
          })}
        </Fade>
      </div>
    </div>
  )
}
