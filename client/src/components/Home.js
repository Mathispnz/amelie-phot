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
          <img className="Home_Background_Pic" src="./pictures/picture19.jpg" />
        </div>
        <div className="each-fade">
          <img className="Home_Background_Pic" src="./pictures/picture9.jpg" />
        </div>
        <div className="each-fade">
          <img className="Home_Background_Pic" src="./pictures/picture6.jpg" />
        </div>
      </Fade>

      <div className="Home_Container">
        <h2 className="Home_Title">AMÉLIE PEINGNEZ</h2>

        <div className="Home_Text">
          <p>Bienvenue sur mon site,  Je l’ai créé pour partager avec vous ma découverte du monde. J’espère que je réussirais à vous faire voyager à travers mes yeux. <br />
          Bonne visite !</p>

          <Link className="Home_Link" to="/galerie">Galerie</Link>
        </div>
      </div>
    </div>
  )
}
