import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Fade } from 'react-slideshow-image';
import './Slider.scss';
import BackGalerie from './BackGalerie';

const fadeProperties = {
  duration: 5000,
  transitionDuration: 1000,
  infinite: true,
  indicators: true,
  arrows: true
}

export default function Faune() {
  const [terre, setTerre] = useState([]);

  const getTerrePictures = () => {
    axios.get(`${process.env.REACT_APP_API_URL}photos`)
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
    <div className="Terre theme__padding">
      <BackGalerie />

      <h2>Terre</h2>
      
      <div className="containerSlide">
        <Fade {...fadeProperties}>
          {terre.filter(terre => terre.theme === 'Terre').map((terre, key) => {
            return(
              <div className="containerSlide_slide" key={key}>
                  <img className="containerSlide_img" src={terre.url} alt="Terre" />

                  <p className="container_des--size">
                    {terre.location}
                  </p>
                  <p className="container_description container_des--size">
                    {terre.description}
                  </p>
              </div>
            )
          })}
        </Fade>
      </div>
    </div>
  )
}
