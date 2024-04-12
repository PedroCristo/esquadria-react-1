import React, { useState, useEffect } from 'react';
import heroSlides from '../data/heroSlides';

function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);



  function nextSlide() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
  }

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <section className="home">
        <div className="overlay"></div>
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`content ${index === currentIndex ? 'active' : ''}`}
        >
          <img
            className={`img-slide ${index === currentIndex ? 'active' : ''}`}
            src={slide.imgSrc}
            alt={`Esquadria Imagem ${index + 1}`}
          />
          <h1>{slide.heading}</h1>
          <h3>esquadria</h3>
          <p>{slide.description}</p>
          <a href="#contact" className="btn">
            Agende uma Visita
          </a>
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
              className={`nav-btn ${index === currentIndex ? 'active' : ''}`}
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
