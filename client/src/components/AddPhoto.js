import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

export default function AddPicture() {
  // const [picture, setPicture] = useState({
  //   name: '',
  //   color: '',
  //   url: '',
  //   theme: ''
  // });

  const [picture, setPicture] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
    name: '',
    color: '',
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
    
    axios.post('http://localhost:5530/api/photos/upload', uploadData)
    .then(response => {
        console.log(response);
        setPicture({url: response.data.secure_url})
    })
    .catch(err => {console.log("Error while uploading the file", err)});
  };

  const handleSubmit = event => {
    axios.post('http://localhost:5530/api/photos/add', picture)
    .then(res => {
      setPicture({
        name: '',
        color: '',
        url: '',
        theme: ''
      })
    })
    .catch(err => {
      console.log('Error while trying to add a new picture :', err)
    });
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <div className="AddPicture">
      <form onSubmit={handleSubmit} className="AddPicture_Form">
        <label>Name: </label>
        <input type="text" name="name" value={picture.name} onChange={handleChange} />
        <label>Color: </label>
        <input type="text" name="color" value={picture.color} onChange={handleChange} />
        <label>Choose: </label>
        <input type="file" name="url" onChange={handleFileUpload} />
        <label>Theme: </label>
        <select name="theme" value={picture.theme} onChange={handleChange}>
          <option value=""></option>
          <option value="Faune">Faune</option>
          <option value="Flore">Flore</option>
          <option value="Terre">Terre</option>
          <option value="Mer">Mer</option>
          <option value="Ville">Ville</option>
          <option value="Portrait">Portrait</option>
        </select>
        <button>Send</button>
      </form>
    </div>
  )
}
