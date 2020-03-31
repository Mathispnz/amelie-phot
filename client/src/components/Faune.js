import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Fade } from 'react-slideshow-image';
import './Slider.scss';
import BackGalerie from './BackGalerie';

const fadeProperties = {
  duration: 3000,
  transitionDuration: 800,
  infinite: true,
  indicators: true,
  arrows: true
}

export default function Faune() {
  const [faunes, setFaunes] = useState([]);

  const getFaunePictures = () => {
    axios.get('http://localhost:5530/api/photos')
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
                {faunes.location}
                </p>
                <p className="container_description container_des--size">
                  {faunes.description}
                </p>
              </div>
            )
          })}
        </Fade>
      </div>
    </div>
  )
}
