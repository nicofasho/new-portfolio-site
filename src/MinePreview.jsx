import React from "react";
import { Link } from "react-router-dom";

const MinePreview = () => {
  return (
    <div className="project">
      <Link to="/minesweeper">
        <img
          src="./newimages/MineCoverImage.png"
          alt="Avoid the Spoilers 2019 Edition - Frontend JavaScript"
          className="project-image img-fluid d-block mx-auto"
        />
      </Link>

      <Link to="/minesweeper">
        <h2 className="project-title">
          Avoid the Spoilers 2019 Edition - Frontend JavaScript
        </h2>
      </Link>

      <p className="project-description">
        Avoid the Spoilers is a Minesweeper clone with a twist.
      </p>
    </div>
  );
};

export default MinePreview;
