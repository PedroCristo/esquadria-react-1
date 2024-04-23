// import "./LandingPage.css";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { HashLink as Link } from "react-router-hash-link";
import social_linksDB from "../../../data/social_links";
import { useChristmasMessage } from "../../../js/company_shedule";

function Showcase({ isActive, toggleMenu }) {
  const { message, christmasStyle, opacityStyle, positionStyle, widthStyle } = useChristmasMessage();
  const [isChristmasVisible, setChristmasVisible] = useState(true);

  const hideChristmasMessage = () => {
    setChristmasVisible(false);
  };
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
        {isChristmasVisible && (
            <div style={{ display: christmasStyle, opacity: opacityStyle, position: positionStyle, width: widthStyle }} className="christmas">
              <h4>
                {message}
              </h4>
              <i className="fa fa-times" onClick={hideChristmasMessage}></i>
          </div>
        )}
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
            {social_linksDB.map((social_item) => (
              <Link
                to={social_item.linkUrl}
                target="_blank"
                key={social_item.id}
              >
                <i className={social_item.socialClass}></i>
              </Link>
            ))}
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
