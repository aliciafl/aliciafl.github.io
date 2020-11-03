import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';

import Navigation from "./components/parts/Navigation";
import Footer from "./components/parts/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Lifestyle from './components/Lifestyle';

function App() {
  return (
    <div className="App">
      <Router basename="/">
      <Navigation/>

        <Switch>
          <Route path="/projects" exact component={() => <Projects/>} />
          <Route path="/lifestyle" exact component={() => <Lifestyle />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/" component={() => <Home />} />
        </Switch>      
        

        <Footer />
      </Router>
    </div>
  );
}

export default App;
