import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

export default function Navbar() {
  return (
    <div className="Navbar">
      <Link className="Navbar-Link" to="/">Amélie Peingnez</Link>
      <Link className="Navbar-Link" to="/galerie">Galerie</Link>
      <Link className="Navbar-Link" to="/destinations">Destinations</Link>
      <Link className="Navbar-Link" to="/about">À propos</Link>
      <Link className="Navbar-Link" to="/contact">Contact</Link>
    </div>
  )
}
