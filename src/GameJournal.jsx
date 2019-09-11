import React, { Component } from "react";

class GameJournal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {
    return (
      <div className="container project-page">
        <h1 className="header">Game Journal - MEN Stack</h1>

        <a href="https://game-journal.herokuapp.com/">
          <img
            src="./newimages/GameJournalCoverImage.png"
            alt="Game Journal"
            className="img-fluid d-block mx-auto"
          />
        </a>

        <h2>Objective</h2>
        <p>
          This project was designed to be an app where gamers can write about
          their experiences playing games.
        </p>

        <h2>Tech Stack</h2>
        <ul>
          <li>MongoDB</li>
          <li>Express Web Framework</li>
          <li>Node.js</li>
        </ul>

        <h2>Tools Used</h2>
        <ol>
          <li>Giant Bomb API</li>
          <li>Postman</li>
          <li>JQuery AJAX</li>
        </ol>

        <h2>My Process</h2>
        <ol>
          <li>Designed and coded database models</li>
          <li>Coded backend application logic / routes and controllers</li>
          <li>Studied Giant Bomb API and tested using Postman</li>
          <li>
            Implemented two API Calls and JQuery AJAX on the Post Creation page
          </li>
          <li>Styled Frontend</li>
        </ol>

        <h2>Try Game Journal</h2>
        <p>
          You can look at a demo of Game Journal{" "}
          <a href="https://game-journal.herokuapp.com/">here</a>
        </p>

        <h2>Github Repository</h2>
        <p>
          You can look at Game Journal's code{" "}
          <a href="https://github.com/nicofasho/game-journal">here</a>
        </p>
      </div>
    );
  }
}

export default GameJournal;
