import React, { useReducer } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import './AddPhoto.scss';

export default function AddPicture() {
  // Reducer
  const [picture, setPicture] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      name: '',
      color: '',
      location: '',
      description: '',
      url: '',
      theme: ''
    }
  );

  const handleChange = evt => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setPicture({[name]: newValue});
  }

  const handleFileUpload = event => {
    const uploadData = new FormData();
    uploadData.append('imageUrl', event.target.files[0]);
    
    axios.post(`${process.env.REACT_APP_API_URL}photos/upload`, uploadData)
    .then(response => {
        setPicture({url: response.data.secure_url});
        toast(`La photo a été téléchargée à Cloudinary !`, { autoClose: 3000 });
    })
    .catch(err => {console.log("Error while uploading the file", err)});
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post(`${process.env.REACT_APP_API_URL}photos/add`, picture)
    .then(res => {
      toast(`${picture.name} a bien été chargée sur le site !`, { autoClose: 3000 });
      setPicture({
        name: '',
        color: '',
        url: '',
        theme: '',
        location: '',
        description: ''
      });
    })
    .catch(err => {
      console.log('Error while trying to add a new picture :', err)
    });
  };

  return (
    <div className="AddPicture">
      <ToastContainer autoClose={3000} />
      
      <form onSubmit={handleSubmit} className="AddPicture_Form">
        <label>Nom: </label><br />
        <input type="text" name="name" value={picture.name} onChange={handleChange} /><br />

        <label>Couleur: </label><br />
        <input type="text" name="color" value={picture.color} onChange={handleChange} /><br />

        <label>Location: </label><br />
        <input type="text" name="location" value={picture.location} onChange={handleChange} /><br />

        <label>Description: </label><br />
        <input type="text" name="description" value={picture.description} onChange={handleChange} /><br />

        <label>Photo: </label><br />
        <input type="file" name="url" onChange={handleFileUpload} /><br />

        <label>Thème: </label><br />
        <select name="theme" value={picture.theme} onChange={handleChange}>
          <option value=""></option>
          <option value="Faune">Faune</option>
          <option value="Flore">Flore</option>
          <option value="Terre">Terre</option>
          <option value="Mer">Mer</option>
        </select><br /><br />

        <button>Envoyer</button>
      </form>
    </div>
  )
}
