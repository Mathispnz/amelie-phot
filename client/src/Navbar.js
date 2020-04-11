import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Navbar.scss';
import AuthService from './components/auth/auth-service';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adminLoggedIn: null,
      mobMenuOpen: false,
      scrollTop: false
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
    const { mobMenuOpen, scrollTop } = this.state;

    if (this.state.adminLoggedIn) {
      return (
        <div className="Navbar">
          <div className="Navbar_Cont">
            <div className="Navbar_Left">
              <Link className="Navbar-Link Link--Bold Navbar_marginLeft__none" to="/">AMÉLIE PEINGNEZ</Link>
            </div>

            <div className="Navbar_Right"> 
              <Link className="Navbar-Link" to="/galerie">Galerie</Link>
              <Link className="Navbar-Link" to="/about">À propos</Link>
              <Link className="Navbar-Link" to="/contact">Contact</Link>
              <Link className="Navbar-Link" to="/add">Add Pic</Link>
              <Link className="Navbar-Link" to="/logout" onClick={() => this.logoutUser()}>Logout</Link>
            </div>

            {/* RESPONSIVE MENU */}
            <div className="Navbar_Right--Mob"> 
            <div className={`Navbar_Right--Mob_Open ${scrollTop ? 'Navbar_Right__fixed' : '' }`} onClick={() => this.openMenu()}>
                <div className={`Navbar_Right--Mob_Open_line ${mobMenuOpen ? 'Navbar_Right--Mob_Open_line_open' : ''} `}></div>
                <div className={`Navbar_Right--Mob_Open_line ${mobMenuOpen ? 'Navbar_Right--Mob_Open_line_open3' : ''} `}></div>
                <div className={`Navbar_Right--Mob_Open_line ${mobMenuOpen ? 'Navbar_Right--Mob_Open_line_open2' : ''} `}></div>
              </div>
              
              <div className={`Navbar_Right--Mob_Menu ${mobMenuOpen ? '' : 'Navbar_Right--Mob_Menu--hidden'}`}>
                <Link className="Navbar-Link" to="/galerie">Galerie</Link>
                <Link className="Navbar-Link" to="/about">À propos</Link>
                <Link className="Navbar-Link" to="/contact">Contact</Link>
                <Link className="Navbar-Link" to="/add">Add Pic</Link>
                <Link className="Navbar-Link Navbar_marginRight__none" to="/logout" onClick={() => this.logoutUser()}>Logout</Link>
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
              <Link className="Navbar-Link Link--Bold Navbar_marginLeft__none" to="/">AMÉLIE PEINGNEZ</Link>
            </div>
            <div className="Navbar_Right"> 
              <Link className="Navbar-Link" to="/galerie">Galerie</Link>
              <Link className="Navbar-Link" to="/about">À propos</Link>
              <Link className="Navbar-Link Navbar_marginRight__none" to="/contact">Contact</Link>
            </div>

            {/* RESPONSIVE MENU */}
            <div className="Navbar_Right--Mob"> 
              <div className={`Navbar_Right--Mob_Open ${scrollTop ? 'Navbar_Right__fixed' : '' }`} onClick={() => this.openMenu()}>
                <div className={`Navbar_Right--Mob_Open_line ${mobMenuOpen ? 'Navbar_Right--Mob_Open_line_open' : ''} `}></div>
                <div className={`Navbar_Right--Mob_Open_line ${mobMenuOpen ? 'Navbar_Right--Mob_Open_line_open3' : ''} `}></div>
                <div className={`Navbar_Right--Mob_Open_line ${mobMenuOpen ? 'Navbar_Right--Mob_Open_line_open2' : ''} `}></div>
              </div>

              <div className={`Navbar_Right--Mob_Menu ${mobMenuOpen ? '' : 'Navbar_Right--Mob_Menu--hidden'}`}>
                <Link className="Navbar-Link" to="/galerie">Galerie</Link>
                <Link className="Navbar-Link" to="/about">À propos</Link>
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