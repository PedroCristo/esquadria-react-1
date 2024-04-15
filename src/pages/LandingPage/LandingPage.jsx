import "./LandingPage.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };
  return (
    <div>
      <section id="showcase" className={`showcase ${isActive ? "active" : ""}`}>
        <div className="header">
          <Link to="/página-principal">
            <img
              src="images/esquadria_logos_restaurados/esquadria-logo_1.png"
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
      <nav className={`menu ${isActive ? "active" : ""}`}>
        <div className="toggler-2" onClick={toggleMenu}>
          <i className="fa fa-times fa-times-2"></i>
        </div>
        <ul>
          <li>
            <Link to="/página-principal">Início</Link>
          </li>
          <li>
            <Link to="/página-principal">Quem Somos</Link>
          </li>
          <li>
            <Link to="/política-privacidade">Política de Privacidade</Link>
          </li>
          <li>
            <Link to="/política-cookies">Política de Cookies</Link>
          </li>
          <li>
            <img
              src="images/esquadria_logos_restaurados/esquadria-logo_1.png"
              className="logo"
              alt="Esquadria Logo"
            />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default LandingPage;
