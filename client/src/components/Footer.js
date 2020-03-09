import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="Footer">
      Amélie Peingnez Photography<br />
      <Link to="/login">Connect as admin</Link>
    </div>
  )
}

