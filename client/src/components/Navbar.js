import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar_Cont">
        <div className="Navbar_Left">
          <Link className="Navbar-Link Link--Bold" to="/">AMÉLIE PEINGNEZ</Link>
        </div>
        <div className="Navbar_Right"> 
          <Link className="Navbar-Link" to="/galerie">Galerie</Link>
          <Link className="Navbar-Link" to="/destinations">Destinations</Link>
          <Link className="Navbar-Link" to="/about">À propos</Link>
          <Link className="Navbar-Link" to="/contact">Contact</Link>
          <Link className="Navbar-Link" to="/add">Add Pic</Link>
        </div>
      </div>
    </div>
  )
}
