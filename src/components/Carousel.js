import React, { useState } from 'react';
import './Carousel.css'; // Make sure to import the correct CSS file

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        {items.map((item, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex || index === (currentIndex + 1) % items.length ? 'active' : ''}`}
          >
            <img style={{ width:'300px', height:'200px' }} src={item.image} alt={item.caption} />
            <div className="caption">{item.caption}</div>
          </div>
        ))}
      </div>

      <div className="controls">
        <button onClick={prevSlide}>&lt; Prev</button>
        <button onClick={nextSlide}>Next &gt;</button>
      </div>

      <div className="indicators">
        {items.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
