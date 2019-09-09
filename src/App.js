import React from "react";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <header>
        <nav class="navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand" id="top" href="/">
            <img src="/images/Fleur-de-lis-fill.svg" alt="logo" class="logo" />
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="/">
                  Portfolio <span class="sr-only">(current)</span>
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/about.html">
                  About
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/contact.html">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <div class="container">
        <p class="header">Hi! I'm Christian Watson</p>

        <p class="project-description">
          I'm a Software Engineer currently living in the San Francisco Bay
          Area.
        </p>

        <div class="project">
          <a href="/los.html">
            <img
              src="./images/LOSCoverImage.png"
              alt="Little Orchestra Society Website Wireframes"
              class="project-image img-fluid"
            />
          </a>

          <a href="/los.html">
            <h2 class="project-title">
              Little Orchestra Society Website Wireframes
            </h2>
          </a>

          <p class="project-description">
            This project was a set of wireframes for the Little Orchestra
            Society's new website. LOS is a charitable organization in New York
            City, NY.
          </p>

          <hr />
        </div>

        <div class="project">
          <a href="/fitted.html">
            <img
              src="./images/fittedscreensmockup.jpg"
              alt="Fitted"
              class="project-image img-fluid"
            />
          </a>

          <a href="/fitted.html">
            <h2 class="project-title">Fitted</h2>
          </a>

          <p class="project-description">
            Fitted is a responsive exercise app that motivates users to lead a
            healthier lifestyle through easy to put together workout routines.
          </p>

          <hr />
        </div>

        <div class="project">
          <a href="/schnitzeljagd.html">
            <img
              src="./images/SchnitzeljagdScreensMockup.jpg"
              alt="Schnitzeljagd"
              class="project-image img-fluid"
            />
          </a>

          <a href="/schnitzeljagd.html">
            <h2 class="project-title">Schnitzeljagd</h2>
          </a>

          <p class="project-description">
            Schnitzeljagd is a scavenger hunt app that allows users to have fun
            exploring their surroundings with friends and family.
          </p>

          <hr />
        </div>

        <div class="project">
          <a href="/phlash.html">
            <img
              src="./images/PhlashMockup.jpg"
              alt="Phlash"
              class="project-image img-fluid"
            />
          </a>

          <a href="/phlash.html">
            <h2 class="project-title">Phlash</h2>
          </a>

          <p class="project-description">
            Phlash is a flash card app concept that allows users to easily
            create flash card decks for any subject that they want to learn.
          </p>

          <hr />
        </div>

        <div class="project">
          <a href="/tuanes.html">
            <img
              src="./images/tuanesmockup.jpg"
              alt="Tulane Anesthesiology 2015"
              class="project-image img-fluid"
            />
          </a>

          <a href="/tuanes.html">
            <h2 class="project-title">Tulane Website Redesign 2015</h2>
          </a>

          <p class="project-description">
            This project was a website for the Tulane University Department of
            Anesthesiology completed in 2015. I solo designed all visual
            elements: color, typography, and layout.
          </p>
        </div>

        <hr class="mt-5" />

        <footer class="d-flex justify-content-between">
          <div class="mr-auto footer-section">
            <ul class="footer-list">
              <li>© Christian Watson 2019</li>

              <li>All Rights Reserved</li>
            </ul>
          </div>

          <div class="footer-section">
            <a href="#top">Page Top</a>
          </div>

          <div class="ml-auto footer-section">
            <ul class="footer-list">
              <li>
                <a href="mailto:chris23w@gmail.com">Email</a>
              </li>

              <li>
                <a href="https://www.linkedin.com/in/christian-watson-12875466/">
                  LinkedIn
                </a>
              </li>

              <li class="d-none">
                <a href="https://twitter.com/WatsoAwesome">Twitter</a>
              </li>
            </ul>
          </div>
        </footer>
      </div>

      <script
        src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"
      ></script>

      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
        integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
        crossorigin="anonymous"
      ></script>

      <script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
        integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
        crossorigin="anonymous"
      ></script>
    </div>
  );
}

export default App;
