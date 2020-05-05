import React from 'react';
import logo from './logo.svg';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import './App.css';



const App = ({projects}) => (
  <ul>
    <h1>Diane Jones | Product Manager</h1>
    <hr />
    <h2>Featured Projects</h2>
    
      {projects.map((project) => 
          <div key={project.id}>
            <a href=""><img src={project.imgsrc} /></a>
            <h3>{project.name}</h3> 
            <p><a href="">View the case study</a></p>
            </div>
              
      )}
  </ul>
)

export default App;
