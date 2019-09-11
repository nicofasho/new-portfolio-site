import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand" id="top" to="/">
          <img
            src="/images/Fleur-de-lis-fill.svg"
            alt="logo"
            className="logo"
          />
        </Link>

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
              <Link className="nav-link" to="/">
                Portfolio <span className="sr-only">(current)</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
