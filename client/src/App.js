import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Galerie from './components/Galerie';
import Destinations from './components/Destinations';
import About from './components/About';
import Contact from './components/Contact';

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
      </Switch>

      <footer className="Footer">Amélie Peingnez Photography</footer>
    </div>
  );
}

export default App;
