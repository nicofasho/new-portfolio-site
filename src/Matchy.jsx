import React, { Component } from "react";

class Matchy extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="container project-page">
        <h1 className="header">Matchy - MERN Stack</h1>

        <a href="http://college-connections.herokuapp.com/">
          <img
            src="./newimages/MatchyCoverImage.png"
            alt="Matchy"
            className="img-fluid d-block mx-auto"
          />
        </a>

        <h2>Objective</h2>
        <p>
          This project was my team's winning entry for the LinkedIn Hackathon
          for Economic Opportunity. The prompt was: "Build an application that
          can help college students build lasting connections without relying on
          email.
        </p>

        <h2>Tech Stack</h2>
        <ul>
          <li>MongoDB</li>
          <li>Express Web Framework</li>
          <li>React.js</li>
          <li>Node.js</li>
        </ul>

        <h2>Process</h2>
        <ol>
          <li>Designed and coded database models</li>
          <li>Coded backend application logic / routes and controllers</li>
          <li>Designed and tested backend api for interaction with frontend</li>
          <li>Implemented Token Based Authentication</li>
          <li>Collaborated with Front End Engineer to solve CSS issues</li>
          <li>Test main application flow</li>
        </ol>

        <h2>Results</h2>
        <ul>
          <li>Our team won the LinkedIn Hackathon for Economic Opportunity.</li>
          <li>
            We designed and built a full stack application in the span of a
            weekend.
          </li>
          <li>I learned a lot about working in a multi-disciplinary team.</li>
        </ul>

        <h2>Try Matchy</h2>
        <p>
          You can look at a demo of Matchy{" "}
          <a href="http://college-connections.herokuapp.com/">here</a>
        </p>

        <h2>Github Repository</h2>
        <p>
          You can look at Matchy's code{" "}
          <a href="https://github.com/alison-codes/college-connections">here</a>
        </p>
      </div>
    );
  }
}

export default Matchy;
