import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const projectList = [
  {id:1, name:"echo project", trailhead: "Echo project", imgsrc:"https://placekitten.com/300/200"}, 
  {id:2, name:"maude project", trailhead: "Wrights", imgsrc:"https://placekitten.com/300/200"},  
  {id:3, name:"cascade project", trailhead: "Bayview", imgsrc:"https://placekitten.com/300/200"}
];

ReactDOM.render(
  <App projects={projectList}/>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
