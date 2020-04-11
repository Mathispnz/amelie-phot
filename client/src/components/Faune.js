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
  pauseOnHover: true,
  arrows: true
}

export default function Faune() {
  const [faunes, setFaunes] = useState([]);

  const getFaunePictures = () => {
    axios.get(`${process.env.REACT_APP_API_URL}photos`)
    .then(res => {
      setFaunes(res.data);
    })
    .catch(err => {
      console.log(err)
    });
  };

  useEffect(() => {
    getFaunePictures()
  }, []);

  return (
    <div className="Faune theme__padding">
      <BackGalerie />

      <h2>Faune</h2>
      
      <div className="containerSlide">
        <Fade {...fadeProperties}>
          {faunes.filter(faune => faune.theme === 'Faune').map((faune, key) => {
            return(
              <div className="containerSlide_slide" key={key}>
                  <img className="containerSlide_img" src={faune.url} alt="Faune" />

                  <p className="container_des--size">
                  {faune.location}
                  </p>
                  <p className="container_description container_des--size">
                    {faune.description}
                  </p>
              </div>
            )
          })}
        </Fade>
      </div>
    </div>
  )
}
