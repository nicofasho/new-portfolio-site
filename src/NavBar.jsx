import React from "react";
import { Route } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" id="top" href="/">
          <img src="/images/Fleur-de-lis-fill.svg" alt="logo" className="logo" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Portfolio <span className="sr-only">(current)</span>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/about.html">
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/contact.html">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
