import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './PhotoDetails.scss';
import '../App.scss';
import { ToastContainer, toast } from 'react-toastify';

class PhotoDetails extends Component {
  constructor(props){
      super(props);
      this.state = {
        name: '',
        color: '',
        url: '',
        location: '',
        description: '',
        theme: '',
        show: false
      };
  };

  getSinglePhoto = () => {
    // How to access params in a functional component
    const { params } = this.props.match;

    axios.get(`${process.env.REACT_APP_API_URL}photos/${params.id}`)
    .then(res => {
      this.setState(res.data)
    })
    .catch(err => {
      console.log(err)
    });
  };

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  handleUpload = event => {
    const uploadData = new FormData();
    uploadData.append('imageUrl', event.target.files[0]);
    
    axios.post(`${process.env.REACT_APP_API_URL}photos/upload`, uploadData)
    .then(response => {
        this.setState({url: response.data.secure_url});
        toast('La photo a bien été ajoutée à Cloudinary !');
    })
    .catch(err => {console.log("Error while uploading the file", err)});
  }

  handleSubmit = event => {
    event.preventDefault();

    const { params } = this.props.match;
    const { name, color, url, location, description, theme } = this.state;

    axios.put(`${process.env.REACT_APP_API_URL}photos/${params.id}`, { name, color, url, location, description, theme })
    .then(res => {
      toast('La photo a bien été modifiée !');
    })
    .catch(err => {
      console.log(err)
    });
  }

  showModal = () => {
    if (this.state.show) {
      this.setState({show: false})
    } else {
      this.setState({show: true})
    }
  }

  deleteProject = () => {
    const { params } = this.props.match;
    axios.delete(`${process.env.REACT_APP_API_URL}photos/${params.id}`)
    .then( () =>{
        this.props.history.push('/photos');
    })
    .catch((err)=>{
        console.log(err)
    })
  }

  componentDidMount(){
    this.getSinglePhoto();
  }

  render() {
    const { show } = this.state;
    return (
      <div className="sglpic">
        <div className="BackToMob">
          <Link className="BackToMob_Link" to="/photos">
            Retourner à l'éditeur
          </Link>
        </div>
  
        <div className="sglpic_flex">
          <div className="sglpic_details">
            <h2>Détails de la photo</h2>

            <div className="sglpic_pic">
              <p><span>Nom:</span> <br />{this.state.name}</p>
              <img alt="DetailsImg" src={this.state.url} />
              <p><span>Color:</span> {this.state.color}</p>
              <p><span>Location:</span> {this.state.location}</p>
              <p className="sglpic_pic-des"><span>Description:</span> <br /> {this.state.description}</p>
              <p><span>Thème:</span> {this.state.theme}</p>
            </div>
          </div>

          <hr />
          <div className="sglpic_divide-desk"></div>

          <div className="sglpic_edit">
            <h2>Éditer la photo</h2>

            <form>
              <label className="sglpic_edit_label-first">Nom: </label><br />
              <input type="text" name="name" value={this.state.name} onChange={event => this.handleChange(event)} /><br />

              <label>Couleur: </label><br />
              <input type="text" name="color" value={this.state.color} onChange={event => this.handleChange(event)} /><br />

              <label>Location: </label><br />
              <input type="text" name="location" value={this.state.location} onChange={event => this.handleChange(event)} /><br />

              <label>Description: </label><br />
              <textarea type="text" name="description" value={this.state.description} onChange={event => this.handleChange(event)} className="sglpic_edit-des"></textarea><br />

              <label>Photo: </label><br />
              <input type="file" name="url" onChange={event => this.handleUpload(event)} /><br />

              <label>Thème: </label><br />
              <select name="theme" value={this.state.theme} onChange={event => this.handleChange(event)}>
                <option value=""></option>
                <option value="Faune">Faune</option>
                <option value="Flore">Flore</option>
                <option value="Terre">Terre</option>
                <option value="Mer">Mer</option>
              </select><br /><br />

            </form>
          </div>
        </div>

        <ToastContainer autoClose={3000} />
        <button onClick={event => this.handleSubmit(event)} type="submit" className="sglpic_btn">Éditer la photo</button>

        <button className="sglpic_btn" onClick={() => this.showModal()}>Supprimer la photo</button>

        <div className={`sglpic_confirm ${show ? 'sglpic_confirm-show' : ''}`}>
          Confirmer la suppression de la photo <br />

          <button onClick={() => this.showModal()}>Annuler</button>
          <button onClick={() => this.deleteProject()}>Confirmer</button>
        </div>
      </div>
    )
  }
}

export default PhotoDetails;