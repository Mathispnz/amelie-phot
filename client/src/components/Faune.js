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
    <div className="Faune">
      <h2>Faune</h2>
      
      <div className="containerSlide">
        <Fade {...fadeProperties}>
          {faunes.filter(faune => faune.theme === 'Faune').map((faune, key) => {
            return(
              <div key={key}>
                <h2>{faune.name}</h2>
                <img src={faune.url} alt="Faune Picture" />
                <h5>{faune.theme}</h5>
              </div>
            )
          })}
        </Fade>
      </div>
    </div>
  )
}
