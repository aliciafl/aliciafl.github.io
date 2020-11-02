import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Lifestyle from './components/Lifestyle';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Router>
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
