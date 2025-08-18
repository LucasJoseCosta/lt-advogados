import React, { useState, useEffect } from 'react';
import carrousel1 from '../images/carrousel1.jpg';
import carrousel2 from '../images/carrousel2.jpg';
import carrousel3 from '../images/carrousel3.jpg';
import carrousel4 from '../images/carrousel4.jpg';
import '../styles/HeroCarousel.css';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselImages = [carrousel1, carrousel2, carrousel3, carrousel4];
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  return (
    <section className="hero-carousel">
      <div className="carousel-container">
        <div className="carousel-wrapper">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            >
              <img 
                src={image} 
                alt={`Slide ${index + 1}`}
                className="carousel-image"
              />
            </div>
          ))}
        </div>
        
        <div className="carousel-content">
          <button className="cta-button">
            Fale conosco!
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;