import React from 'react';
import './Contact.scss';
import copy from 'copy-to-clipboard';
import { toast, ToastContainer } from 'react-toastify';

export default function Contact() {
  const mail = 'ameliepeingnezphotography@gmail.com';
  
  const copyToClip = () => {
    copy('ameliepeingnezphotography@gmail.com');
    document.querySelector('.contact_mail').style = 'color: grey';
    toast('Copié !', { autoClose: 0, draggable: false, closeButton: false });
  };

  return (
    <div className="Contact">
      <h2>Contact</h2>

      <p>Pour tout renseignement, veuillez envoyer un e-mail à:</p>
      <p className="contact_mail" onClick={copyToClip}>{mail} <img style={{width: '20px'}} src="https://icons.iconarchive.com/icons/custom-icon-design/mono-general-2/512/copy-icon.png" alt="Copy Icon" /></p>

      <ToastContainer style={{margin: '10px auto'}} />
    </div>
  )
}
