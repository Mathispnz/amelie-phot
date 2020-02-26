import React, { useState, useReducer, useEffect } from 'react';
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

  const handleSubmit = (e) => {
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

  // handleChange();

  // handleSubmit();

  useEffect(() => {
    handleSubmit();
  }, [])

  return (
    <div className="AddPicture">
      <form onSubmit={handleSubmit} className="AddPicture_Form">
        <label>Name: </label>
        <input type="text" name="name" value={picture.name} onChange={handleChange} />
        <label>Color: </label>
        <input type="text" name="color" value={picture.color} onChange={handleChange} />
        <label>Choose: </label>
        <input type="file" name="url" value={picture.url} onChange={handleChange} />
        <label>Theme: </label>
        <input type="text" name="theme" value={picture.theme} onChange={handleChange} />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}
