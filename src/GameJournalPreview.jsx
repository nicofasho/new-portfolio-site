import React from "react";
import { Link } from "react-router-dom";

const GameJournalPreview = () => {
  return (
    <div className="project">
      <Link to="/gamejournal">
        <img
          src="./newimages/GameJournalCoverImage.png"
          alt="Game Journal - MEN Stack"
          className="project-image img-fluid d-block mx-auto"
        />
      </Link>

      <Link to="/gamejournal">
        <h2 className="project-title">Game Journal - MEN Stack</h2>
      </Link>

      <p className="project-description">
        Game Journal was a solo project completed as part of my General Assembly
        Bootcamp. Game Journal is a place where gamers can write about their
        experiences with their favorite games.
      </p>

      <hr />
    </div>
  );
};

export default GameJournalPreview;
