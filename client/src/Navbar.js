import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Navbar.scss';
import AuthService from './components/auth/auth-service';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adminLoggedIn: null,
      mobMenuOpen: false
    }
    this.service = new AuthService();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({...this.state, adminLoggedIn: nextProps["adminInSession"]})
  }

  logoutUser = () => {
    this.service.logout()
    .then(() => {
        this.setState({ adminLoggedIn: null })
        this.props.getUser(null);
        this.props.history.push('/');
    })
  }

  openMenu = () => {
    if (this.state.mobMenuOpen) {
      this.setState({ mobMenuOpen: false });
    } else {
      this.setState({ mobMenuOpen: true });
    }
  }

  render() {
    const { mobMenuOpen } = this.state;

    if (this.state.adminLoggedIn) {
      return (
        <div className="Navbar">
          <div className="Navbar_Cont">
            <div className="Navbar_Left">
              <Link className="Navbar-Link Link--Bold" to="/">AMÉLIE PEINGNEZ</Link>
            </div>
            <div className="Navbar_Right"> 
              <Link className="Navbar-Link" to="/galerie">Galerie</Link>
              <Link className="Navbar-Link" to="/destinations">Destinations</Link>
              <Link className="Navbar-Link" to="/about">À propos</Link>
              <Link className="Navbar-Link" to="/contact">Contact</Link>
              <Link className="Navbar-Link" to="/add">Add Pic</Link>
              <Link className="Navbar-Link" to="/logout" onClick={() => this.logoutUser()}>Logout</Link>
            </div>

            <div className="Navbar_Right--Mob"> 
              <button className="Navbar_Right--Mob_Open" onClick={() => this.openMenu()} >X</button>
              <div className={`Navbar_Right--Mob_Menu ${mobMenuOpen ? '' : 'Navbar_Right--Mob_Menu--hidden'}`}>
                <Link className="Navbar-Link" to="/galerie">Galerie</Link>
                <Link className="Navbar-Link" to="/destinations">Destinations</Link>
                <Link className="Navbar-Link" to="/about">À propos</Link>
                <Link className="Navbar-Link" to="/contact">Contact</Link>
                <Link className="Navbar-Link" to="/add">Add Pic</Link>
                <Link className="Navbar-Link" to="/logout" onClick={() => this.logoutUser()}>Logout</Link>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="Navbar">
          <div className="Navbar_Cont">
            <div className="Navbar_Left">
              <Link className="Navbar-Link Link--Bold" to="/">AMÉLIE PEINGNEZ</Link>
            </div>
            <div className="Navbar_Right"> 
              <Link className="Navbar-Link" to="/galerie">Galerie</Link>
              <Link className="Navbar-Link" to="/destinations">Destinations</Link>
              <Link className="Navbar-Link" to="/about">À propos</Link>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=amelie.peingnez@gmail.com&su=ContactPhoto" target="_blank">Gmail</a>
              <Link className="Navbar-Link" to="/contact">Contact</Link>
            </div>

            <div className="Navbar_Right--Mob"> 
              <button className="Navbar_Right--Mob_Open" onClick={() => this.openMenu()}>X</button>
              <div className={`Navbar_Right--Mob_Menu ${mobMenuOpen ? '' : 'Navbar_Right--Mob_Menu--hidden'}`}>
                <Link className="Navbar-Link" to="/galerie">Galerie</Link>
                <Link className="Navbar-Link" to="/destinations">Destinations</Link>
                <Link className="Navbar-Link" to="/about">À propos</Link>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=amelie.peingnez@gmail.com&su=ContactPhoto" target="_blank">Gmail</a>
                <Link className="Navbar-Link" to="/contact">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default withRouter(Navbar);