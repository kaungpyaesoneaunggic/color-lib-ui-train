import React, { useState,forwardRef, useImperativeHandle, useRef } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import UserCard from './UserCard';
import usertwo from "../images/usertwo.jpg";
import userone from "../images/userone.jpg";


const CarouselSlick = forwardRef((props, ref) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderRef = useRef();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => setCurrentSlide(index),
  };

  const goToNext = () => {
    if (currentSlide < 2) {
      setCurrentSlide(currentSlide + 1);
      sliderRef.current.slickNext();
    }
  };

  const goToPrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      sliderRef.current.slickPrev();
    }
  };

  // Expose the functions through the ref
  useImperativeHandle(ref, () => ({
    goToNext,
    goToPrev,
  }), [currentSlide]);
  return (
    <div>
      <Slider  {...settings}>
      <div style={{ width: "300px", margin: "10px" }}>
        <p style={{ fontStyle: "italic", color: "black" }}>
            “Separated they live in Bookmarksgrove right at the coast of the
            Semantics, a large language ocean. A small river named Duden flows
            by their place and supplies it with the necessary regelialia. ”
          </p>
          <UserCard
            image={usertwo}
            job={"CEO | Meta"}
            text={"Mark Zuckerberg"}
          />
        </div>

        <div style={{ width: "300px", margin: "10px" }}>
        <p style={{ fontStyle: "italic", color: "black" }}>
            “Separated they live in Bookmarksgrove right at the coast of the
            Semantics, a large language ocean. A small river named Duden flows
            by their place and supplies it with the necessary regelialia. ”
          </p>
          <UserCard
            image={userone}
            job={"Assistant | X"}
            text={"Elon Musk"}
          />
        </div>


        <div style={{ width: "300px", margin: "10px" }}>
        <p style={{ fontStyle: "italic", color: "black" }}>
            “Separated they live in Bookmarksgrove right at the coast of the
            Semantics, a large language ocean. A small river named Duden flows
            by their place and supplies it with the necessary regelialia. ”
          </p>
          <UserCard
            image={userone}
            job={"Mad Scientist | Jobless"}
            text={"Rick Sanchez"}
          />
        </div>

      </Slider>
    </div>
  )});

  
  export default CarouselSlick;