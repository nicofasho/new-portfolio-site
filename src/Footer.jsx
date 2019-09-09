import React from "react";
import { Route, Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="d-flex justify-content-between">
      <div className="mr-auto footer-section">
        <ul className="footer-list">
          <li>© Christian Watson 2019</li>

          <li>All Rights Reserved</li>
        </ul>
      </div>

      <div className="footer-section">
        <a href="#top">Page Top</a>
      </div>

      <div className="ml-auto footer-section">
        <ul className="footer-list">
          <li>
            <a href="mailto:chris23w@gmail.com">Email</a>
          </li>

          <li>
            <a href="https://www.linkedin.com/in/christian-watson-/">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
