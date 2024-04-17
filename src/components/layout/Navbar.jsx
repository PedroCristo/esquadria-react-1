import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import PropTypes from "prop-types";
import navLinksDb from "../../data/nav_links";

function Navbar({ showFullMenu }) {
  // State for tracking whether the page is scrolled or not
  const [isScrolled, setIsScrolled] = useState(false);
  // State for tracking whether the menu is open or not
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Effect to update the scrolled state based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to toggle the menu open/close state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? "active" : ""}`}>
      {/* Logo with a link to the home page */}
      <Link to="/página-principal">
        <img
          src="images/logos/esquadria-logo_1.png"
          className={`logo ${isScrolled ? "active" : ""}`}
          alt="Esquadria Logo"
        />
      </Link>

      {/* Menu button to toggle the menu */}
      <div className="menu-btn" onClick={toggleMenu}>
        {/* Bars icon for closed menu */}
        <i
          className={`fa fa-bars ${isMenuOpen ? "active" : "fa-bars"} ${
            isScrolled ? "fa-active" : ""
          }`}
        ></i>
        {/* Times icon for open menu */}
        <i
          className={`fa fa-times ${isMenuOpen ? "active" : "fa-times"} ${
            isScrolled ? "fa-active" : ""
          }`}
        ></i>
      </div>

      {/* Navigation menu */}
      <nav
        className={`navigation ${isMenuOpen ? "active" : ""}`}
        id="navigation"
      >
        <div className="navigation-items">
          <ul>
            {/* Map through navigation links and render them */}
            {navLinksDb.map((link) => {
              // Check if the link's ID is not equal to 7 or 8
              if (link.id !== 7 && link.id !== 8) {
                return (
                  <li key={link.id}>
                    {/* HashLink for smooth scrolling */}
                    <Link
                      to={link.LinkUrl}
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      className={`nav-link ${isScrolled ? "active" : ""} ${
                        showFullMenu ? "" : "color-dark"
                      }`}
                      onClick={toggleMenu}
                    >
                      {link.title}
                    </Link>
                  </li>
                );
              }
              return null; // If the ID is 7 or 8, return null to exclude it from rendering
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}

// PropTypes for type checking
Navbar.propTypes = {
  showFullMenu: PropTypes.string.isRequired,
};

export default Navbar;
