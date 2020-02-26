import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Galerie from './components/Galerie';
import Destinations from './components/Destinations';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Faune from './components/Faune';
import AddPhoto from './components/AddPhoto';

function App() {
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
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
