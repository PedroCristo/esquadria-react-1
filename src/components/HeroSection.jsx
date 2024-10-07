import React, { useState, useEffect } from "react";
import heroSlides from "../data/heroSlides";
import { HashLink as Link } from "react-router-hash-link";

import SocialIcons from "./layout/SocialIcons";

function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function nextSlide() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
  }

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 8000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <section className="home">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`content ${index === currentIndex ? "active" : ""}`}
        >
          <div className="overlay"></div>
          <img
            className={`img-slide show-desktop ${index === currentIndex ? "active" : ""}`}
            src={slide.imgSrc}
            alt={`Esquadria Imagem ${index + 1}`}
          />
          <img
            className={`img-slide show-tablet ${index === currentIndex ? "active" : ""}`}
            src={slide.imgSrcTablet}
            alt={`Esquadria Imagem ${index + 1}`}
          />
          <div className="home-content">
            <h1>{slide.heading}</h1>
            <h3>esquadria</h3>
            <p className="slide-from-bottom">{slide.description}</p>
            <Link to="#contact" className="btn">
              Agende uma Visita
            </Link>
          </div>
        </div>
      ))}
      <div className="social-desktop">
        <SocialIcons/>
      </div>
      <div className="slider-navigation">
        <div className="slider-navigation-dots">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`nav-btn ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
        <div className="slider-icon">
          <i className="fa fa-hand-pointer"></i>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
