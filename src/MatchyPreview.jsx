import React from "react";
import { Link } from "react-router-dom";

const MatchyPreview = () => {
  return (
    <div className="project">
      <Link to="/matchy">
        <img
          src="./newimages/MatchyCoverImage.png"
          alt="Matchy - MERN Stack"
          className="project-image img-fluid d-block mx-auto"
        />
      </Link>

      <Link to="/matchy">
        <h2 className="project-title">Matchy - MERN Stack</h2>
      </Link>

      <p className="project-description">
        Matchy was my team's winning project for the LinkedIn Hackathon for
        Economic Opportunity. It was designed and built over the course of a
        weekend.
      </p>
      <hr />
    </div>
  );
};

export default MatchyPreview;
