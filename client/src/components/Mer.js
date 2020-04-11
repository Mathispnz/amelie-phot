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
  const [mer, setMer] = useState([]);

  const getMerPictures = () => {
    axios.get(`${process.env.REACT_APP_API_URL}photos`)
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
    <div className="Mer theme__padding">
      <BackGalerie />

      <h2>Mer</h2>
      
      <div className="containerSlide">
        <Fade {...fadeProperties}>
          {mer.filter(mer => mer.theme === 'Mer').map((mer, key) => {
            return(
              <div className="containerSlide_slide" key={key}>
                <img className="containerSlide_img" src={mer.url} alt="Mer" />

                <p className="container_des--size">
                  {mer.location}
                </p>
                <p className="container_description container_des--size">
                  {mer.description}
                </p>
              </div>
            )
          })}
        </Fade>
      </div>
    </div>
  )
}
