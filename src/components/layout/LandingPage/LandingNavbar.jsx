import "./LandingPage.css";

// LandingNav.js
import React from "react";
import PropTypes from "prop-types";
import { HashLink as Link } from "react-router-hash-link";
import navLinksDb from "../../../data/nav_links";

function LandingNav({ isActive, toggleMenu }) {
  return (
    <nav className={`menu display-block ${isActive ? "active" : ""}`}>
      <div className="toggler-2" onClick={toggleMenu}>
        <i className="fa fa-times fa-times-2"></i>
      </div>
      <ul>
        {navLinksDb.map(
          (link) =>
            // Check if the link's ID is not equal to 6
            link.id !== 6 && (
              <li key={link.id}>
                <Link to={link.LinkUrl}>{link.title}</Link>
              </li>
            )
        )}
      </ul>
      <img
        src="images/logos/esquadria-logo_1.png"
        className="logo"
        alt="Esquadria Logo"
      />
    </nav>
  );
}

LandingNav.propTypes = {
    toggleMenu: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired,
  };

export default LandingNav;
