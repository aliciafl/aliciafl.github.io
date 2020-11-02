import React from 'react';

import './style.css';

function Projects() {
    return (
        <div className="projects">
          <p id="tagged"> Tagged in {window.location.pathname.replace(/^\/+/, '')} </p>

          <div className="form">
            <p>Crud Application</p>
            <br/>

            <label>Movie Name</label>
            <input type="text" name="movie" /> 
            <br/>

            <label>Review</label>
            <input type="text" name="review" /> 
            <br/>

            <button>Submit</button>
          </div>
        
        </div>
      );
}

export default Projects
