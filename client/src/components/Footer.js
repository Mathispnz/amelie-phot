import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="Footer">
      <p className="Footer_Title">Amélie Peingnez Photography</p>

      <div className="Footer_Social">
        <a className="Footer_Social_IG" href="https://www.instagram.com/coachingphotovoyage/" target="_blank" rel="noopener noreferrer">
          <img style={{width: "100%", margin: "auto", display:"block"}} src="pictures/instagram-brands.svg" alt="Instagram" />
        </a>
        <div className="Footer_Social_Line"></div>
        <Link to="/contact" className="Footer_Social_CT">Contact</Link>
      </div>
    </div>
  )
}

