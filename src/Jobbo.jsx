import React, { Component } from "react";

class Jobbo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="container project-page">
        <h1 className="header">Jobbo - Django</h1>

        <a href="https://jobbo-aggregator.herokuapp.com/">
          <img
            src="./newimages/JobboCoverImage.png"
            alt="Jobbo"
            className="img-fluid d-block mx-auto"
          />
        </a>

        <h2>Objective</h2>
        <p>
          Jobbo is a job aggregator that I built to help me save time in my job search. It finds remote Software Engineer positions every Monday at 9am and compiles them on a website so that it's easy for me to check and apply.
        </p>

        <h2>Tech Used</h2>
        <ul>
          <li>Django Web Framework</li>
          <li>Beautiful Soup</li>
          <li>APScheduler</li>
          <li>Heroku</li>
          <li>HTML / CSS</li>
          <li>Bootstrap 4</li>
        </ul>

        <h2>Process</h2>
        <p>I started the project by coding the scraper. I wanted to be able to find relevant jobs from RemoteOK and Weworkremotely. I also decided that I would only want jobs posted within the last week. I was able to do this by comparing the timestamp on the job posting and the timestamp at the time of scraping and whenever the difference was greater than 7 days the scraper will stop. After I was able to isolate Software Engineering jobs posted within the last week, I implemented a filter to only keep non-Senior level positions.</p>

        <p>After coding and testing the scraper, I created the Django app using Visual Studio because I wanted to learn a new IDE and approach to a project like this. I then created the database models for the jobs and the groups of jobs within Django. Next, I made it so that the app would automatically scrape the two websites when a new group of jobs was saved to the database.</p>

        <p>I then formatted the front end, making sure that the information from the backend showed up in a visually pleasing manner. After the front end was finished I installed apscheduler and wrote the 'cronlike' job that would schedule a new group of jobs to be created on every Monday at 9am, which is when I usually sit down to apply to jobs for the week. After I tested that the job would run as scheduled, I deployed the app on Heroku.</p>

        <h2>Results</h2>
        <ul>
          <li>I learned a lot about web scraping and the interesting challenges of combing through a website's structure to consistently get the right information</li>
          <li>I learned about different workflows: I usually work in a command line Linux environment whereas this project was done entirely in Windows and using Visual Studio</li>
          <li>Lastly, I learned about scheduling and automation through cron-like jobs, and in studying these, I learned about cron itself</li>
        </ul>

        <h2>Try Jobbo</h2>
        <p>You can look at Jobbo <a href="https://jobbo-aggregator.herokuapp.com/">here</a></p>

        <h2>Github Repository</h2>
        <p>You can look at Jobbo's code <a href="https://github.com/nicofasho/Jobbo">here</a></p>
      </div>
    );
  }
}

export default Jobbo;
