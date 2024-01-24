import React, { useState } from "react";
import "./CarouselCustom.css";
import UserCard from "./UserCard";

const CarouselCusom = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        {items.slice(currentIndex, currentIndex + 2).map((item, index) => (
          <div key={index} className={`slide ${index === 0 ? "active" : ""}`}>
            {/* <img src={item.image} alt={item.caption} />
            <div className="caption">{item.caption}</div> */}

            <div style={{ width: "300px", margin: "10px" }}>
              <p style={{ fontStyle: "italic", color: "black" }}>
                “Separated they live in Bookmarksgrove right at the coast of the
                Semantics, a large language ocean. A small river named Duden
                flows by their place and supplies it with the necessary
                regelialia. ”
              </p>
              <UserCard
                image={item.image}
                job={"CEO | Meta"}
                text={item.caption}
              />
            </div>
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
            className={`indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselCusom;
