import React from 'react';
import './App.css';

function App() {
  return (
    <div className="wrapper">
    <header>
        <nav className="header">
            <a className="logo" href="index.html">Christian Watson</a>
            <ul className="navigation">
                <li>
                    <a href="index.html">Home</a>
                </li>
                <li>
                    <a href="about.html">About</a>
                </li>
                <li>
                    <a href="contact.html">Contact</a>
                </li>
            </ul>
        </nav>
    </header>
    <h1>Hi, my name is Christian Watson, and I am a Software Engineer looking for employment in the Bay Area.</h1>
    <h2>Welcome to my portfolio site!</h2>

    <p className="hometext center">Here are some of my recent projects, enjoy!</p>


    <div className="columns-container">
        <div className="column-4 project">
            <div className="project-preview">
                <img src="img/OnboardingPage.png" alt="Phlash" />
                <h2>Phlash</h2>
            </div>
            <a href="phlash.html" className="project-link">
                <p className="project-details">Phlash is a flash card app that served as a broad overview of the entire UX Design Process.</p>
            </a>
        </div>
        <div className="column-4 project">
            <div className="project-preview">
                <img src="img/WelcomeScreenAndroid.png" alt="Schnitzeljagd" />
                <h2>Schnitzeljagd</h2>
            </div>
            <a href="schnitzeljagd.html" className="project-link">
                <p className="project-details">Schnitzeljagd is a scavenger hunt app that covers Competitive Research through to finished Presentation
                    mockups and Dev Handoff.</p>
            </a>
        </div>
        <div className="column-4 project">
            <div className="project-preview">
                <img src="img/MobileLogin.png" alt="Fitted" />
                <h2>Fitted</h2>
            </div>
            <a href="fitted.html" className="project-link">
                <p className="project-details">Fitted is a fitness responsive web app. This project focused on visual design for different breakpoints,
                    UI Elements, and slicing elements for Developer Handoff.</p>
            </a>
        </div>
        <div className="column-4 project">
            <div className="project-preview">
                <img src="img/tulanehomesnip.png" alt="Tulane Anesthesiology 2015" />
                <h2>Tulane Anesthesiology 2015</h2>
            </div>
            <a href="tulane.html" className="project-link">
                <p className="project-details">2015 website redesign for the Tulane University Department of Anesthesiology.</p>
            </a>
        </div>
        
    </div>

    <footer>
        <div className="footer">
            <span>&copy; Christian Watson 2018</span>
            <ul className="footernav">
                <li>
                    <a href="index.html">Home</a>
                </li>
                <li>
                    <a href="about.html">About</a>
                </li>
                <li>
                    <a href="contact.html">Contact</a>
                </li>
            </ul>
        </div>
    </footer>
</div>
  );
}

export default App;
