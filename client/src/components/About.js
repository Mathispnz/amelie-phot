import React from 'react';
import './About.scss';

export default function About() {
  return (
    <div className="About">
      <h2>À propos</h2>

      <div className="About-Picture_Wrap">
        <img src="pictures/profile.jpg" className="About-Picture_Wrap__Img" alt="Profile" />
      </div>

      <div className="About-Text">
        <p className="About-Para">
        Mes parents m’ont offert mon premier appareil photo numérique en 2005 lorsque j’avais 17 ans. Une véritable révélation. J’ai alors passé toutes mes vacances derrière un viseur. Depuis ce jour, j’ai toujours associé le voyage à la photographie et la photographie au voyage.<br /><br />
        C’est 10 ans plus tard que ma vie a pris un tournant quand mon compagnon et moi avons décidé de partir voyager pendant deux ans et demi. A nous la découverte de l’Australie, de l’Indonésie, la Nouvelle-Zélande, Hawaii, l’Ouest Américain, Cuba et le Québec. <br /><br />
        Tous ces paysages que j’ai vu défiler. Ces regards échangés. Ces faunes et ces flores que je découvrais. Ils marquent à jamais.  J’ai vécu ces moments. Je suis ces moments. Je ne pouvais pas garder toutes ces beautés pour moi. J’avais besoin de les partager. <br /><br />
        Quoi de mieux que la photographie pour le faire ? <br />
        </p>
        <p className="About-Qwig">Amélie</p>

        <a href="https://www.instagram.com/coachingphotovoyage/" target="_blank" rel="noopener noreferrer"><div className="About-Text_Insta">
          <img className="About-Text_Insta-img" src="pictures/instagram-brands.svg" alt="Instagram" />
        </div></a>
      </div>

    </div>
  )
}
