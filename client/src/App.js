import React, { Component } from 'react';
import './App.scss';
import { Router, Switch, Route } from 'react-router-dom';

// Components
import Navbar from './Navbar';
import Home from './components/Home';
import Galerie from './components/Galerie';
import Destinations from './components/Destinations';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Faune from './components/Faune';
import AddPhoto from './components/AddPhoto';
import Login from './components/auth/Login';
import AuthService from './components/auth/auth-service';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { adminLoggedIn: null };
    this.service = new AuthService();
  }

  fetchUser() {
    if (this.state.adminLoggedIn === null) {
      this.service.loggedin()
      .then(res => {
        console.log(this.state.adminLoggedIn);
        this.setState({adminLoggedIn: res});
      })
      .catch(err => {
        this.setState({adminLoggedIn: false});
      });
    }
  };

  getTheUser = (userObj) => {
    this.setState({
      adminLoggedIn: userObj
    })
  };

  render() {
    if (this.state.adminLoggedIn) {
      return (
          <div className="App">
            <Navbar adminInSession={this.state.adminLoggedIn} getUser={this.getTheUser} />
      
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/galerie" component={Galerie} />
              <Route path="/destinations" component={Destinations} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/add" component={AddPhoto} />
              <Route path="/faune" component={Faune} />
              <Route path="/login" render={() => <Login getUser={this.getTheUser} adminInSession={this.state.adminLoggedIn}/>} />
            </Switch>
      
            <Footer />
          </div>
      );
    } else {
      return (
        <div className="App">
          <Navbar adminInSession={this.state.adminLoggedIn} />
    
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/galerie" component={Galerie} />
            <Route path="/destinations" component={Destinations} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/faune" component={Faune} />
            <Route path="/login" render={() => <Login getUser={this.getTheUser}/>} />
          </Switch>
    
          <Footer />
        </div>
      );
    }
  }
}

export default App;
