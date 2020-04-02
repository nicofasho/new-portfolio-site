import React from "react";
import { Link } from "react-router-dom";

const JobboPreview = () => {
    return (
        <div className="project">
            <Link to="/jobbo">
                <img
                    src="./newimages/JobboCoverImage.png"
                    alt="Jobbo - Django"
                    className="project-image img-fluid d-block mx-auto"
                />
            </Link>

            <Link to="/jobbo">
                <h2 className="project-title">Jobbo - Django</h2>
            </Link>

            <p className="project-description">
                Jobbo is a job aggregator that I built to save myself time in my job search. It is built using Django and finds Software Engineer jobs from RemoteOk and Weworkremotely.
            </p>
            <hr />
        </div>
    );
};

export default JobboPreview;