import React, { Component } from 'react';

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() { 
    return ( 
<div className="container project-page">
      <h1 className="header">Root Rideshare - Django</h1>

      <a href="http://rootrideshare.herokuapp.com/">
        <img
          src="./newimages/RootRideshareCoverImage.png"
          alt="Root Rideshare"
          className="img-fluid d-block mx-auto"
        />
      </a>

      <h2>Objective</h2>
      <p>
        To help people simplify their commute. Helps people going to and from
        similar destinations connect. Make people's commutes easier and more
        interesting / fun.
      </p>

      <h2>Tech Stack</h2>
      <ul>
        <li>PostgreSQL Database</li>
        <li>Django Web Framework</li>
      </ul>

      <h2>Tools Used</h2>
      <ul>
        <li>Git</li>
        <li>Github</li>
        <li>SASS</li>
        <li>Google Maps Directions API</li>
        <li>Google Maps Static API</li>
        <li>Postman</li>
      </ul>

      <h2>My Process</h2>
      <ol>
        <li>Designed and coded database models</li>
        <li>Designed application routes</li>
        <li>Researched Google Maps API implementation</li>
        <li>Tested API calls in Postman</li>
        <li>Used Google Maps APIs to generate dynamic images of the routes</li>
      </ol>

      <h2>Try Root Rideshare</h2>
      <p>You can look at a demo of Root <a href="http://rootrideshare.herokuapp.com/">here</a></p>

      <h2>Github Repository</h2>
      <p>You can look at Root's code <a href="https://github.com/akhilnn/root_rideshare">here</a></p>
    </div>
     );
  }
}
 
export default Root;
