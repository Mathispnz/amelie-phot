import React from 'react';
import GoogleMapReact from 'google-map-react';
import './Destinations.scss';

// GOOGLE MAPS API

export default function Destinations() {
  return (
    <div className="Destinations">
      <h2>Destinations</h2>

      <div className="Destinations-Map">
        <GoogleMapReact
          bootstrapURLKeys={{ key : 'AIzaSyDZJPWDWUldMFLp-ceu_wylWIf_Kf0GXhw' }}
          defaultCenter={{lat: -25.734968, lng: 134.489563}}
          zoom={5}
        >
          
        </GoogleMapReact>
      </div>
    </div>
  )
}
