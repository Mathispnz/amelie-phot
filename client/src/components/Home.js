import React from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';
import { Fade } from 'react-slideshow-image';

const fadeProperties = {
  infinite: true,
  indicators: false,
  arrows: false,
  duration: 5000,
  transitionDuration: 800
}
 
export default function Home() {
  return (
    <div className="Home">
      <Fade className="Home_Background" {...fadeProperties}>
        <div className="each-fade">
          <img className="Home_Background_Pic" src="pictures/home4.jpg" alt="Background home" />
        </div>
        <div className="each-fade">
          <img className="Home_Background_Pic" src="pictures/home2.jpg" alt="Background home" />
        </div>
        <div className="each-fade">
          <img className="Home_Background_Pic" src="pictures/home3.jpg" alt="Background home" />
        </div>
      </Fade>

      <div className="Home_Container">
        <h2 className="Home_Title">AMÉLIE PEINGNEZ</h2>

        <div className="Home_Text">
          <Link className="Home_Link" to="/galerie">Galerie</Link>
        </div>

      </div>

      <a href="https://www.instagram.com/coachingphotovoyage/" target="_blank" rel="noopener noreferrer"><div className="Home_Social">
        <img src="pictures/instagram-brands.svg" alt="Instagram" />
      </div></a>
    </div>
  )
}
