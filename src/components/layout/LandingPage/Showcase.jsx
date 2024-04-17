import "./LandingPage.css";
import React from "react";
import PropTypes from "prop-types";
import { HashLink as Link } from "react-router-hash-link";

function Showcase({ isActive, toggleMenu }) {
  return (
    <section id="showcase" className={`showcase ${isActive ? "active" : ""}`}>
      <div className="header">
        <Link to="/página-principal">
          <img
            src="images/logos/esquadria-logo_1.png"
            className="logo"
            alt="Esquadria Logo"
          />
        </Link>
        <div className="toggler" onClick={toggleMenu}>
          {isActive ? (
            <i className={`fa fa-times ${isActive ? "active" : ""}`}></i>
          ) : (
            <i className="fa fa-bars"></i>
          )}
        </div>
      </div>
      <video
        className="video_desktop"
        src="videos/desktop/esquadria_video_longo_desktop.mp4"
        muted
        loop
        autoPlay
      ></video>
      <video
        className="video_mobile"
        src="videos/mobile/esquadria_video_longo_mobile.mp4"
        muted
        loop
        autoPlay
      ></video>
      <div className="overlay"></div>
      <div className="text">
        <h2>esquadria</h2>
        <h3>Explorando o mundo das cozinhas</h3>
        <p>
          Na Esquadria ajudamo-lo a criar o seu espaço para levar os seus
          amigos, jantar e socializar.
        </p>
        <Link to="/página-principal" className="btn">
          Explorar
        </Link>
      </div>
      <div className="social">
        <ul>
          <li>
            <a
              href="https://www.facebook.com/esquadria"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a href="mailto:info@esquadria-sa.pt">
              <i className="far fa-envelope"></i>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
Showcase.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};
export default Showcase;
