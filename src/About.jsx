import React, { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container project-page">
        <h1>About Me</h1>
        <img
          src="./newimages/christianPortrait.jpg"
          alt="Christian Watson"
          className="img-fluid d-block mx-auto w-50 mb-5"
        />

        <p>
          A wise person once said: "If you want to go fast, go alone. If you
          want to go far, go together." I want to bring my unique blend of UX
          and Software Engineering skills to a motivated team to solve
          challenging problems. The process of breaking down a difficult problem
          into smaller chunks is something I thrive on. Piecing together a
          solution from all the little solutions is one of the most satisfying
          feelings. I believe in supporting the people around me so that we all
          improve together. Board and video games are a passion of mine, so if
          you like them then lets talk. My favorites are Red Dragon Inn and the
          Monster Hunter series respectively!
        </p>

        <ul>
          <li>
            Development Skills: Python / Django, JavaScript, MERN Stack, HTML /
            CSS
          </li>
          <li>
            Tools: Visual Studio Code, Postman, Chrome Dev Tools, Git / Github
          </li>
        </ul>
      </div>
    );
  }
}

export default About;
