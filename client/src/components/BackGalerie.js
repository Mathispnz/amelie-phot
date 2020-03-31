import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.scss';

export default class BackGalerie extends Component {
  render() {
    return (
      <div className="BackToMob">
        <Link className="BackToMob_Link" to="/galerie">Voir les thèmes</Link>
      </div>
    )
  }
}
