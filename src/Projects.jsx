import React from "react";

const Projects = () => {
  return (
    <div>
      <p className="header">Hi! I'm Christian Watson</p>

      <p className="project-description">
        I'm a Software Engineer currently living in the San Francisco Bay Area.
      </p>

      <div className="project">
        <a href="/los.html">
          <img
            src="./images/LOSCoverImage.png"
            alt="Little Orchestra Society Website Wireframes"
            className="project-image img-fluid"
          />
        </a>

        <a href="/los.html">
          <h2 className="project-title">
            Little Orchestra Society Website Wireframes
          </h2>
        </a>

        <p className="project-description">
          This project was a set of wireframes for the Little Orchestra
          Society's new website. LOS is a charitable organization in New York
          City, NY.
        </p>

        <hr />
      </div>

      <div className="project">
        <a href="/fitted.html">
          <img
            src="./images/fittedscreensmockup.jpg"
            alt="Fitted"
            className="project-image img-fluid"
          />
        </a>

        <a href="/fitted.html">
          <h2 className="project-title">Fitted</h2>
        </a>

        <p className="project-description">
          Fitted is a responsive exercise app that motivates users to lead a
          healthier lifestyle through easy to put together workout routines.
        </p>

        <hr />
      </div>

      <div className="project">
        <a href="/schnitzeljagd.html">
          <img
            src="./images/SchnitzeljagdScreensMockup.jpg"
            alt="Schnitzeljagd"
            className="project-image img-fluid"
          />
        </a>

        <a href="/schnitzeljagd.html">
          <h2 className="project-title">Schnitzeljagd</h2>
        </a>

        <p className="project-description">
          Schnitzeljagd is a scavenger hunt app that allows users to have fun
          exploring their surroundings with friends and family.
        </p>

        <hr />
      </div>

      <div className="project">
        <a href="/phlash.html">
          <img
            src="./images/PhlashMockup.jpg"
            alt="Phlash"
            className="project-image img-fluid"
          />
        </a>

        <a href="/phlash.html">
          <h2 className="project-title">Phlash</h2>
        </a>

        <p className="project-description">
          Phlash is a flash card app concept that allows users to easily create
          flash card decks for any subject that they want to learn.
        </p>

        <hr />
      </div>

      <div className="project">
        <a href="/tuanes.html">
          <img
            src="./images/tuanesmockup.jpg"
            alt="Tulane Anesthesiology 2015"
            className="project-image img-fluid"
          />
        </a>

        <a href="/tuanes.html">
          <h2 className="project-title">Tulane Website Redesign 2015</h2>
        </a>

        <p className="project-description">
          This project was a website for the Tulane University Department of
          Anesthesiology completed in 2015. I solo designed all visual elements:
          color, typography, and layout.
        </p>
      </div>
    </div>
  );
};

export default Projects;
