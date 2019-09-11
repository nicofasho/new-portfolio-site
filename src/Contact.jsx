import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container project-page">
        <h1 className="header">Contact</h1>

        <p>
          Hello! Thanks for visiting my portfolio site, you can contact me using
          the information below:
        </p>
        <p className="mt-5">
          <strong>Name: </strong>Christian Watson
        </p>
        <p>
          <strong>Email: </strong>
          <a href="mailto:chris23w@gmail.com">chris23w@gmail.com</a>
        </p>
        <p>
          <strong>LinkedIn Profile: </strong>
          <a href="https://www.linkedin.com/in/christian-watson-/">
            <img
              src="./newimages/if_linkedin_circle_color_107178.svg"
              alt="Christian's LinkedIn Profile"
            />
          </a>
        </p>
        <p>
          <strong>Github Profile: </strong>
          <a href="https://github.com/nicofasho">
            <img
              src="./newimages/github.png"
              alt="Christian's Github Profile"
              width="67px"
            />
          </a>
        </p>
      </div>
    );
  }
}

export default Contact;
