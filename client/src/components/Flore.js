import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Fade } from 'react-slideshow-image';
import './Slider.scss';
import BackGalerie from './BackGalerie';

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
    <div className="Flore theme__padding">
      <BackGalerie />

      <h2>Flore</h2>
      
      <div className="containerSlide">
        <Fade {...fadeProperties}>
          {flore.filter(flore => flore.theme === 'Flore').map((flore, key) => {
            return(
              <div className="containerSlide_slide" key={key}>
                <img className="containerSlide_img" src={flore.url} alt="Flore" />

                <p className="container_des--size">
                  {flore.location}
                </p>
                <p className="container_description container_des--size">
                  {flore.description}
                </p>
              </div>
            )
          })}
        </Fade>
      </div>
    </div>
  )
}
