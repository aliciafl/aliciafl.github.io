import React from 'react';

import { NavLink } from 'react-router-dom';

import './style.css';
 
const Navigation = () => {
    return (
       <div className="navbar">
          <NavLink to="/" > <strong>Home</strong></NavLink>
          <NavLink to="/projects">Projects</NavLink>   
          <NavLink to="/lifestyle">Lifestyle</NavLink>       
          <NavLink to="/about">About</NavLink>
       </div>
    );
}

export default Navigation


