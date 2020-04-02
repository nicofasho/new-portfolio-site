import React from "react";
import JobboPreview from "./JobboPreview";
import MatchyPreview from "./MatchyPreview";
import RootPreview from './RootPreview';
import GameJournalPreview from './GameJournalPreview';
import MinePreview from './MinePreview';

const Projects = (props) => {
  return (
    <div>
      <p className="header">Hi! I'm Christian Watson</p>

      <p className="project-description">
        I'm a Software Engineer currently living in the San Francisco Bay Area.
        I enjoy coding on the backend in JavaScript and Python and learning new
        technologies. Here are some of my most recent projects, enjoy!
      </p>

      <JobboPreview history={props} />
      <MatchyPreview history={props} />
      <RootPreview  history={props} />
      <GameJournalPreview history={props} />
      <MinePreview history={props} />
      
    </div>
  );
};

export default Projects;
