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
  const [flore, setFlore] = useState([]);

  const getFlorePictures = () => {
    axios.get('http://localhost:5530/api/photos')
    .then(res => {
      setFlore(res.data);
    })
    .catch(err => {
      console.log(err)
    });
  };

  useEffect(() => {
    getFlorePictures()
  }, []);

  return (
    <div className="Faune">
      <h2>Flore</h2>
      
      <div className="containerSlide">
        <Fade {...fadeProperties}>
          {flore.filter(flore => flore.theme === 'Flore').map((flore, key) => {
            return(
              <div key={key}>
                <h2>{flore.name}</h2>
                <img src={flore.url} alt="Flore Picture" />
                <h5>{flore.theme}</h5>
              </div>
            )
          })}
        </Fade>
      </div>
    </div>
  )
}
