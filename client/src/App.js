import React, { Component } from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
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

    this.state = {adminLoggedIn: null};
    this.service = new AuthService();
  }

  fetchUser() {
    if (this.state.adminLoggedIn === null) {
      this.service.loggedin()
      .then(res => {
        this.setState({loggedInUser: res});
      })
      .catch(err => {
        this.setState({loggedInUser: false});
      });
    }
  };

  getTheUser = userObj => {
    this.setState({
      loggedInUser: userObj
    })
  };

  render() {
    this.fetchUser();
    if (this.state.loggedInUser) {
      return (
        <div className="App">
          <Navbar />
    
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/galerie" component={Galerie} />
            <Route path="/destinations" component={Destinations} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/add" component={AddPhoto} />
            <Route path="/faune" component={Faune} />
            <Route path="/login" component={Login} />
          </Switch>
    
          <Footer />
        </div>
      );
    } else {
      return (
        <div className="App">
          <Navbar />
    
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/galerie" component={Galerie} />
            <Route path="/destinations" component={Destinations} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/faune" component={Faune} />
            <Route path="/login" component={Login} />
          </Switch>
    
          <Footer />
        </div>
      );
    }
  }
}

export default App;
