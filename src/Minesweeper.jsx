import React, { Component } from "react";

class Minesweeper extends Component {
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
        <h1 className="header">
          Avoid the Spoilers 2019 Edition - Frontend JavaScript
        </h1>

        <a href="https://nicofasho.github.io/Dont-Explode/">
          <img
            src="./newimages/MineCoverImage.png"
            alt="Avoid the Spoilers 2019 Edition"
            className="img-fluid d-block mx-auto"
          />
        </a>

        <h2>Objective</h2>
        <p>
          This project is a recreation of the classic Windows game Minesweeper.
          I wanted to add a slight twist to the gameplay so I added the
          punishment of a popular movie or TV spoiler if a player clicks on a
          bomb.
        </p>

        <h2>Tech Used</h2>
        <ul>
          <li>Frontend JavaScript</li>
        </ul>


        <h2>Process</h2>
        <ol>
          <li>Established game state variables</li>
          <li>Code basic game board</li>
          <li>Implement random bomb placement</li>
          <li>Implement empty square propogation logic</li>
          <li>Style game board</li>
          <li>Implement easy, medium, hard difficulty</li>
        </ol>

        <h2>Try Avoid the Spoilers</h2>
        <p>You can play Avoid the Spoilers <a href="https://nicofasho.github.io/Dont-Explode/">here</a></p>

        <h2>Github Repository</h2>
        <p>You can look at Avoid the Spoilers's code <a href="https://github.com/nicofasho/Dont-Explode">here</a></p>

      </div>
    );
  }
}

export default Minesweeper;
