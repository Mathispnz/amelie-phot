// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Fade } from 'react-slideshow-image';

// const fadeProperties = {
//   duration: 3000,
//   transitionDuration: 500,
//   infinite: true,
//   indicators: true,
//   arrows: true
// }

// export default function Faune() {
//   const [ville, setVille] = useState([]);

//   const getVillePictures = () => {
//     axios.get('http://localhost:5530/api/photos')
//     .then(res => {
//       setVille(res.data);
//     })
//     .catch(err => {
//       console.log(err)
//     });
//   };

//   useEffect(() => {
//     getVillePictures()
//   }, []);

//   return (
//     <div className="Faune">
//       <h2>Ville</h2>
      
//       <div className="containerSlide">
//         <Fade {...fadeProperties}>
//           {ville.filter(ville => ville.theme === 'Ville').map((ville, key) => {
//             return(
//               <div key={key}>
//                 <h2>{ville.name}</h2>
//                 <img src={ville.url} alt="Ville" />
//                 <h5>{ville.theme}</h5>
//               </div>
//             )
//           })}
//         </Fade>
//       </div>
//     </div>
//   )
// }
