import React, { useState, useEffect } from "react";
import heroSlides from "../data/heroSlides";
import { Link } from "react-router-dom";

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
            className={`img-slide ${index === currentIndex ? "active" : ""}`}
            src={slide.imgSrc}
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
      <div className="media-icons">
        <a href="https://www.facebook.com/esquadria" target="_blank">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="" target="_blank">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="mailto:info@esquadria-sa.pt">
          <i className="far fa-envelope"></i>
        </a>
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
