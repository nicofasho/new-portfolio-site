import React from "react";
import { Link } from "react-router-dom";

const RootPreview = () => {
  return (
    <div className="project">
      <Link to="/root">
        <img
          src="./newimages/RootRideshareCoverImage.png"
          alt="Root Rideshare - Django"
          className="project-image img-fluid d-block mx-auto"
        />
      </Link>

      <Link to="/root">
        <h2 className="project-title">Root Rideshare - Django</h2>
      </Link>

      <p className="project-description">
        Root was a group project completed as part of my General Assembly
        Bootcamp. I worked primarily on the database models and application
        logic.
      </p>

      <hr />
    </div>
  );
};

export default RootPreview;
