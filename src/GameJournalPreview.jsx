import React from "react";
import { Link } from 'react-router-dom';

const GameJournalPreview = () => {
  return (
    <div className="project">
      <Link to="/matchy">
        <img
          src="./images/LOSCoverImage.png"
          alt="Little Orchestra Society Website Wireframes"
          className="project-image img-fluid"
        />
      </Link>

      <Link to="/matchy">
        <h2 className="project-title">
          Little Orchestra Society Website Wireframes
        </h2>
      </Link>

      <p className="project-description">
        This project was a set of wireframes for the Little Orchestra Society's
        new website. LOS is a charitable organization in New York City, NY.
      </p>

      <hr />
    </div>
  );
};

export default GameJournalPreview;
