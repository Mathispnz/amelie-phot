import React from 'react';
import './Contact.scss';

export default function Contact() {

  return (
    <div className="Contact">
      <h2>Contact</h2>

      <form>
        <label>
          Nom:
          <input type="text" name="name" />
        </label>
        <label>
          Prénom:
          <input type="text" name="name" />
        </label>
        <label>
          Téléphone:
          <input type="number" name="name" />
        </label>
        <label>
          Adresse mail:
          <input type="mail" name="name" />
        </label>
        <label>
          Message:
          <textarea type="text" name="name" />
        </label>
        
        <button type="submit">Envoyer</button>
      </form>
    </div>
  )
}
